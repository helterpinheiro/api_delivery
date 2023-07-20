import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://helter:CylgJG8e76lkRuJH@cluster0.omqjyrh.mongodb.net/enafood?retryWrites=true&w=majority',
    ),
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
