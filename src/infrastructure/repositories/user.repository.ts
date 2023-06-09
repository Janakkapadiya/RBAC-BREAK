import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserM } from 'src/domain/model/UserM';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userEntityRepository: Repository<User>,
  ) {}

  async register(user: UserM): Promise<UserM> {
    const userEntity = this.toUserEntity(user);
    console.log(userEntity);
    const result = await this.userEntityRepository.save(userEntity);
    console.log(result, '****************************');
    return this.toUser(result);
  }

  async getById(id: number): Promise<UserM> {
    const found = await this.userEntityRepository.findOne({
      where: {
        id,
      },
    });
    return this.toUser(found);
  }

  async createUser(user: UserM): Promise<UserM> {
    const result = await this.userEntityRepository.insert(user);
    console.log(result);
    return this.toUser(result.generatedMaps[0] as User);
  }

  async getAll(): Promise<UserM[]> {
    const users = await this.userEntityRepository.find();
    return users.map((adminUserEntity) => this.toUser(adminUserEntity));
  }

  async getByEmail(email: string): Promise<UserM> {
    const adminUserEntity = await this.userEntityRepository.findOne({
      where: {
        email: email,
      },
    });
    if (!adminUserEntity) {
      return null;
    }
    return this.toUser(adminUserEntity);
  }
  private toUser(adminUserEntity: User): UserM {
    const adminUser: UserM = new UserM();

    adminUser.id = adminUserEntity.id;
    adminUser.email = adminUserEntity.email;
    adminUser.name = adminUserEntity.name;
    adminUser.password = adminUserEntity.password;
    adminUser.role = adminUserEntity.role;

    return adminUser;
  }

  private toUserEntity(adminUser: UserM): User {
    const adminUserEntity: User = new User();

    adminUserEntity.id = adminUser.id;
    adminUserEntity.email = adminUser.email;
    adminUserEntity.name = adminUser.name;
    adminUserEntity.password = adminUser.password;
    adminUserEntity.role = adminUser.role;

    return adminUserEntity;
  }
}
