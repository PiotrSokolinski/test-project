import { Resolver, Query } from '@nestjs/graphql';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Resolver(of => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => [UserDto])
  async getUsers() {
    return this.userService.getUsers();
  }
}
