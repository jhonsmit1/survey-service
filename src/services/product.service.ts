import { Injectable } from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductService {

  private products: Product[] = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 80 },
    { id: 4, name: "Monitor", price: 350 }
  ];

  findAll(): Product[] {
    return this.products;
  }

}
