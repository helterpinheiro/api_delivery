import { Injectable, Logger } from '@nestjs/common';
import { CriarItemDTO } from './dtos/criar-item.dto';
import { Item } from './interfaces/item.interface';
import { v4 as uuidv4 } from 'uuid';
import { timeStamp } from 'console';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  private readonly logger = new Logger(ItemsService.name);

  async createItem(criarItemDTO: CriarItemDTO): Promise<Item> {
    const createdItem = new this.itemModel(criarItemDTO);
    return await createdItem.save();
  }
}
