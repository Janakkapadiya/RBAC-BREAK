"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
class LoginService {
    constructor(logger, jwtTokenService, jwtConfig, userRepository, bcryptService) {
        this.logger = logger;
        this.jwtTokenService = jwtTokenService;
        this.jwtConfig = jwtConfig;
        this.userRepository = userRepository;
        this.bcryptService = bcryptService;
    }
    async getCookieWithJwtToken(email) {
        this.logger.log('LoginUseCases execute', `The user ${email} have been logged.`);
        const payload = { email: email };
        const secret = this.jwtConfig.getJwtSecret();
        const token = this.jwtTokenService.createToken(payload, secret);
        return `Authentication=${token}; HttpOnly; Path=/}`;
    }
    async validateUserForLocalStragtegy(email, pass) {
        const user = await this.userRepository.getByEmail(email);
        if (!user) {
            return null;
        }
        const match = await this.bcryptService.compare(pass, user.password);
        if (user && match) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async validateUserForJWTStragtegy(email) {
        const user = await this.userRepository.getByEmail(email);
        console.log(user);
        if (!user) {
            return null;
        }
        return user;
    }
    async logout() {
        return [
            'Authentication=; HttpOnly; Path=/; Max-Age=0',
            'Refresh=; HttpOnly; Path=/; Max-Age=0',
        ];
    }
    async isAuthenticated(email) {
        const user = await this.userRepository.getByEmail(email);
        const { password } = user, info = __rest(user, ["password"]);
        return info;
    }
}
exports.LoginService = LoginService;
//# sourceMappingURL=auth.service.js.map