import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { AuthModule } from './auth/auth.module';
import { PurchaseModule } from './purchase/purchase.module';
config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.URI_MONGO),
    ItemsModule,
    AuthModule,
    PurchaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
