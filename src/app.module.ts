import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [ClientsModule.register(
      [
        {
          name: 'SERVICE',
          transport: Transport.REDIS,
          options:
              {
                url: 'redis://164.92.204.107',
              }
        }]
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
