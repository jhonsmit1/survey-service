import { Controller, Get } from '@nestjs/common';
import { HelloService } from '../services/hello.service';

@Controller('api')
export class HelloController {

  constructor(private readonly helloService: HelloService) {}

  @Get('helloo')
  getHello() {
    return this.helloService.getHello();
  }

}
