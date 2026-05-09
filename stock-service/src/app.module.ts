import { Module } from '@nestjs/common';
import { StockController } from './stock/stock.controller';
import { StockService } from './stock/stock.service';

@Module({
  controllers: [StockController],
  providers: [StockService],
})
export class AppModule {}
