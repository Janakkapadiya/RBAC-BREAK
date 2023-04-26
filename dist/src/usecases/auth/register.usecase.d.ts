import { BcryptService } from '../../infrastructure/services/bcrypt/bcrypt.service';
import { UserRepository } from 'src/domain/interface/UserRepository';
import { ILogger } from 'src/domain/logger/Logger.interface';
import { UserM } from 'src/domain/model/UserM';
export declare class registerUseCases {
    private readonly logger;
    private userRepository;
    private readonly bcryptService;
    constructor(logger: ILogger, userRepository: UserRepository, bcryptService: BcryptService);
    execute(user: UserM): Promise<UserM>;
}
