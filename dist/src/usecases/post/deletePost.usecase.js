"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostUseCase = void 0;
class deletePostUseCase {
    constructor(logger, postRepository) {
        this.logger = logger;
        this.postRepository = postRepository;
    }
    async execute(id) {
        return await this.postRepository.deletePost(id);
    }
}
exports.deletePostUseCase = deletePostUseCase;
//# sourceMappingURL=deletePost.usecase.js.map