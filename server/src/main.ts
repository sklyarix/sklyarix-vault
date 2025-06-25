import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  ); // Без этого class-validator не будет работать:
  app.enableCors({
    origin: 'http://localhost:5173', // твой фронтенд (Vite)
  });
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
