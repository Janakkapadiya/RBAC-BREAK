import { Posts } from './posts.entity';
import { Role } from 'src/domain/enums/Roles.enum';
export declare class User {
    id: number;
    email: string;
    name: string;
    password: string;
    role: Role;
    posts: Posts[];
}
