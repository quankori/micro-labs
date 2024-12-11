import { Injectable } from '@nestjs/common';
import { UserEntity } from '../users';
@Injectable()
export class UserFactory {
  create(username: string, password: string, fullname: string) {
    return new UserEntity(username, password, fullname);
  }
}
