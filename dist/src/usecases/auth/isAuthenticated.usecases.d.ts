import { UserRepository } from 'src/domain/interface/UserRepository';
import { UserWithoutPassword } from 'src/domain/model/UserM';
export declare class IsAuthenticatedUseCases {
    private readonly adminUserRepo;
    constructor(adminUserRepo: UserRepository);
    execute(email: string): Promise<UserWithoutPassword>;
}
