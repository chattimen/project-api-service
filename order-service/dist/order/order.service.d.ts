import { OnModuleInit } from '@nestjs/common';
import { ClientGrpc, ClientKafka } from '@nestjs/microservices';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderService implements OnModuleInit {
    private repo;
    private grpcClient;
    private kafkaClient;
    private stockGrpc;
    constructor(repo: Repository<Order>, grpcClient: ClientGrpc, kafkaClient: ClientKafka);
    onModuleInit(): Promise<void>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    create(dto: CreateOrderDto): Promise<{
        status: string;
        productId: number;
        quantity: number;
        customerEmail: string;
    } & Order>;
}
