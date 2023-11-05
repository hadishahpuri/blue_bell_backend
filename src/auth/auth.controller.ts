import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign_in')
  async signIn(@Res() res: Response, @Body() signInDto: SignInDto) {
    const user = await this.authService.singIn(signInDto);
    res.status(HttpStatus.OK).send(user);
  }

  @Post('login')
  async login(@Res() res: Response, @Body() loginDto: LoginDto) {
    const user = await this.authService.login(loginDto);
    res.status(HttpStatus.OK).send(user);
  }
}
