import { Injectable } from '@nestjs/common';
import { SKUEntity } from '../sku';
import { SPUEntity } from '../spu';
@Injectable()
export class SKUFactory {
  create(color: string, size: string, stockQuantity: number, spu: SPUEntity) {
    return new SKUEntity(color, size, stockQuantity, spu);
  }
}
