import { Injectable, Logger, NotFoundException } from '@nestjs/common';
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

  async listAllItems(): Promise<Array<Item>> {
    return await this.itemModel.find().exec();
  }

  async listItemForId(_id: string): Promise<Item> {
    const item = await this.itemModel.findOne({ _id }).exec();
    if (!item) {
      throw new NotFoundException(`item with id ${_id} not found!`);
    }

    return item;
  }

  async updateItem(_id: any, criarItemDTO: CriarItemDTO): Promise<Item> {
    const item = await this.itemModel.findOne({ _id }).exec();
    if (!item) {
      throw new NotFoundException(`item with id ${_id} not found!`);
    }

    return await this.itemModel
      .findOneAndUpdate({ _id }, { $set: criarItemDTO })
      .exec();
  }

  async deleteItem(_id: any): Promise<void> {
    const item = await this.itemModel.findOne({ _id }).exec();
    if (!item) {
      throw new NotFoundException(`item with id ${_id} not found!`);
    }

    await this.itemModel.deleteOne({ _id }).exec();
  }
}
