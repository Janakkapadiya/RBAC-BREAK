import { UserM } from '../model/UserM';
export interface UserRepo {
    register(user: UserM): Promise<UserM>;
    createUser(user: UserM): Promise<UserM>;
    getById(id: number): Promise<UserM>;
    getByEmail(username: string): Promise<UserM>;
    getAll(): Promise<UserM[]>;
}
