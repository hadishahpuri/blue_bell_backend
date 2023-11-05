import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/user.schema';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private round: number;
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {
    this.round = 10;
  }

  async singIn(signInDto: SignInDto): Promise<any> {
    const userExists = await this.userService.findByEmail(signInDto.email);

    if (userExists) {
      throw new HttpException(
        'Email already taken!',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    if (signInDto.password != signInDto.password_confirm) {
      throw new HttpException(
        'The password field does not match the password confirmation!',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const user = await this.userService.create({
      name: signInDto.name,
      email: signInDto.email,
      password: await this.hashPassword(signInDto.password),
    });

    const accessToken = await this.generateAccessToken(user);
    return {
      user: user,
      access_token: accessToken,
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);

    if (
      !user ||
      !(await this.hashPasswordIsCorrect(loginDto.password, user.password))
    ) {
      throw new HttpException('Invalid credentials!', HttpStatus.UNAUTHORIZED);
    }

    const accessToken = await this.generateAccessToken(user);
    return {
      user: user,
      access_token: accessToken,
    };
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, this.round);
  }

  async hashPasswordIsCorrect(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }

  async generateAccessToken(user: User) {
    const payload = { sub: user.email };
    return await this.jwtService.signAsync(payload);
  }
}
