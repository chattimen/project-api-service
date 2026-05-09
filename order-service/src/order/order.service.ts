import { HttpException, HttpStatus, Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientGrpc, ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService implements OnModuleInit {
  private stockGrpc: any;

  constructor(
    @InjectRepository(Order) private repo: Repository<Order>,
    @Inject('STOCK_PACKAGE') private grpcClient: ClientGrpc,
    @Inject('KAFKA_CLIENT') private kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.stockGrpc = this.grpcClient.getService('StockService');
    await this.kafkaClient.connect();
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async create(dto: CreateOrderDto) {
    const result = await firstValueFrom(
      this.stockGrpc.checkAndReserve({ productId: dto.productId, quantity: dto.quantity }),
    ) as { available: boolean; message: string };

    const { available, message } = result;

    if (!available) {
      throw new HttpException({ message }, HttpStatus.CONFLICT);
    }

    const order = await this.repo.save({ ...dto, status: 'CONFIRMED' });
    this.kafkaClient.emit('order.created', order);
    return order;
  }
}
