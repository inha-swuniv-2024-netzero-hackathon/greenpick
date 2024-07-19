import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Goods } from './entities/goods.entity';
import { GoodsService } from './goods.service';
import { CreateGoodsDto } from './dtos/create-goods.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Goods')
@Controller('/api/goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Post('/')
  async createGoods(@Body() createGoodsDto: CreateGoodsDto): Promise<Goods> {
    return await this.goodsService.createGoods(createGoodsDto);
  }

  @Get('/:count')
  async getRandomGoods(): Promise<Goods[]> {
    return await this.goodsService.getRandomGoods();
  }

  @Get('/category/:category')
  async getRandomGoodsByCategoty(
    @Param('category') category: string,
  ): Promise<Goods[]> {
    return await this.goodsService.getRandomGoodsByCategory(category);
  }
}
