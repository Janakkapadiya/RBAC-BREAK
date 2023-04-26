import { JwtService } from '@nestjs/jwt';
import { IJwtService, IJwtServicePayload } from 'src/domain/adepters/jwt.interface';
export declare class JwtTokenService implements IJwtService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    checkToken(token: string): Promise<any>;
    createToken(payload: IJwtServicePayload, secret: string): string;
}
