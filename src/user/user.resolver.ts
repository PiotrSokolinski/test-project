import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Resolver('users')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => [UserDto])
  async getUsers() {
    return this.userService.getUsers();
  }
}
