"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("../../consts");
function getNotEmptyOption() {
    return {
        message: '$property字段不能为空',
        context: {
            errorCode: consts_1.ERROR_CODES.PARAM_MISSING,
        },
    };
}
exports.getNotEmptyOption = getNotEmptyOption;
function getWrongTypeOption(type) {
    return {
        message: '$property必须为' + type + '类型',
        context: {
            errorCode: consts_1.ERROR_CODES.PARAM_TYPE_ERROR,
        },
    };
}
exports.getWrongTypeOption = getWrongTypeOption;
function getNotPositiveOption() {
    return {
        message: '$property不应小于0',
        context: {
            errorCode: consts_1.ERROR_CODES.PARAM_RANGE_ERROR,
        },
    };
}
exports.getNotPositiveOption = getNotPositiveOption;
//# sourceMappingURL=utils.js.map