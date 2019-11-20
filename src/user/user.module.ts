import { UserResolver } from './user.resolver';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
