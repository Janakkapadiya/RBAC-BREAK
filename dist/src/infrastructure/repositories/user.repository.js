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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const UserM_1 = require("../../domain/model/UserM");
let UserRepository = class UserRepository {
    constructor(userEntityRepository) {
        this.userEntityRepository = userEntityRepository;
    }
    async register(user) {
        const userEntity = this.toUserEntity(user);
        console.log(userEntity);
        const result = await this.userEntityRepository.save(userEntity);
        console.log(result, '****************************');
        return this.toUser(result);
    }
    async getById(id) {
        const found = await this.userEntityRepository.findOne({
            where: {
                id,
            },
        });
        return this.toUser(found);
    }
    async createUser(user) {
        const result = await this.userEntityRepository.insert(user);
        console.log(result);
        return this.toUser(result.generatedMaps[0]);
    }
    async getAll() {
        const users = await this.userEntityRepository.find();
        return users.map((adminUserEntity) => this.toUser(adminUserEntity));
    }
    async getByEmail(email) {
        const adminUserEntity = await this.userEntityRepository.findOne({
            where: {
                email: email,
            },
        });
        if (!adminUserEntity) {
            return null;
        }
        return this.toUser(adminUserEntity);
    }
    toUser(adminUserEntity) {
        const adminUser = new UserM_1.UserM();
        adminUser.id = adminUserEntity.id;
        adminUser.email = adminUserEntity.email;
        adminUser.name = adminUserEntity.name;
        adminUser.password = adminUserEntity.password;
        adminUser.role = adminUserEntity.role;
        return adminUser;
    }
    toUserEntity(adminUser) {
        const adminUserEntity = new user_entity_1.User();
        adminUserEntity.id = adminUser.id;
        adminUserEntity.email = adminUser.email;
        adminUserEntity.name = adminUser.name;
        adminUserEntity.password = adminUser.password;
        adminUserEntity.role = adminUser.role;
        return adminUserEntity;
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map