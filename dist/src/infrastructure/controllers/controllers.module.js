"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllersModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth/auth.controller");
const User_controller_1 = require("./user/User.controller");
const user_service_1 = require("../services/user/user.service");
const user_repository_1 = require("../repositories/user.repository");
const typeorm_module_1 = require("../config/typeorm/typeorm.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const posts_entity_1 = require("../entities/posts.entity");
let ControllersModule = class ControllersModule {
};
ControllersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_module_1.TypeOrmConfigModule, typeorm_1.TypeOrmModule.forFeature([posts_entity_1.Posts, user_entity_1.User])],
        controllers: [User_controller_1.UserController, auth_controller_1.AuthController],
        providers: [user_service_1.UserService, user_repository_1.UserRepository],
    })
], ControllersModule);
exports.ControllersModule = ControllersModule;
//# sourceMappingURL=controllers.module.js.map