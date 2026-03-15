import { Controller, Get } from '@nestjs/common';
import { HelloService } from '../services/hello.service';

@Controller('api')
export class HelloController {

  constructor(private readonly helloService: HelloService) {}

  @Get('hellooa')
  getHello() {
    return this.helloService.getHello();
  }

}
