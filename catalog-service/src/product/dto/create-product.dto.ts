import { IsNotEmpty, IsPositive, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  price: number;

  @Min(0)
  stock: number;
}
