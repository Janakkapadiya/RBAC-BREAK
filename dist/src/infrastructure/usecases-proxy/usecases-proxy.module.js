"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const isAuthenticated_usecases_1 = require("../../usecases/auth/isAuthenticated.usecases");
const login_usecases_1 = require("../../usecases/auth/login.usecases");
const logout_usecases_1 = require("../../usecases/auth/logout.usecases");
const exceptions_module_1 = require("../exceptions/exceptions.module");
const logger_module_1 = require("../logger/logger.module");
const logger_service_1 = require("../logger/logger.service");
const bcrypt_module_1 = require("../services/bcrypt/bcrypt.module");
const bcrypt_service_1 = require("../services/bcrypt/bcrypt.service");
const jwt_module_1 = require("../services/jwt/jwt.module");
const jwt_service_1 = require("../services/jwt/jwt.service");
const repositories_module_1 = require("../repositories/repositories.module");
const user_repository_1 = require("../repositories/user.repository");
const environment_config_module_1 = require("../config/environment-config/environment-config.module");
const environment_config_service_1 = require("../config/environment-config/environment-config.service");
const usecases_proxy_1 = require("./usecases-proxy");
const post_repository_1 = require("../repositories/post.repository");
const getPost_usecase_1 = require("../../usecases/post/getPost.usecase");
const getAllPost_usecase_1 = require("../../usecases/post/getAllPost.usecase");
const createPost_usecase_1 = require("../../usecases/post/createPost.usecase");
const deletePost_usecase_1 = require("../../usecases/post/deletePost.usecase");
const all_user_usecase_1 = require("../../usecases/user/all.user.usecase");
const getById_user_usecase_1 = require("../../usecases/user/getById.user.usecase");
const register_usecase_1 = require("../../usecases/auth/register.usecase");
let UsecasesProxyModule = UsecasesProxyModule_1 = class UsecasesProxyModule {
    static register() {
        return {
            module: UsecasesProxyModule_1,
            providers: [
                {
                    inject: [
                        logger_service_1.LoggerService,
                        jwt_service_1.JwtTokenService,
                        environment_config_service_1.EnvironmentConfigService,
                        user_repository_1.DatabaseUserRepository,
                        bcrypt_service_1.BcryptService,
                    ],
                    provide: UsecasesProxyModule_1.LOGIN_USECASES_PROXY,
                    useFactory: (logger, jwtTokenService, config, userRepo, bcryptService) => new usecases_proxy_1.UseCaseProxy(new login_usecases_1.LoginUseCases(logger, jwtTokenService, config, userRepo, bcryptService)),
                },
                {
                    inject: [user_repository_1.DatabaseUserRepository],
                    provide: UsecasesProxyModule_1.IS_AUTHENTICATED_USECASES_PROXY,
                    useFactory: (userRepo) => new usecases_proxy_1.UseCaseProxy(new isAuthenticated_usecases_1.IsAuthenticatedUseCases(userRepo)),
                },
                {
                    inject: [],
                    provide: UsecasesProxyModule_1.LOGOUT_USECASES_PROXY,
                    useFactory: () => new usecases_proxy_1.UseCaseProxy(new logout_usecases_1.LogoutUseCases()),
                },
                {
                    inject: [post_repository_1.DatabasePostRepository],
                    provide: UsecasesProxyModule_1.GET_POST_USECASES_PROXY,
                    useFactory: (postRepository) => new usecases_proxy_1.UseCaseProxy(new getPost_usecase_1.getPostUseCase(postRepository)),
                },
                {
                    inject: [post_repository_1.DatabasePostRepository, logger_service_1.LoggerService],
                    provide: UsecasesProxyModule_1.GET_POSTS_USECASES_PROXY,
                    useFactory: (logger, postRepository) => new usecases_proxy_1.UseCaseProxy(new getAllPost_usecase_1.getAllPostUseCase(logger, postRepository)),
                },
                {
                    inject: [logger_service_1.LoggerService, post_repository_1.DatabasePostRepository],
                    provide: UsecasesProxyModule_1.CREATE_POST_USECASES_PROXY,
                    useFactory: (logger, postRepository) => new usecases_proxy_1.UseCaseProxy(new createPost_usecase_1.createPostUseCase(logger, postRepository)),
                },
                {
                    inject: [logger_service_1.LoggerService, post_repository_1.DatabasePostRepository],
                    provide: UsecasesProxyModule_1.DELETE_POST_USECASES_PROXY,
                    useFactory: (logger, postRepository) => new usecases_proxy_1.UseCaseProxy(new deletePost_usecase_1.deletePostUseCase(logger, postRepository)),
                },
                {
                    inject: [user_repository_1.DatabaseUserRepository, logger_service_1.LoggerService, bcrypt_service_1.BcryptService],
                    provide: UsecasesProxyModule_1.CREATE_USER_USECASES_PROXY,
                    useFactory: (logger, userRepository, bcryptService) => new usecases_proxy_1.UseCaseProxy(new register_usecase_1.registerUseCases(logger, userRepository, bcryptService)),
                },
                {
                    inject: [user_repository_1.DatabaseUserRepository],
                    provide: UsecasesProxyModule_1.GET_USERS_USECASES_PROXY,
                    useFactory: (userRepository) => new usecases_proxy_1.UseCaseProxy(new all_user_usecase_1.getUsersUseCases(userRepository)),
                },
                {
                    inject: [logger_service_1.LoggerService, user_repository_1.DatabaseUserRepository],
                    provide: UsecasesProxyModule_1.GET_USER_BY_ID_USECASES_PROXY,
                    useFactory: (userRepository) => new usecases_proxy_1.UseCaseProxy(new getById_user_usecase_1.getUserByIdUseCases(userRepository)),
                },
            ],
            exports: [
                UsecasesProxyModule_1.GET_POST_USECASES_PROXY,
                UsecasesProxyModule_1.GET_POSTS_USECASES_PROXY,
                UsecasesProxyModule_1.CREATE_POST_USECASES_PROXY,
                UsecasesProxyModule_1.DELETE_POST_USECASES_PROXY,
                UsecasesProxyModule_1.LOGIN_USECASES_PROXY,
                UsecasesProxyModule_1.IS_AUTHENTICATED_USECASES_PROXY,
                UsecasesProxyModule_1.LOGOUT_USECASES_PROXY,
                UsecasesProxyModule_1.CREATE_USER_USECASES_PROXY,
                UsecasesProxyModule_1.GET_USERS_USECASES_PROXY,
                UsecasesProxyModule_1.GET_USER_BY_ID_USECASES_PROXY,
            ],
        };
    }
};
UsecasesProxyModule.LOGIN_USECASES_PROXY = 'LoginUseCasesProxy';
UsecasesProxyModule.IS_AUTHENTICATED_USECASES_PROXY = 'IsAuthenticatedUseCasesProxy';
UsecasesProxyModule.LOGOUT_USECASES_PROXY = 'LogoutUseCasesProxy';
UsecasesProxyModule.GET_POST_USECASES_PROXY = 'getPostUsecasesProxy';
UsecasesProxyModule.GET_POSTS_USECASES_PROXY = 'getPostsUsecasesProxy';
UsecasesProxyModule.CREATE_POST_USECASES_PROXY = 'createPostUsecasesProxy';
UsecasesProxyModule.DELETE_POST_USECASES_PROXY = 'deletePostUsecasesProxy';
UsecasesProxyModule.GET_USERS_USECASES_PROXY = 'deleteUserUsecasesProxy';
UsecasesProxyModule.GET_USER_BY_ID_USECASES_PROXY = 'deleteUserUsecasesProxy';
UsecasesProxyModule.CREATE_USER_USECASES_PROXY = 'createUserUsecasesProxy';
UsecasesProxyModule = UsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            logger_module_1.LoggerModule,
            jwt_module_1.JwtModule,
            bcrypt_module_1.BcryptModule,
            environment_config_module_1.EnvironmentConfigModule,
            repositories_module_1.RepositoriesModule,
            exceptions_module_1.ExceptionsModule,
        ],
    })
], UsecasesProxyModule);
exports.UsecasesProxyModule = UsecasesProxyModule;
//# sourceMappingURL=usecases-proxy.module.js.map