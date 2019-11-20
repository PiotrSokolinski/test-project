import { Injectable } from '@nestjs/common';

const mockGroups = [
  {
    id: 1,
    name: 'Group Name',
    members: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
    avatarUrl: '',
    address: 'Address',
    number: 20,
    zipCode: '12-123',
    city: 'City',
    country: 'Country',
  },
];

@Injectable()
export class GroupService {
  constructor() {}

  async findOneById(passedId: number): Promise<any> {
    return mockGroups[0];
  }
}
