import { Injectable } from '@nestjs/common';

@Injectable()
export class StockService {
  private stocks: Record<number, number> = { 1: 10, 2: 5, 3: 0 };

  checkAndReserve(productId: number, quantity: number) {
    const available = (this.stocks[productId] ?? 0) >= quantity;
    if (available) this.stocks[productId] -= quantity;
    return {
      available,
      message: available
        ? `Stock reserve (${quantity} unit(s) for product ${productId})`
        : `Stock insufficient for product ${productId}`,
    };
  }
}
