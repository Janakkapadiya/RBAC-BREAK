import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/User.controller';
import { UserService } from '../services/user/user.service';
import { UserRepository } from '../repositories/user.repository';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Posts } from '../entities/posts.entity';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Posts, User])],
  controllers: [UserController, AuthController],
  providers: [UserService, UserRepository],
})
export class ControllersModule {}
