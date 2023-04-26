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
exports.PostRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const posts_entity_1 = require("../entities/posts.entity");
const PostsM_1 = require("../../domain/model/PostsM");
let PostRepository = class PostRepository {
    constructor(todoEntityRepository) {
        this.todoEntityRepository = todoEntityRepository;
    }
    async createPost(data) {
        const result = await this.todoEntityRepository.insert(data);
        return this.toPosts(result.generatedMaps[0]);
    }
    async getAllPosts() {
        const todoEntity = await this.todoEntityRepository.find();
        return todoEntity.map((todoEntity) => this.toPosts(todoEntity));
    }
    async getPost(userId) {
        const todoEntity = await this.todoEntityRepository.findOne({
            where: {
                id: userId,
            },
        });
        return this.toPosts(todoEntity);
    }
    async deletePost(userId) {
        await this.todoEntityRepository.delete({ id: userId });
    }
    toPosts(todoEntity) {
        const todo = new PostsM_1.PostM();
        todo.id = todoEntity.id;
        todo.title = todoEntity.title;
        todo.content = todoEntity.content;
        return todo;
    }
};
PostRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(posts_entity_1.Posts)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostRepository);
exports.PostRepository = PostRepository;
//# sourceMappingURL=post.repository.js.map