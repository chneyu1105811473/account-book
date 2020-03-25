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
const lodash_1 = require("lodash");
const positive_int_validator_1 = require("../../common/validators/positive-int.validator");
class GetTransactionsDto {
}
__decorate([
    class_validator_1.ValidateIf(data => data && (data.size !== '' && !lodash_1.isNil(data.size))),
    positive_int_validator_1.IsPositiveInt(),
    __metadata("design:type", String)
], GetTransactionsDto.prototype, "size", void 0);
__decorate([
    class_validator_1.ValidateIf(data => data && (data.size !== '' && !lodash_1.isNil(data.size))),
    positive_int_validator_1.IsPositiveInt(),
    __metadata("design:type", String)
], GetTransactionsDto.prototype, "page", void 0);
exports.GetTransactionsDto = GetTransactionsDto;
//# sourceMappingURL=get-transactions.dto.js.map