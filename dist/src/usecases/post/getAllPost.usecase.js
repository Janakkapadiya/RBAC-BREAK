"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPostUseCase = void 0;
class getAllPostUseCase {
    constructor(logger, postRepository) {
        this.logger = logger;
        this.postRepository = postRepository;
    }
    async execute() {
        return await this.postRepository.getAllPosts();
    }
}
exports.getAllPostUseCase = getAllPostUseCase;
//# sourceMappingURL=getAllPost.usecase.js.map