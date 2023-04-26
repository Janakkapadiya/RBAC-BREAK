import { Module } from '@nestjs/common';
import { LoginService } from './auth.service';

@Module({
  providers: [LoginService],
  exports: [LoginService],
})
export class AuthModule {}
