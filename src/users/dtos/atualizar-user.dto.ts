import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { TypeUser } from '../interfaces/type_user.interface';

export class AtualizarUserDTO {
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
  address: string;

  @IsString()
  @IsNotEmpty()
  doc: string;
}
