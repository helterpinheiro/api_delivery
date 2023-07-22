import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/schema/user.schema';
import { ItemSchema } from 'src/items/schema/item.schema';
import { PurchaseShema } from './schema/purchase.schema';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Purchase', schema: PurchaseShema },
      { name: 'User', schema: UserSchema },
      { name: 'Item', schema: ItemSchema },
    ]),
  ],
  controllers: [PurchaseController],
  providers: [PurchaseService, UsersService],
  exports: [PurchaseService],
})
export class PurchaseModule {}
