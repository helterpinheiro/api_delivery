import {
  IsString,
  IsNotEmpty,
  isNotEmpty,
  IsEmail,
  IsEmpty,
  IsBoolean,
} from 'class-validator';
import { TypeUser } from '../interfaces/type_user.interface';

export class CriarUserDTO {
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

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  doc: string;

  @IsBoolean()
  @IsNotEmpty()
  isDeleted: boolean;
}
