import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { TypeUser } from '../interfaces/type_user.interface';

export class UserSessionDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type_user: TypeUser;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
