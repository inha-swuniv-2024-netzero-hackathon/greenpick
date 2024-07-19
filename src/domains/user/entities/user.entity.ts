import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 50 })
  email: string;

  @Column({ length: 1024, nullable: true })
  password: string;

  @Column({ unique: true, length: 30 })
  nickname: string;
}
