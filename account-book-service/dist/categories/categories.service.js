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
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const category_entity_1 = require("./category.entity");
const lodash_1 = require("lodash");
const user_entity_1 = require("../users/user.entity");
const params_error_exception_1 = require("../common/exceptions/params-error.exception");
const consts_1 = require("../consts");
const query_dto_1 = require("./dto/query.dto");
let CategoriesService = class CategoriesService {
    constructor(categoriesRepository, userRepository) {
        this.categoriesRepository = categoriesRepository;
        this.userRepository = userRepository;
    }
    async getList(data, userId) {
        const params = await this.getFindListParams(data, userId);
        const [categories, count] = await this.categoriesRepository.findAndCount(params);
        return {
            list: lodash_1.map(categories, category => {
                const { categoryCode, categoryName, isExpense } = category;
                return {
                    categoryCode,
                    categoryName,
                    isExpense,
                };
            }),
            total: count,
        };
    }
    async getFindListParams(data, userId) {
        const user = await this.findUser(userId);
        const params = {
            order: {
                updateTime: 'DESC',
            },
            where: {
                user,
            },
        };
        if (!lodash_1.isEmpty(data)) {
            const keyMap = {
                name: 'categoryName',
                code: 'categoryCode',
                type: 'isExpense',
            };
            for (const key in data) {
                if (data.hasOwnProperty(key) && !!data[key]) {
                    params.where[keyMap[key]] = key === 'type' ? data[key] === query_dto_1.CATEGORIES_TYPE.EXPENSE : data[key];
                }
            }
        }
        return params;
    }
    async createOrAmend(data, userId, categoryCode) {
        const user = await this.findUser(userId);
        const category = !!categoryCode ? await this.categoriesRepository.findOneOrFail(categoryCode, { where: { user } }) : new category_entity_1.Category();
        const { categoryName, isExpense } = data;
        const findCategory = await this.categoriesRepository.findOne({ where: { categoryName, isExpense, user } });
        if (!!findCategory) {
            throw new params_error_exception_1.ParamsError({
                errorCode: consts_1.ERROR_CODES.CATEGORIES_TYPE_HAVE_SURVICE,
                message: '当前分类已存在',
            });
        }
        category.categoryName = categoryName;
        category.isExpense = isExpense;
        category.user = user;
        if (!!categoryCode) {
            category.categoryCode = categoryCode;
        }
        await this.categoriesRepository.save(category);
        return {};
    }
    async delete(categoryCode) {
        const { transactions = [] } = await this.categoriesRepository.findOneOrFail(categoryCode, { relations: ['transactions'] });
        if (!lodash_1.isEmpty(transactions)) {
            throw new params_error_exception_1.ParamsError({
                errorCode: consts_1.ERROR_CODES.CATEGORIES_TYPE_DELETE_FORBIDDEN,
                message: '当前分类已有账目关联使用，不能删除',
            });
        }
        await this.categoriesRepository.delete(categoryCode);
        return {};
    }
    async findUser(userId) {
        return this.userRepository.findOneOrFail({
            where: { userId },
        });
    }
};
CategoriesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(category_entity_1.Category)),
    __param(1, typeorm_2.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map