"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersUseCases = void 0;
class getUsersUseCases {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        return await this.userRepository.getAll();
    }
}
exports.getUsersUseCases = getUsersUseCases;
//# sourceMappingURL=all.user.usecase.js.map