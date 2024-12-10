import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SPUEntity } from './spu';

@Entity('skus') // Stock Keeping Unit
export class SKUEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  color: string;

  @Column()
  size: string;

  @Column('int')
  stockQuantity: number;

  @ManyToOne(() => SPUEntity, (spu) => spu.skus, { onDelete: 'CASCADE' })
  spu: SPUEntity;

  constructor(
    color: string,
    size: string,
    stockQuantity: number,
    spu: SPUEntity,
  ) {
    this.color = color;
    this.size = size;
    this.stockQuantity = stockQuantity;
    this.spu = spu;
  }
}
