"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const lodash_1 = require("lodash");
function IsPositiveInt(validationOptions) {
    return (object, property) => {
        class_validator_1.registerDecorator({
            name: 'isPositiveInt',
            target: object.constructor,
            propertyName: property,
            constraints: [],
            options: validationOptions,
            validator: {
                async validate(val, args) {
                    return lodash_1.toNumber(val) > 0 && (lodash_1.toNumber(val) % 1 === 0);
                },
                defaultMessage(validationArguments) {
                    return '$property必须是正整数';
                },
            },
        });
    };
}
exports.IsPositiveInt = IsPositiveInt;
//# sourceMappingURL=positive-int.validator.js.map