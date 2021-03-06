import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupEntity } from './group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly GroupRepository: Repository<GroupEntity>,
  ) {}

  async findOneById(passedId: number): Promise<GroupEntity> {
    return this.GroupRepository.findOne({ where: { id: passedId } });
  }
}
