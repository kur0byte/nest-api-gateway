// auth.controller.ts
// import { CreateUserDto } from '@/shared';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { ApiConsumes, ApiProduces, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

// @ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  createUser(@Body() createUserDto: any) {
    return this.authService.createUser(createUserDto);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    id = id.toString();
    return this.authService.getUser(id);
  }
}

