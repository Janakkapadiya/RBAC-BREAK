"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserUseCases = void 0;
class deleteUserUseCases {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(email) {
        const result = await this.userRepository.getByEmail(email);
        return result;
    }
}
exports.deleteUserUseCases = deleteUserUseCases;
//# sourceMappingURL=deleteUser.usecase.js.map