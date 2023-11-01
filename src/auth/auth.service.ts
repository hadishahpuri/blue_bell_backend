import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async singIn(signInDto: SignInDto): Promise<any> {
    const user = this.userService.findByEmail(signInDto.email);
    console.log(user);
  }
}
