"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostUseCase = void 0;
class getPostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async execute(id) {
        return await this.postRepository.getPost(id);
    }
}
exports.getPostUseCase = getPostUseCase;
//# sourceMappingURL=getPost.usecase.js.map