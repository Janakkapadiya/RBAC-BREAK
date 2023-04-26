import { Role } from 'src/domain/enums/Roles.enum';
export declare class CreateUserDto {
    email: string;
    name: string;
    password: string;
    role: Role;
}
export default CreateUserDto;
