import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { Item } from 'src/items/interfaces/item.interface';
import { User } from 'src/users/interfaces/user.interface';

export class CriarPurchaseDTO {
  @ApiProperty({
    example: '{"_id":"116516526515asdasd"}',
    description:
      'Objeto com uma chave _id dentro para referenciar um usuário da tabela users',
  })
  @IsNotEmpty()
  user: User;

  @ApiProperty({
    example: '{"_id":"7989484988754asdasd"}',
    description:
      'Objeto com uma chave _id dentro para referenciar um item da tabela items',
  })
  @IsNotEmpty()
  @IsArray()
  item: Array<Item>;

  // @IsNotEmpty()
  // @IsNumber()
  // qtd: number;
}
