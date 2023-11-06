import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const randomPort = Math.floor(Math.random() * (9999 - 3000 + 1) + 3000);
  const app = await NestFactory.create(AppModule);
  await app.listen(randomPort);
}
bootstrap();
