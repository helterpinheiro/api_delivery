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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Items')
@Controller('api/v1/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @ApiOperation({
    description:
      'Endpoint responsável por cadastrar produtos novos na plataforma',
  })
  @UsePipes(ValidationPipe)
  async createItem(@Body() criarItemDTO: CriarItemDTO): Promise<Item> {
    return await this.itemsService.createItem(criarItemDTO);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description:
      'Endpoint responsável por listas todos os produtos na plataforma',
  })
  @Get()
  async listAllItems(): Promise<Array<Item>> {
    return this.itemsService.listAllItems();
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description:
      'Endpoint responsável por listar produtos a partir de um id válido passado',
  })
  @Get()
  async listItemForId(
    @Param('_id', ValidacaoParametroPipe) _id: string,
  ): Promise<Item> {
    return this.itemsService.listItemForId(_id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description:
      'Endpoint responsável por atualizar produtos na plataforma a partir de um id válido passado',
  })
  @Put('/:_id')
  async updateItem(
    @Body() criarItemDTO: CriarItemDTO,
    @Param('_id', ValidacaoParametroPipe) _id: string,
  ): Promise<Item> {
    return this.itemsService.updateItem(_id, criarItemDTO);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description:
      'Endpoint responsável por deleter produtos na plataforma a partir de um id válido passado',
  })
  @Delete('/:_id')
  async deleteItem(
    @Param('_id', ValidacaoParametroPipe) _id: string,
  ): Promise<void> {
    this.itemsService.deleteItem(_id);
  }
}
