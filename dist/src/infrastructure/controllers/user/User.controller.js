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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const user_dto_class_1 = require("./user-dto-class");
const UserM_1 = require("../../../domain/model/UserM");
const jwtAuth_guard_1 = require("../../common/guards/jwtAuth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const Roles_enum_1 = require("../../../domain/enums/Roles.enum");
const Roles_decoretor_1 = require("../../common/decoretors/Roles.decoretor");
const user_presenter_1 = require("./user.presenter");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("../../services/user/user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(userData) {
        const { name, email, password, role } = userData;
        const insert_user = new UserM_1.UserM();
        insert_user.email = email;
        insert_user.name = name;
        insert_user.role = role;
        insert_user.password = password;
        const user = await this.userService.createUser(insert_user);
        console.log(user);
        return user;
    }
    async getAllUser() {
        return this.userService.getAll();
    }
    async getUser(id) {
        return this.userService.getById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../../../domain/model/UserM").UserM }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_class_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, Roles_decoretor_1.role)(Roles_enum_1.Role.User),
    (0, common_1.UseGuards)(roles_guard_1.roleGuard),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('all'),
    openapi.ApiResponse({ status: 200, type: [require("../../../domain/model/UserM").UserM] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUser", null);
__decorate([
    (0, Roles_decoretor_1.role)(Roles_enum_1.Role.User),
    (0, common_1.UseGuards)(roles_guard_1.roleGuard),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../../../domain/model/UserM").UserM }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(user_presenter_1.UserPresenter),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=User.controller.js.map