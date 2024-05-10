import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}
