import { Role } from '../enums/Roles.enum';
export declare class UserWithoutPassword {
    id: number;
    email: string;
    name: string;
    role: Role;
}
export declare class UserM extends UserWithoutPassword {
    password: string;
}
