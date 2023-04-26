"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role = void 0;
const common_1 = require("@nestjs/common");
const role = (...role) => (0, common_1.SetMetadata)('role', role);
exports.role = role;
//# sourceMappingURL=Roles.decoretor.js.map