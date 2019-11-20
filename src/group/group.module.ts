import { GroupResolver } from './group.resolver';
import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [GroupResolver, GroupService],
  exports: [GroupService],
})
export class GroupModule {}
