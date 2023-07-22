import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Item } from 'src/items/interfaces/item.interface';
import { CriarPurchaseDTO } from './dtos/criar-purchase.dto';
import { Purchase } from './interfaces/purchase.interface';
import { ItemsService } from 'src/items/items.service';
import { UsersService } from 'src/users/users.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectModel('Purchase') private purchaseModel: Model<Purchase>,
    @InjectModel('User') private userModel: Model<User>,
    private userService: UsersService,
  ) {}

  private readonly logger = new Logger(PurchaseService.name);

  async createPurchase(criarPurchaseDTO: CriarPurchaseDTO): Promise<Purchase> {
    const users = await this.userService.listAllUsers();
    const userFilter = users.filter(
      (user) => user._id == criarPurchaseDTO.user._id,
    );

    if (userFilter.length == 0) {
      throw new BadRequestException(
        `The id ${criarPurchaseDTO.user._id} is not a user!`,
      );
    }

    const user = userFilter.pop();
    if (
      user.type_user._id == '64b9563d5f12c9d4bf7224b5' &&
      criarPurchaseDTO.item.length > 3
    ) {
      throw new BadRequestException(
        `The user ${criarPurchaseDTO.user._id} will only be able to purchase 25 itens!`,
      );
    }

    const purchase = new this.purchaseModel(criarPurchaseDTO);
    return await purchase.save();
  }
}
