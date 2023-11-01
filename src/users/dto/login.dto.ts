import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: String;

  @IsNotEmpty()
  password: String;
}
