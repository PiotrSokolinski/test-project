import { UserResolver } from './user.resolver';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
