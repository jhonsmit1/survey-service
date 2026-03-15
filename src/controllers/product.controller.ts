import { Controller, Get } from '@nestjs/common';
import { ProductService, Product } from '../services/product.service';

@Controller('api/products')
export class ProductController {

  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): Product[] {
    return this.productService.findAll();
  }

}
