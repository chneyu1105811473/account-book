export enum ERROR_CODES {
  WRONG_PASSWORD = 40001,
  INVALID_ACCESS_TOKEN,
  PARAM_TYPE_ERROR,
  PARAM_RANGE_ERROR,
  PARAM_MISSING,
  CATEGORIES_TYPE_HAVE_SURVICE, // 添加更新账目分类已经存在
  CATEGORIES_TYPE_DELETE_FORBIDDEN, // 当前分类已有账目关联使用，不能删除
  UNRECOGNIZE = 99999, // 非项目代码抛出的错误（如依赖库等）
}
