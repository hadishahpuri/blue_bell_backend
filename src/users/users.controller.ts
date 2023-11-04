import { Controller, Get, Res } from '@nestjs/common';
import { UserService } from './users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async users(@Res() res: Response) {
    res.send(this.userService.getAll());
  }
}
