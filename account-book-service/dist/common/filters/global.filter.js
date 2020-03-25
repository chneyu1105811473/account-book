"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const response_1 = require("../dto/response");
const lodash_1 = require("lodash");
const consts_1 = require("../../consts");
let ExceptionWrapper = class ExceptionWrapper {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : lodash_1.get(exception, 'statusCode', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        const res = this.getRes(exception);
        response
            .status(status)
            .json(res);
    }
    getRes(exception) {
        const errorInfo = lodash_1.get(exception, 'message') || lodash_1.get(exception, 'error');
        if (lodash_1.get(exception, 'message') instanceof response_1.ResWrapper) {
            return errorInfo;
        }
        else {
            const message = this.getMessage(errorInfo);
            const errorCode = lodash_1.get(errorInfo, 'errorCode', consts_1.ERROR_CODES.UNRECOGNIZE);
            const success = false;
            const data = lodash_1.get(errorInfo, 'data', {});
            return new response_1.ResWrapper(errorCode, message, data, success);
        }
    }
    getMessage(message) {
        if (typeof message === 'string') {
            return message;
        }
        else if (typeof message === 'object') {
            return lodash_1.get(message, 'message') || lodash_1.get(message, 'error');
        }
        else {
            return '未知错误';
        }
    }
};
ExceptionWrapper = __decorate([
    common_1.Catch()
], ExceptionWrapper);
exports.ExceptionWrapper = ExceptionWrapper;
//# sourceMappingURL=global.filter.js.map