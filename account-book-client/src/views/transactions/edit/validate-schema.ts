import {
    SchemaModel,
    NumberType,
    ArrayType,
    StringType,
} from 'schema-typed';
import {isPositive} from '@/utils/common';

export const modelAdd = SchemaModel({
    amount: NumberType('金额应该是数值').isRequired('金额是必填的').addRule(isPositive, '金额必须大于0'),
    remark: StringType().maxLength(200, '备注最多200个字符'),
});
