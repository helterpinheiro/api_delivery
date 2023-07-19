import { IsString, IsNotEmpty } from 'class-validator';

export class CriarItemDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
