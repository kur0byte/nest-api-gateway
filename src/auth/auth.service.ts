// import { CreateUserDto, User } from '@/shared';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(@Inject("AUTH_QUEUE") private readonly authClient: ClientRMQ) {}

  createUser(createUserDto: any) {
    return this.authClient.send<any>("CREATE_USER", createUserDto);
  }
  
  getUser(id: string) {
    return this.authClient.send<any>("GET_USER", id);
  }
}