import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private round = 10,
  ) {}

  async singIn(signInDto: SignInDto): Promise<any> {
    const userExists = this.userService.findByEmail(signInDto.email);
    if (userExists) {
      throw new UnauthorizedException();
    }

    if (signInDto.password != signInDto.password_confirm) {
      throw new UnprocessableEntityException();
    }

    const user = this.userService.create({
      name: signInDto.name,
      email: signInDto.email,
      password: this.hashPassword(signInDto.password).toString(),
    });

    return this.generateAccessToken(user);
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, this.round);
  }

  async hashPasswordIsCorrect(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }

  async generateAccessToken(user: User) {
    const payload = { sub: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
