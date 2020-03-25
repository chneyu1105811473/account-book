"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResWrapper {
    constructor(errorCode, message, data, success = false) {
        this.errorCode = errorCode;
        this.message = message;
        this.data = data;
        this.success = success;
    }
}
exports.ResWrapper = ResWrapper;
//# sourceMappingURL=response.js.map