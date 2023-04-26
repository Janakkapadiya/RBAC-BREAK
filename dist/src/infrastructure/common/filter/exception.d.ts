import { ArgumentsHost, ExceptionFilter, LoggerService } from '@nestjs/common';
export declare class AllExceptionFilter implements ExceptionFilter {
    private readonly logger;
    constructor(logger: LoggerService);
    catch(exception: any, host: ArgumentsHost): void;
    private logMessage;
}
