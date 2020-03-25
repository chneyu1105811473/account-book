const List = () => import('@/views/transactions/list');
const Edit = () => import('@/views/transactions/edit');
export default [
  {
    name: 'transactionsList',
    path: '/transactions',
    component: List,
  },
  {
    name: 'transactionsEdit',
    path: '/transactions/edit/:mode',
    component: Edit,
  },
];
