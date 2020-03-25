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
const create_or_amend_category_dto_1 = require("./dto/create-or-amend-category.dto");
const categories_service_1 = require("./categories.service");
const query_dto_1 = require("./dto/query.dto");
const lodash_1 = require("lodash");
const user_decorator_1 = require("../common/decorators/user.decorator");
const user_entity_1 = require("../users/user.entity");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    query(queryDto, user) {
        return this.categoriesService.getList(queryDto, user.userId);
    }
    create(createOrAmendCategoryDto, user) {
        return this.categoriesService.createOrAmend(createOrAmendCategoryDto, user.userId);
    }
    remove(categoryCode) {
        return this.categoriesService.delete(lodash_1.toNumber(categoryCode));
    }
    amend(categoryCode, createOrAmendCategoryDto, user) {
        return this.categoriesService.createOrAmend(createOrAmendCategoryDto, user.userId, categoryCode);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()), __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.QueryDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "query", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_or_amend_category_dto_1.CreateOrAmendCategoryDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "create", null);
__decorate([
    common_1.Delete(`:${consts_1.CATEGORIES_PATH.CODE_PARAM}`),
    __param(0, common_1.Param(consts_1.CATEGORIES_PATH.CODE_PARAM, new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "remove", null);
__decorate([
    common_1.Put(`:${consts_1.CATEGORIES_PATH.CODE_PARAM}`),
    __param(0, common_1.Param(consts_1.CATEGORIES_PATH.CODE_PARAM, new common_1.ParseIntPipe())),
    __param(1, common_1.Body()),
    __param(2, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_or_amend_category_dto_1.CreateOrAmendCategoryDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "amend", null);
CategoriesController = __decorate([
    common_1.UseGuards(passport_1.AuthGuard(consts_1.AUTH_TYPE.JWT)),
    common_1.Controller(consts_1.CATEGORIES_PATH.ROOT),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map