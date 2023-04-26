import { ConfigService } from '@nestjs/config';
import { JWTConfig } from '../../../domain/config/jwt.interface';
import { DatabaseConfig } from 'src/domain/config/DatabaseConfig';
import { EmailConfig } from 'src/domain/config/EmailConfig';
export declare class EnvironmentConfigService implements DatabaseConfig, JWTConfig, EmailConfig {
    private configService;
    constructor(configService: ConfigService);
    getEmailHost(): string;
    getEmailPort(): number;
    getEmailSender(): string;
    getEmailSecret(): string;
    getJwtSecret(): string;
    getDatabaseHost(): string;
    getDatabasePort(): number;
    getDatabaseUser(): string;
    getDatabasePassword(): string;
    getDatabaseName(): string;
    getDatabaseSync(): boolean;
}
