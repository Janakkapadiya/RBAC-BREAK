"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const auth_service_1 = require("./../../services/auth/auth.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_dto_class_1 = require("./auth-dto.class");
const auth_presenter_1 = require("./auth.presenter");
const jwtAuth_guard_1 = require("../../common/guards/jwtAuth.guard");
const login_guard_1 = require("../../common/guards/login.guard");
let AuthController = class AuthController {
    constructor(userLogin) {
        this.userLogin = userLogin;
    }
    async login(auth, request) {
        const accessTokenCookie = await this.userLogin.getCookieWithJwtToken(auth.email);
        request.res.setHeader('Set-Cookie', [accessTokenCookie]);
        return 'Login successful';
    }
    async logout(request) {
        const cookie = await this.userLogin.logout();
        request.res.setHeader('Set-Cookie', cookie);
        return 'Logout successful';
    }
    async isAuthenticatedCheck(request) {
        const user = await this.userLogin.isAuthenticated(request.user.email);
        const response = new auth_presenter_1.IsAuthPresenter();
        response.email = user.email;
        return response.email;
    }
};
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)(login_guard_1.LoginGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({ type: auth_dto_class_1.AuthLoginDto }),
    (0, swagger_1.ApiOperation)({ description: 'login' }),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_class_1.AuthLoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ description: 'logout' }),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('is_authenticated'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ description: 'is_authenticated' }),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "isAuthenticatedCheck", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('auth'),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'No authorization token was found',
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(auth_presenter_1.IsAuthPresenter),
    __metadata("design:paramtypes", [auth_service_1.LoginService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map