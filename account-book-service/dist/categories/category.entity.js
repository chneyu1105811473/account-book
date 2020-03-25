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
const user_entity_1 = require("../users/user.entity");
let Category = class Category {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'category_code',
    }),
    __metadata("design:type", Number)
], Category.prototype, "categoryCode", void 0);
__decorate([
    typeorm_1.Column({
        name: 'category_name',
        type: 'varchar',
        length: 6,
    }),
    __metadata("design:type", String)
], Category.prototype, "categoryName", void 0);
__decorate([
    typeorm_1.Column({
        name: 'is_expense',
        type: 'bool',
    }),
    __metadata("design:type", Boolean)
], Category.prototype, "isExpense", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'category_create_time',
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], Category.prototype, "createTime", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'category_update_time',
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], Category.prototype, "updateTime", void 0);
__decorate([
    typeorm_1.OneToMany(type => transaction_entity_1.Transaction, transaction => transaction.category),
    __metadata("design:type", Array)
], Category.prototype, "transactions", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.categories, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
        nullable: false,
    }),
    typeorm_1.JoinColumn({
        name: 'fk_categories_user_id',
    }),
    __metadata("design:type", user_entity_1.User)
], Category.prototype, "user", void 0);
Category = __decorate([
    typeorm_1.Entity(consts_1.TABLE_NAMES.CATEGORIES)
], Category);
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map