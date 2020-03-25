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
const transaction_entity_1 = require("../transactions/transaction.entity");
const category_entity_1 = require("../categories/category.entity");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid', {
        name: 'user_id',
    }),
    __metadata("design:type", String)
], User.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({
        name: 'user_name',
        type: 'varchar',
        length: 8,
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        name: 'user_password',
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], User.prototype, "salt", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'user_create_time',
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], User.prototype, "createTime", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'user_update_time',
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], User.prototype, "updateTime", void 0);
__decorate([
    typeorm_1.OneToMany(type => transaction_entity_1.Transaction, transaction => transaction.user, {}),
    __metadata("design:type", Array)
], User.prototype, "transactions", void 0);
__decorate([
    typeorm_1.OneToMany(type => category_entity_1.Category, category => category.user),
    __metadata("design:type", Array)
], User.prototype, "categories", void 0);
User = __decorate([
    typeorm_1.Entity(consts_1.TABLE_NAMES.USERS)
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map