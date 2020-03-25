"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const params_error_exception_1 = require("../exceptions/params-error.exception");
const lodash_1 = require("lodash");
class ApiParamsValidationPipe {
    async transform(value, metadata) {
        const { metatype } = metadata;
        if (!(/^(\w|[$])(\w*|\d*)Dto$/.test(lodash_1.get(metatype, 'name', '')))) {
            return value;
        }
        const object = class_transformer_1.plainToClass(metatype, value);
        const errors = await class_validator_1.validate(object, {
            forbidUnknownValues: true,
        });
        if (errors.length > 0) {
            const error = errors.shift();
            const constraints = error.constraints;
            const contexts = error.contexts;
            for (const key in constraints) {
                if (constraints.hasOwnProperty(key)) {
                    throw new params_error_exception_1.ParamsError({
                        errorCode: lodash_1.get(contexts, `${key}.errorCode`),
                        message: lodash_1.get(constraints, key),
                    });
                }
            }
        }
        return value;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => metatype === type);
    }
}
exports.ApiParamsValidationPipe = ApiParamsValidationPipe;
//# sourceMappingURL=api-params-validation.pipe.js.map