import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Goods } from './entities/goods.entity';
import { Repository } from 'typeorm';
import { CreateGoodsDto } from './dtos/create-goods.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Goods)
    private readonly goodsRepository: Repository<Goods>,
  ) {}

  async createGoods(createGoodsDto: CreateGoodsDto): Promise<Goods> {
    const goods: Goods = plainToClass(Goods, createGoodsDto);
    return await this.goodsRepository.save(goods);
  }

  async getRandomGoods(): Promise<Goods[]> {
    return this.goodsRepository
      .createQueryBuilder('goods')
      .orderBy('RANDOM()')
      .limit(10)
      .getMany();
  }

  async getRandomGoodsByCategory(category: string): Promise<Goods[]> {
    return this.goodsRepository
      .createQueryBuilder('goods')
      .where('goods.category = :category', { category })
      .orderBy('RANDOM()')
      .limit(10)
      .getMany();
  }
}
