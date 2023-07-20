import {
  Controller,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CriarItemDTO } from './dtos/criar-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('api/v1/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createItem(@Body() criarItemDTO: CriarItemDTO): Promise<Item> {
    return await this.itemsService.createItem(criarItemDTO);
  }
}
