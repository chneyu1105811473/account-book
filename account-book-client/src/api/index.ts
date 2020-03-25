import http from './http';

export const user = {
  // 登陆
  login(params: object) {
    return http.post('/users/access', params);
  },
};

export const transactions = {
  // 获取交易列表
  getList(params: object) {
    return http.get('/transactions', params);
  },
  getTransactionDetail(code: number) {
    return http.get(`/transactions/${code}`);
  },
  amendTransaction(code: number, data: object) {
    return http.put(`/transactions/${code}`, data);
  },
  addTransaction(data: object) {
    return http.post('/transactions', data);
  },
  // 删除交易
  remove(code: number) {
    return http.delete(`/transactions/${code}`);
  },
};

export const categories = {
  // 获取分类列表
  getList(params: object = {}) {
    return http.get('/categories', params);
  },
  // 删除分类
  remove(code: number) {
    return http.delete(`/categories/${code}`);
  },
  // 新增
  add(data: object = {}) {
    return http.post('/categories', data);
  },
  // 编辑
  amend(code: number, data: object = {}) {
    return http.put(`/categories/${code}`, data);
  },
};
