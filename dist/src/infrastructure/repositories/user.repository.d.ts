import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserM } from 'src/domain/model/UserM';
export declare class UserRepository {
    private readonly userEntityRepository;
    constructor(userEntityRepository: Repository<User>);
    register(user: UserM): Promise<UserM>;
    getById(id: number): Promise<UserM>;
    createUser(user: UserM): Promise<UserM>;
    getAll(): Promise<UserM[]>;
    getByEmail(email: string): Promise<UserM>;
    private toUser;
    private toUserEntity;
}
