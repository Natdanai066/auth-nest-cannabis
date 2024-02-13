import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cannabis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lc: string;

  @Column()
  detail: string;

  @Column()
  image: string;
  
  @Column()
  embed: string;
}
