import { UserRepository } from 'src/domain/interface/UserRepository';
import { UserM } from 'src/domain/model/UserM';
export declare class getUserByIdUseCases {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(email: string): Promise<UserM>;
}
