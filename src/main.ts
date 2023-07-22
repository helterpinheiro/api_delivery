import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import * as momentTimezone from 'moment-timezone';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  Date.prototype.toJSON = function (): any {
    return momentTimezone(this)
      .tz('America/Sao_Paulo')
      .format('YYY-MM-DD HH:mm:ss.SSS');
  };

  const config = new DocumentBuilder()
    .setTitle('Documentação API - Enafood')
    .setDescription(
      'A api da Enafood é capaz de cadastrar e modificar Usuários, items e compras',
    )
    .setVersion('1.0')
    .addTag('Users')
    .addTag('Items')
    .addTag('Purchase')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3333);
}
bootstrap();
