import { ApiProperty } from '@nestjs/swagger';

export class CreateGoodsDto {
  @ApiProperty()
  price: number;

  @ApiProperty()
  market: string;

  @ApiProperty()
  marketUrl: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  greenScore: number;

  @ApiProperty()
  registerDate: string;

  @ApiProperty()
  deliveryFee: number;
}
