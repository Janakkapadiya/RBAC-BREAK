// import { Strategy } from 'passport-local';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable } from '@nestjs/common';
// import { ExceptionsService } from 'src/infrastructure/exceptions/exceptions.service';
// import { LoggerService } from 'src/infrastructure/logger/logger.service';

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(
//     private readonly logger: LoggerService,
//     private readonly exceptionService: ExceptionsService,
//   ) {
//     super();
//   }

//   async validate(username: string, password: string) {
//     if (!username || !password) {
//       this.logger.warn(
//         'LocalStrategy',
//         `Username or password is missing, BadRequestException`,
//       );
//       this.exceptionService.UnauthorizedException();
//     }
//     const user = await this.loginUsecaseProxy
//       .getInstance()
//       .validateUserForLocalStragtegy(username, password);
//     if (!user) {
//       this.logger.warn('LocalStrategy', `Invalid username or password`);
//       this.exceptionService.UnauthorizedException({
//         message: 'Invalid username or password.',
//       });
//     }
//     return user;
//   }
// }
