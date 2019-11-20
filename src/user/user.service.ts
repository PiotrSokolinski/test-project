import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
  ) {}

  async getUsers(): Promise<UserEntity[]> {
    return await this.UserRepository.find();
  }

  async findGroupUsers(passedId: number) {
    return await this.UserRepository.find({
      where: { group: { id: passedId } },
    });
  }
}
