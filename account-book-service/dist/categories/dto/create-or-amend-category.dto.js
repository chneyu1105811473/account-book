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
const class_validator_1 = require("class-validator");
const utils_1 = require("../../common/utils/utils");
class CreateOrAmendCategoryDto {
}
__decorate([
    class_validator_1.Length(1, 6, { message: '分类名称长度只能在1到6之间' }),
    class_validator_1.IsString(utils_1.getWrongTypeOption('字符串')),
    class_validator_1.IsNotEmpty(utils_1.getNotEmptyOption()),
    __metadata("design:type", String)
], CreateOrAmendCategoryDto.prototype, "categoryName", void 0);
__decorate([
    class_validator_1.IsBoolean(utils_1.getWrongTypeOption('boolean')),
    class_validator_1.IsNotEmpty(utils_1.getNotEmptyOption()),
    __metadata("design:type", Boolean)
], CreateOrAmendCategoryDto.prototype, "isExpense", void 0);
exports.CreateOrAmendCategoryDto = CreateOrAmendCategoryDto;
//# sourceMappingURL=create-or-amend-category.dto.js.map