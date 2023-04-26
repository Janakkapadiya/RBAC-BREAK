import { Injectable } from '@nestjs/common';
import { UserRepo } from 'src/domain/interface/UserRepository';
import { UserM } from 'src/domain/model/UserM';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';

@Injectable()
export class UserService implements UserRepo {
  constructor(private readonly userRepository: UserRepository) {}

  async register(user: UserM): Promise<UserM> {
    const result = await this.userRepository.createUser(user);
    console.log(result, '****************************');
    return result;
  }

  async getById(id: number): Promise<UserM> {
    const found = await this.userRepository.getById(id);
    return found;
  }

  async createUser(user: UserM): Promise<UserM> {
    const result = await this.userRepository.createUser(user);
    console.log(result);
    return result;
  }

  async getAll(): Promise<UserM[]> {
    const users = await this.userRepository.getAll();
    return users;
  }

  async getByEmail(email: string): Promise<UserM> {
    const adminUserEntity = await this.userRepository.getByEmail(email);
    if (!adminUserEntity) {
      return null;
    }
    return adminUserEntity;
  }
}
