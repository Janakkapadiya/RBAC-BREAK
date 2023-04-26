"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUseCases = void 0;
const UserM_1 = require("../../domain/model/UserM");
class registerUseCases {
    constructor(logger, userRepository, bcryptService) {
        this.logger = logger;
        this.userRepository = userRepository;
        this.bcryptService = bcryptService;
    }
    async execute(user) {
        const the_user = new UserM_1.UserM();
        the_user.email = user.email;
        the_user.name = user.name;
        the_user.role = user.role;
        the_user.password = await this.bcryptService.hash(user.password);
        console.log(the_user);
        const result = await this.userRepository.register(the_user);
        console.log(result);
        this.logger.log('addUserUseCases execute', 'New User have been inserted');
        return result;
    }
}
exports.registerUseCases = registerUseCases;
//# sourceMappingURL=register.usecase.js.map