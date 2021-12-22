import { NestFactory } from '@nestjs/core';
import { PartenaireModule } from './partenaire.module';

async function bootstrap() {
  const app = await NestFactory.create(PartenaireModule);
  await app.listen(3000);
}
bootstrap();
