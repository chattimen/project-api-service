import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private svc;
    constructor(svc: OrderService);
    findAll(): Promise<import("./order.entity").Order[]>;
    findOne(id: string): Promise<import("./order.entity").Order>;
    create(dto: CreateOrderDto): Promise<{
        status: string;
        productId: number;
        quantity: number;
        customerEmail: string;
    } & import("./order.entity").Order>;
}
