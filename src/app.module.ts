import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/database.module';
import { GoodsModule } from './domains/ goods/goods.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.develop.env',
    }),
    DatabaseModule,
    GoodsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
