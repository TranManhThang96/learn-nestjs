import { Expose, Exclude } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @Expose()
  id: number;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsNumber()
  price: number;

  @IsNumber()
  cost: number;
}
