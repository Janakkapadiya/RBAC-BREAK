"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdUseCases = void 0;
class getUserByIdUseCases {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const result = await this.userRepository.getById(id);
        return result;
    }
}
exports.getUserByIdUseCases = getUserByIdUseCases;
//# sourceMappingURL=getById.user.usecase.js.map