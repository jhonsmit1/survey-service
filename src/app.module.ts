import { Module } from '@nestjs/common';
import { HelloController } from './controllers/hello.controller';
import { HelloService } from './services/hello.service';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';

@Module({
  imports: [],
  controllers: [HelloController,ProductController],
  providers: [HelloService,ProductService],
})
export class AppModule {}
