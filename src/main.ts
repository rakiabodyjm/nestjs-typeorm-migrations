import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await await NestFactory.create(AppModule)
  await app.listen(5000)
}
bootstrap()
