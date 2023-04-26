import { Repository } from 'typeorm';
import { Posts } from '../entities/posts.entity';
import { PostM } from 'src/domain/model/PostsM';
export declare class PostRepository {
    private readonly todoEntityRepository;
    constructor(todoEntityRepository: Repository<Posts>);
    createPost(data: PostM): Promise<PostM>;
    getAllPosts(): Promise<PostM[]>;
    getPost(userId: number): Promise<PostM>;
    deletePost(userId: number): Promise<void>;
    private toPosts;
}
