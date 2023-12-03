import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

async function bootstrap() {
  dayjs.extend(utc);
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}

bootstrap();