import { ExceptionsService } from '../../exceptions/exceptions.service';
import { LoggerService } from '../../logger/logger.service';
import { LoginService } from 'src/infrastructure/services/auth/auth.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly loginService;
    private readonly logger;
    private readonly exceptionService;
    constructor(loginService: LoginService, logger: LoggerService, exceptionService: ExceptionsService);
    validate(payload: any): Promise<import("../../../domain/model/UserM").UserM>;
}
export {};
