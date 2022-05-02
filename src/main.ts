import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle("nodemailer ")
    .setDescription("nodemailer with nestjs")
    .setVersion("1.0")
    .addTag("nodemailer")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("explorer", app, document);

  await app.listen(3000);
}
bootstrap();
