import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductController {
    private svc;
    constructor(svc: ProductService);
    findAll(): Promise<import("./product.entity").Product[]>;
    findOne(id: string): Promise<import("./product.entity").Product>;
    create(dto: CreateProductDto): Promise<CreateProductDto & import("./product.entity").Product>;
    update(id: string, dto: Partial<CreateProductDto>): Promise<import("./product.entity").Product>;
    remove(id: string): Promise<import("./product.entity").Product>;
}
