import { PostRepository } from 'src/domain/interface/PostRepository';
import { PostM } from 'src/domain/model/PostsM';
export declare class getPostUseCase {
    private readonly postRepository;
    constructor(postRepository: PostRepository);
    execute(id: number): Promise<PostM>;
}
