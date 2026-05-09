export declare class StockService {
    private stocks;
    checkAndReserve(productId: number, quantity: number): {
        available: boolean;
        message: string;
    };
}
