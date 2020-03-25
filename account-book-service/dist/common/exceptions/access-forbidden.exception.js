"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class AccessForbidden extends common_1.HttpException {
    constructor(options, status = common_1.HttpStatus.FORBIDDEN) {
        super(options, status);
    }
}
exports.AccessForbidden = AccessForbidden;
//# sourceMappingURL=access-forbidden.exception.js.map