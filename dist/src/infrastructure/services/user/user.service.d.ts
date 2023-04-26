import { UserRepo } from 'src/domain/interface/UserRepository';
import { UserM } from 'src/domain/model/UserM';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';
export declare class UserService implements UserRepo {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    register(user: UserM): Promise<UserM>;
    getById(id: number): Promise<UserM>;
    createUser(user: UserM): Promise<UserM>;
    getAll(): Promise<UserM[]>;
    getByEmail(email: string): Promise<UserM>;
}
