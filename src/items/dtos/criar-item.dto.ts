import { IsString, IsNotEmpty, isNotEmpty } from 'class-validator';

export class CriarItemDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  brand: string;
}
