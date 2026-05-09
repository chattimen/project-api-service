import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { OrderController } from './order/order.controller';
import { Order } from './order/order.entity';
import { OrderService } from './order/order.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'orders.db',
      entities: [Order],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Order]),
    ClientsModule.register([
      {
        name: 'STOCK_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'stock',
          protoPath: join(__dirname, 'stock.proto'),
          url: 'localhost:5000',
        },
      },
      {
        name: 'KAFKA_CLIENT',
        transport: Transport.KAFKA,
        options: { client: { brokers: ['localhost:9092'] } },
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class AppModule {}
