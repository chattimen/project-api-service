import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'stock',
      protoPath: join(__dirname, 'stock.proto'),
      url: 'localhost:5000',
    },
  });
  await app.listen();
  console.log('stock-service gRPC running on port 5000');
}

bootstrap();
