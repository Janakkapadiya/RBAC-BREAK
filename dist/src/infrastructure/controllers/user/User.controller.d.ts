import { CreateUserDto } from './user-dto-class';
import { UserM } from 'src/domain/model/UserM';
import { UserService } from 'src/infrastructure/services/user/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(userData: CreateUserDto): Promise<UserM>;
    getAllUser(): Promise<UserM[]>;
    getUser(id: number): Promise<UserM>;
}
