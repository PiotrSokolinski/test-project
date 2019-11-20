import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { Inject, forwardRef } from '@nestjs/common';
import { ID } from 'type-graphql';
import { GroupEntity } from './group.entity';
import { GroupDto } from './group.dto';
import { GroupService } from './group.service';
import { UserService } from '../user/user.service';
import { UserDto } from '../user/user.dto';

@Resolver(of => GroupEntity)
export class GroupResolver {
  constructor(
    private readonly groupService: GroupService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  @Query(returns => GroupDto, { name: 'group' })
  async getGroup(@Args({ name: 'id', type: () => ID }) id: number) {
    return await this.groupService.findOneById(id);
  }

  @ResolveProperty(returns => [UserDto], { name: 'members' })
  async getUsers(@Parent() group) {
    const { id } = group;
    return await this.userService.findGroupUsers(id);
  }
}
