import { PostRepository } from 'src/domain/interface/PostRepository';
import { ILogger } from 'src/domain/logger/Logger.interface';
export declare class deletePostUseCase {
    private readonly logger;
    private readonly postRepository;
    constructor(logger: ILogger, postRepository: PostRepository);
    execute(id: number): Promise<void>;
}
