import { EnvironmentConfigService } from 'src/infrastructure/config/environment-config/environment-config.service';
export declare class MailerService {
    private readonly emailConfig;
    private readonly transport;
    constructor(emailConfig: EnvironmentConfigService);
    sendEmail(to: string, subject: string, body: string): Promise<boolean>;
}
