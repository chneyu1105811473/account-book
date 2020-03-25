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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transaction_entity_1 = require("./transaction.entity");
const user_entity_1 = require("../users/user.entity");
const category_entity_1 = require("../categories/category.entity");
const lodash_1 = require("lodash");
let TransactionsService = class TransactionsService {
    constructor(transactionRepository, userRepository, categoryRepository) {
        this.transactionRepository = transactionRepository;
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
    }
    async findList(size, page, userId) {
        const user = await this.findUser(userId);
        const [transactions, count] = await this.transactionRepository.findAndCount({
            skip: ((page - 1) * size),
            relations: ['category'],
            take: size,
            order: {
                date: 'DESC',
            },
            where: {
                user,
            },
        });
        return {
            list: lodash_1.map(transactions, transaction => {
                const { createTime, updateTime, category } = transaction, data = __rest(transaction, ["createTime", "updateTime", "category"]);
                return Object.assign({ categoryName: category.categoryName, isExpense: category.isExpense }, data);
            }),
            pagination: {
                size,
                page,
                total: count,
            },
            order: 'DESC',
            orderBy: 'date',
        };
    }
    async findOne(transactionCode) {
        const _a = await this.transactionRepository.findOneOrFail(transactionCode, { relations: ['category'] }), { category, createTime, updateTime } = _a, transaction = __rest(_a, ["category", "createTime", "updateTime"]);
        return Object.assign({ categoryCode: category.categoryCode, isExpense: category.isExpense }, transaction);
    }
    async createOrAmend(data, userId, transactionCode) {
        const user = await this.findUser(userId);
        const transaction = transactionCode ? await this.transactionRepository.findOneOrFail(transactionCode, { where: { user } }) : new transaction_entity_1.Transaction();
        transaction.amount = data.amount;
        transaction.user = user;
        transaction.category = await this.findCategory(data.categoryCode);
        transaction.date = data.date;
        transaction.remark = data.remark;
        await this.transactionRepository.save(transaction);
        return {};
    }
    async remove(transactionCode) {
        await this.transactionRepository.delete(transactionCode);
        return {};
    }
    async findUser(userId) {
        return this.userRepository.findOneOrFail({
            where: { userId },
        });
    }
    async findCategory(categoryCode) {
        return this.categoryRepository.findOneOrFail({
            where: { categoryCode },
        });
    }
};
TransactionsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(transaction_entity_1.Transaction)),
    __param(1, typeorm_1.InjectRepository(user_entity_1.User)),
    __param(2, typeorm_1.InjectRepository(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map