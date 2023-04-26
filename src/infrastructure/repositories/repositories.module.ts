import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { User } from '../entities/user.entity';
import { Posts } from '../entities/posts.entity';
import { UserRepository } from './user.repository';
import { PostRepository } from './post.repository';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Posts, User])],
  providers: [PostRepository, UserRepository],
  exports: [PostRepository, UserRepository],
})
export class RepositoriesModule {}
