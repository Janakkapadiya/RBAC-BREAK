"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostUseCase = void 0;
const PostsM_1 = require("../../domain/model/PostsM");
class createPostUseCase {
    constructor(logger, postRepository) {
        this.logger = logger;
        this.postRepository = postRepository;
    }
    async execute(title, content) {
        const post = new PostsM_1.PostM();
        post.title = title;
        post.content = content;
        const result = await this.postRepository.createPost(post);
        this.logger.log('addTodoUseCases execute', 'New todo have been inserted');
        return result;
    }
}
exports.createPostUseCase = createPostUseCase;
//# sourceMappingURL=createPost.usecase.js.map