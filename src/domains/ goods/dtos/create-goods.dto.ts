import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateGoodsDto {
  @ApiProperty()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  market: string;

  @ApiProperty()
  @IsNotEmpty()
  marketUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  category: string;

  @ApiProperty()
  @IsNotEmpty()
  greenScore: number;

  @ApiProperty()
  @IsNotEmpty()
  deliveryFee: number;
}
