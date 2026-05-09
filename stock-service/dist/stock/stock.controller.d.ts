import { StockService } from './stock.service';
export declare class StockController {
    private svc;
    constructor(svc: StockService);
    checkAndReserve(data: {
        productId: number;
        quantity: number;
    }): {
        available: boolean;
        message: string;
    };
}
