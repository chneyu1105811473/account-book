"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class ParamsError extends common_1.BadRequestException {
    constructor(options, status = common_1.HttpStatus.BAD_REQUEST) {
        super(options, status);
    }
}
exports.ParamsError = ParamsError;
//# sourceMappingURL=params-error.exception.js.map