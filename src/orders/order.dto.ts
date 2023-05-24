import { IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  user_id: string;

  @IsString()
  total_price: string;
}
