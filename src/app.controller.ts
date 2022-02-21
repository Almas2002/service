import {Controller, Get, Inject} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(@Inject('SERVICE')private client:ClientProxy) {}

  @Get()
  async getHello() {
    const cmd = {cmd:'Hello'}
    return await this.client.send(cmd, {data:"world"}).toPromise();
  }
}
