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
const get_transactions_dto_1 = require("./dto/get-transactions.dto");
const lodash_1 = require("lodash");
const transactions_service_1 = require("./transactions.service");
const create_or_amend_transaction_dto_1 = require("./dto/create-or-amend-transaction.dto");
const user_decorator_1 = require("../common/decorators/user.decorator");
const user_entity_1 = require("../users/user.entity");
let TransactionsController = class TransactionsController {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    async getList(query, user) {
        const size = lodash_1.toNumber(lodash_1.get(query, 'size', 15));
        const page = lodash_1.toNumber(lodash_1.get(query, 'page', 1));
        return this.transactionsService.findList(size, page, user.userId);
    }
    async getDetail(code) {
        return this.transactionsService.findOne(lodash_1.toNumber(code));
    }
    async create(data, user) {
        const userId = lodash_1.get(user, 'userId');
        return this.transactionsService.createOrAmend(data, userId);
    }
    async amend(data, user, code) {
        const userId = lodash_1.get(user, 'userId');
        return this.transactionsService.createOrAmend(data, userId, lodash_1.toNumber(code));
    }
    async remove(code) {
        return this.transactionsService.remove(lodash_1.toNumber(code));
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()), __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_transactions_dto_1.GetTransactionsDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getList", null);
__decorate([
    common_1.Get(`:${consts_1.TRANSACTIONS_PATH.CODE_PARAM}`),
    __param(0, common_1.Param(consts_1.TRANSACTIONS_PATH.CODE_PARAM)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getDetail", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_or_amend_transaction_dto_1.CreateOrAmendTransactionDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "create", null);
__decorate([
    common_1.Put(`:${consts_1.TRANSACTIONS_PATH.CODE_PARAM}`),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __param(2, common_1.Param(consts_1.TRANSACTIONS_PATH.CODE_PARAM)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_or_amend_transaction_dto_1.CreateOrAmendTransactionDto,
        user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "amend", null);
__decorate([
    common_1.Delete(`:${consts_1.TRANSACTIONS_PATH.CODE_PARAM}`),
    __param(0, common_1.Param(consts_1.TRANSACTIONS_PATH.CODE_PARAM)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "remove", null);
TransactionsController = __decorate([
    common_1.UseGuards(passport_1.AuthGuard(consts_1.AUTH_TYPE.JWT)),
    common_1.Controller(consts_1.TRANSACTIONS_PATH.ROOT),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map