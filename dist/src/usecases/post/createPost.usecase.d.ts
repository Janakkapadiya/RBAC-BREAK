import { PostRepository } from 'src/domain/interface/PostRepository';
import { ILogger } from 'src/domain/logger/Logger.interface';
import { PostM } from 'src/domain/model/PostsM';
export declare class createPostUseCase {
    private readonly logger;
    private readonly postRepository;
    constructor(logger: ILogger, postRepository: PostRepository);
    execute(title: string, content: string): Promise<PostM>;
}
