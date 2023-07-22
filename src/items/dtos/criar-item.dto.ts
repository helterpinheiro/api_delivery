import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, isNotEmpty } from 'class-validator';

export class CriarItemDTO {
  @ApiProperty({
    example: 'Arroz',
    description:
      'Nome do item, será usada para qualquer coisa que precise exibir informações do produto',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example:
      'Arroz arbóreo. Um arroz de grão curto, com consistência amolecida e textura cremosa.',
    description:
      'Utilizado para descrever o produto e utilizado para exibir informações do item sempre que precise.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'Marca Fulano de Tal',
    description:
      'Utilizado para informas a marca do produto e utilizado para exibir informações do item sempre que precise.',
  })
  @IsString()
  @IsNotEmpty()
  brand: string;
}
