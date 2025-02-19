import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './common/filters/all-exceptions-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalPipes(
    new ValidationPipe({
      //dto마다 @Type을 지정해 줄 필요가 없다.
      transform: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: false,
      },
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  const config = new DocumentBuilder()
    .setTitle('GreenPick Backend')
    .setDescription('API Document')
    .setVersion('1.0')
    .addTag('Goods', '제품 관련 기능')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
