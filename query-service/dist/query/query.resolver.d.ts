import { Order } from '../order/order.model';
import { Product } from '../product/product.model';
export declare class QueryResolver {
    products(): Promise<Product[]>;
    orders(): Promise<Order[]>;
    orderById(id: string): Promise<Order>;
}
