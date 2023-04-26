"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdUseCases = void 0;
class getUserByIdUseCases {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(email) {
        const result = await this.userRepository.getByEmail(email);
        return result;
    }
}
exports.getUserByIdUseCases = getUserByIdUseCases;
//# sourceMappingURL=getByEmail.usecase.js.map