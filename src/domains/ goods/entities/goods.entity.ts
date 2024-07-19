import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  market: string;

  @Column()
  marketUrl: string;

  @Column()
  category: string;

  @Column()
  greenScore: number;

  @Column()
  deliveryDate: number;

  @Column()
  reviewCount: number;

  @Column()
  rate: number;
}
