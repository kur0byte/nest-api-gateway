// auth.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth.controller';
import {AuthService } from './auth.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://toth:Topotoncio-1298@172.233.190.177:5672"],
          queueOptions: {
            queue: 'AUTH_QUEUE',
            durable: false,
            
          },
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthModule],
})
export class AuthModule {}