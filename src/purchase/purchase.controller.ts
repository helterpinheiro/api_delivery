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

@Controller('api/v1/purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  private readonly logger = new Logger(PurchaseController.name);

  @Post()
  @UsePipes(ValidationPipe)
  async createPurchase(
    @Body() criarPurchaseDTO: CriarPurchaseDTO,
  ): Promise<Purchase> {
    return await this.purchaseService.createPurchase(criarPurchaseDTO);
  }
}
