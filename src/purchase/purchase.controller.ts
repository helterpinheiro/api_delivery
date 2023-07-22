import {
  Body,
  Controller,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CriarPurchaseDTO } from './dtos/criar-purchase.dto';
import { Purchase } from './interfaces/purchase.interface';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Purchase')
@Controller('api/v1/purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  private readonly logger = new Logger(PurchaseController.name);

  @ApiOperation({
    description:
      'Endpoint onde se cadastra uma nova compra, a compra caso o usuário for Pessoa Física será de ATÉ 25 itens, caso for Pessoa Jurídica o número de itens é ilimitado.',
  })
  @Post()
  @UsePipes(ValidationPipe)
  async createPurchase(
    @Body() criarPurchaseDTO: CriarPurchaseDTO,
  ): Promise<Purchase> {
    return await this.purchaseService.createPurchase(criarPurchaseDTO);
  }
}
