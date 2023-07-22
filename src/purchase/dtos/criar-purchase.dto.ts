import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { Item } from 'src/items/interfaces/item.interface';
import { User } from 'src/users/interfaces/user.interface';

export class CriarPurchaseDTO {
  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  @IsArray()
  item: Array<Item>;

  // @IsNotEmpty()
  // @IsNumber()
  // qtd: number;
}
