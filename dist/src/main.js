"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const logger_interceptor_1 = require("./infrastructure/common/interceptors/logger.interceptor");
const exception_1 = require("./infrastructure/common/filter/exception");
const cookieParser = require("cookie-parser");
const logger_service_1 = require("./infrastructure/logger/logger.service");
async function bootstrap() {
    const env = process.env.NODE_ENV;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.useGlobalFilters(new exception_1.AllExceptionFilter(new logger_service_1.LoggerService()));
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new logger_interceptor_1.LoggingInterceptor(new logger_service_1.LoggerService()));
    app.setGlobalPrefix('api_v1');
    if (env !== 'production') {
        const config = new swagger_1.DocumentBuilder()
            .addBearerAuth()
            .setTitle('Clean Architecture Nestjs')
            .setDescription('Example with todo list')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config, {
            deepScanRoutes: true,
        });
        swagger_1.SwaggerModule.setup('api', app, document);
    }
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map