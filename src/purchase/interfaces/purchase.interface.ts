import { Item } from 'src/items/interfaces/item.interface';
import { User } from 'src/users/interfaces/user.interface';

export interface Purchase extends Document {
  readonly _id: string;
  user: User;
  item: Array<Item>;
  qtd: number;
}
