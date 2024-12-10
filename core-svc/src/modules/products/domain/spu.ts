import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SKUEntity } from './sku';

@Entity('spus') // Standard Product Unit
export class SPUEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => SKUEntity, (sku) => sku.spu, { cascade: true })
  skus: SKUEntity[];

  constructor(name: string) {
    this.name = name;
  }
}
