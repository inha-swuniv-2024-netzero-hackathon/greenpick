import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from './entities/goods.entity';
import { GoodsService } from './goods.service';
import { GoodsController } from './goods.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Goods])],
  providers: [GoodsService],
  controllers: [GoodsController],
})
export class GoodsModule {}
