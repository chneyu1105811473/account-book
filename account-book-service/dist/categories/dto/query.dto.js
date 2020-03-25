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
var CATEGORIES_TYPE;
(function (CATEGORIES_TYPE) {
    CATEGORIES_TYPE["INCOME"] = "income";
    CATEGORIES_TYPE["EXPENSE"] = "expense";
})(CATEGORIES_TYPE = exports.CATEGORIES_TYPE || (exports.CATEGORIES_TYPE = {}));
class QueryDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(utils_1.getWrongTypeOption('字符串')),
    class_validator_1.Length(1, 6, { message: '分类长度只能在1到6之间' }),
    __metadata("design:type", String)
], QueryDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(utils_1.getWrongTypeOption('字符串')),
    class_validator_1.IsIn([CATEGORIES_TYPE.INCOME, CATEGORIES_TYPE.EXPENSE], { message: `$property只能传入${CATEGORIES_TYPE.INCOME}/${CATEGORIES_TYPE.EXPENSE}` }),
    __metadata("design:type", String)
], QueryDto.prototype, "type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumberString(utils_1.getWrongTypeOption('数值')),
    __metadata("design:type", String)
], QueryDto.prototype, "code", void 0);
exports.QueryDto = QueryDto;
//# sourceMappingURL=query.dto.js.map