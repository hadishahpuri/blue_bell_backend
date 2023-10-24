import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

Injectable();
export class UserService {
  create(user: User): User {
    return {
      name: 'Hadi',
      email: 'hadishahpuri@gmail.com',
    };
  }
}
