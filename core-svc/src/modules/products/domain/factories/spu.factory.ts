import { Injectable } from '@nestjs/common';
import { SPUEntity } from '../spu';
@Injectable()
export class SPUFactory {
  create(name: string) {
    return new SPUEntity(name);
  }
}
