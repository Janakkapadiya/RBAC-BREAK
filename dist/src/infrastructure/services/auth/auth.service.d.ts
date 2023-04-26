import { IBcryptService } from 'src/domain/adepters/bcrypt.interface';
import { IJwtService } from 'src/domain/adepters/jwt.interface';
import { JWTConfig } from 'src/domain/config/jwt.interface';
import { UserRepo } from 'src/domain/interface/UserRepository';
import { ILogger } from 'src/domain/logger/Logger.interface';
import { UserM, UserWithoutPassword } from 'src/domain/model/UserM';
export declare class LoginService {
    private readonly logger;
    private readonly jwtTokenService;
    private readonly jwtConfig;
    private readonly userRepository;
    private readonly bcryptService;
    constructor(logger: ILogger, jwtTokenService: IJwtService, jwtConfig: JWTConfig, userRepository: UserRepo, bcryptService: IBcryptService);
    getCookieWithJwtToken(email: string): Promise<string>;
    validateUserForLocalStragtegy(email: string, pass: string): Promise<{
        id: number;
        email: string;
        name: string;
        role: import("../../../domain/enums/Roles.enum").Role;
    }>;
    validateUserForJWTStragtegy(email: string): Promise<UserM>;
    logout(): Promise<string[]>;
    isAuthenticated(email: string): Promise<UserWithoutPassword>;
}
