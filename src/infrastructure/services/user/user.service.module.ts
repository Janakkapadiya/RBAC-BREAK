import { Module } from '@nestjs/common';
import { UserController } from 'src/infrastructure/controllers/user/User.controller';
import { UserService } from './user.service';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
