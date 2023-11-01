import { match } from 'assert';
import { IsEmail, IsString, Length, MinLength } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: String;

  @IsString()
  @Length(3, 50)
  name: String;

  @IsString()
  @MinLength(5)
  password: String;

  @IsString()
  @MinLength(5)
  password_confirm: String;
}
