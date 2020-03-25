"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const consts_1 = require("../consts");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("../auth/auth.service");
let UsersController = class UsersController {
    constructor(authService) {
        this.authService = authService;
    }
    systemAccess(req) {
        return this.authService.login(req.user);
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard(consts_1.AUTH_TYPE.LOCAL)),
    common_1.Post(consts_1.USERS_PATH.ACCESS),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "systemAccess", null);
UsersController = __decorate([
    common_1.Controller(consts_1.USERS_PATH.ROOT),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map