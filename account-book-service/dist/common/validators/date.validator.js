"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const lodash_1 = require("lodash");
function CheckDate(validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                async validate(text, args) {
                    return /\d{4}\/\d{2}\/\d{2}/.test(lodash_1.toString(text));
                },
            },
        });
    };
}
exports.CheckDate = CheckDate;
//# sourceMappingURL=date.validator.js.map