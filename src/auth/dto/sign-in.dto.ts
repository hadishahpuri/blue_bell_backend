import { match } from 'assert';
import { IsEmail, IsString, Length, MinLength } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(3, 50)
  name: string;

  @IsString()
  @MinLength(5)
  password: string;

  @IsString()
  @MinLength(5)
  password_confirm: string;
}
