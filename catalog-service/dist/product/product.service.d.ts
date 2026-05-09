import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductService {
    private repo;
    constructor(repo: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(dto: CreateProductDto): Promise<CreateProductDto & Product>;
    update(id: number, dto: Partial<CreateProductDto>): Promise<Product>;
    remove(id: number): Promise<Product>;
}
