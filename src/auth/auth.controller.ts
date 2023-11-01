import { Body, Controller, HttpStatus, Res } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  signIn(@Res() res, @Body() signInDto: SignInDto) {
    const user = this.authService.singIn(signInDto);
    res.statusCode(HttpStatus.OK).json(user);
  }
}
