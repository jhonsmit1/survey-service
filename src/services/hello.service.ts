import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {

  getHello() {
    return {
      message: "Hola desde NestJS 🚀",
      timestamp: new Date()
    };
  }

}
