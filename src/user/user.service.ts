import { Injectable } from '@nestjs/common';

const mocksUsers = [
  {
    id: 1,
    email: 'sample.email@gmail.com',
    hashedPassword: 'sadadasdsadsad',
    firstName: 'John',
    lastName: 'Doe',
    group: {
      id: 1,
    },
    avatarUrl: '',
    owner: false,
    token: 'Token',
    nick: 'John',
    role: 'User',
    color: 'black',
  },
  {
    id: 2,
    email: 'sample.email2@gmail.com',
    hashedPassword: 'sadadasdsadsad',
    firstName: 'John2',
    lastName: 'Doe2',
    group: {
      id: 1,
    },
    avatarUrl: '',
    owner: false,
    token: 'Token2',
    nick: 'John2',
    role: 'User',
    color: 'black',
  },
  {
    id: 3,
    email: 'sample.email3@gmail.com',
    hashedPassword: 'sadadasdsadsad',
    firstName: 'John3',
    lastName: 'Doe3',
    group: {
      id: 2,
    },
    avatarUrl: '',
    owner: false,
    token: 'Token3',
    nick: 'John3',
    role: 'User',
    color: 'black',
  },
];

@Injectable()
export class UserService {
  constructor() {}

  async getUsers(): Promise<any[]> {
    return await mocksUsers;
  }

  async findGroupUsers(passedId: number) {
    return await mocksUsers.filter(user => user.group.id === passedId);
  }
}
