import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestIdInterceptor } from './interceptors/request-id.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new RequestIdInterceptor());
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
