import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post('login')
  login(@Body() loginDro: LoginDto): object {
    return {};
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto): object {
    return {};
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): object {
    return this.userService.create(createUserDto);
  }
}
