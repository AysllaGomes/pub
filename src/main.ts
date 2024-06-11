import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import { environment } from './config/environment';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(environment.app.port);
}

bootstrap();
