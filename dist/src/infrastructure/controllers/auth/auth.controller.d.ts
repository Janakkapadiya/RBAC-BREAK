import { LoginService } from './../../services/auth/auth.service';
import { AuthLoginDto } from './auth-dto.class';
export declare class AuthController {
    private readonly userLogin;
    constructor(userLogin: LoginService);
    login(auth: AuthLoginDto, request: any): Promise<string>;
    logout(request: any): Promise<string>;
    isAuthenticatedCheck(request: any): Promise<string>;
}
