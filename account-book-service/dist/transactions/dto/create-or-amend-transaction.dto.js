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
const date_validator_1 = require("../../common/validators/date.validator");
const positive_int_validator_1 = require("../../common/validators/positive-int.validator");
class CreateOrAmendTransactionDto {
}
__decorate([
    class_validator_1.IsNotEmpty(utils_1.getNotEmptyOption()),
    positive_int_validator_1.IsPositiveInt(),
    __metadata("design:type", Number)
], CreateOrAmendTransactionDto.prototype, "categoryCode", void 0);
__decorate([
    class_validator_1.IsNotEmpty(utils_1.getNotEmptyOption()),
    class_validator_1.IsNumber({
        allowNaN: false,
        allowInfinity: false,
        maxDecimalPlaces: 2,
    }, utils_1.getWrongTypeOption('最多两位小数的数值')),
    class_validator_1.IsPositive(utils_1.getNotPositiveOption()),
    __metadata("design:type", Number)
], CreateOrAmendTransactionDto.prototype, "amount", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(utils_1.getWrongTypeOption('字符')),
    __metadata("design:type", String)
], CreateOrAmendTransactionDto.prototype, "remark", void 0);
__decorate([
    class_validator_1.IsNotEmpty(utils_1.getNotEmptyOption()),
    date_validator_1.CheckDate({ message: '$property必须是YYYY/MM/DD格式' }),
    __metadata("design:type", String)
], CreateOrAmendTransactionDto.prototype, "date", void 0);
exports.CreateOrAmendTransactionDto = CreateOrAmendTransactionDto;
//# sourceMappingURL=create-or-amend-transaction.dto.js.map