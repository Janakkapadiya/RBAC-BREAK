"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_module_1 = require("../config/typeorm/typeorm.module");
const user_entity_1 = require("../entities/user.entity");
const posts_entity_1 = require("../entities/posts.entity");
const user_repository_1 = require("./user.repository");
const post_repository_1 = require("./post.repository");
let RepositoriesModule = class RepositoriesModule {
};
RepositoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_module_1.TypeOrmConfigModule, typeorm_1.TypeOrmModule.forFeature([posts_entity_1.Posts, user_entity_1.User])],
        providers: [post_repository_1.PostRepository, user_repository_1.UserRepository],
        exports: [post_repository_1.PostRepository, user_repository_1.UserRepository],
    })
], RepositoriesModule);
exports.RepositoriesModule = RepositoriesModule;
//# sourceMappingURL=repositories.module.js.map