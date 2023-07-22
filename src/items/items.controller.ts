import {
  Controller,
  Body,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
  UseGuards,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CriarItemDTO } from './dtos/criar-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { JwtAuthGuard } from 'src/auth/jwt.auth-guard';
import { ValidacaoParametroPipe } from 'src/common/pipes/validacao-parametros.pipe';

@Controller('api/v1/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createItem(@Body() criarItemDTO: CriarItemDTO): Promise<Item> {
    return await this.itemsService.createItem(criarItemDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async listAllItems(): Promise<Array<Item>> {
    return this.itemsService.listAllItems();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async listItemForId(
    @Param('_id', ValidacaoParametroPipe) _id: string,
  ): Promise<Item> {
    return this.itemsService.listItemForId(_id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:_id')
  async updateItem(
    @Body() criarItemDTO: CriarItemDTO,
    @Param('_id', ValidacaoParametroPipe) _id: string,
  ): Promise<Item> {
    return this.itemsService.updateItem(_id, criarItemDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:_id')
  async deleteItem(
    @Param('_id', ValidacaoParametroPipe) _id: string,
  ): Promise<void> {
    this.itemsService.deleteItem(_id);
  }
}
