import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { mustHeaders } from './middlewares/mustheaders';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(mustHeaders);
  await app.listen(3000);
}
bootstrap();
