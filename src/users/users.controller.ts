import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('users')
export class UsersController {
  @Post('login')
  login(@Body() loginDro: LoginDto): object {
    return {};
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto): object {
    return {};
  }
}
