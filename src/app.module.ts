import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './infrastructure/common/strategies/jwt.strategy';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { JwtModule as JwtServiceModule } from './infrastructure/services/jwt/jwt.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { BcryptModule } from './infrastructure/services/bcrypt/bcrypt.module';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { UserController } from './infrastructure/controllers/user/User.controller';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { AppService } from './app.service';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { LoginService } from './infrastructure/services/auth/auth.service';
import { UserService } from './infrastructure/services/user/user.service';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { UserModule } from './infrastructure/services/user/user.service.module';
import { AuthModule } from './infrastructure/services/auth/auth.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.secret,
    }),
    LoggerModule,
    ExceptionsModule,
    ControllersModule,
    BcryptModule,
    JwtServiceModule,
    EnvironmentConfigModule,
    RepositoriesModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, UserController],
  providers: [JwtStrategy, AppService, UserService, LoginService],
})
export class AppModule {}
