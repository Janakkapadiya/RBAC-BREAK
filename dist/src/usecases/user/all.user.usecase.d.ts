import { UserRepository } from 'src/domain/interface/UserRepository';
import { UserM } from 'src/domain/model/UserM';
export declare class getUsersUseCases {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(): Promise<UserM[]>;
}
