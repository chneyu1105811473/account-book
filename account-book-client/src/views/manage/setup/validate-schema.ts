import {
    SchemaModel,
    StringType,
} from "schema-typed";

export const modelCategory = SchemaModel({
    categoryName: StringType().isRequired("分类名称必填").maxLength(6, "名称最多6个字符"),
});
