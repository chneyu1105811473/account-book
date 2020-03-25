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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const consts_1 = require("../consts");
const user_entity_1 = require("../users/user.entity");
const category_entity_1 = require("../categories/category.entity");
let Transaction = class Transaction {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'transaction_code',
    }),
    __metadata("design:type", Number)
], Transaction.prototype, "transactionCode", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 200,
    }),
    __metadata("design:type", String)
], Transaction.prototype, "remark", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
    }),
    __metadata("design:type", String)
], Transaction.prototype, "date", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'transaction_create_time',
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], Transaction.prototype, "createTime", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'transaction_update_time',
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], Transaction.prototype, "updateTime", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.transactions, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
        nullable: false,
    }),
    typeorm_1.JoinColumn({
        name: 'fk_transactions_user_id',
    }),
    __metadata("design:type", user_entity_1.User)
], Transaction.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => category_entity_1.Category, category => category.transactions, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
        nullable: false,
    }),
    typeorm_1.JoinColumn({
        name: 'fk_transactions_category_code',
    }),
    __metadata("design:type", category_entity_1.Category)
], Transaction.prototype, "category", void 0);
Transaction = __decorate([
    typeorm_1.Entity(consts_1.TABLE_NAMES.TRANSACTIONS)
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.entity.js.map