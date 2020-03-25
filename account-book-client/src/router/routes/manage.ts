const List = () => import("@/views/manage/list");
const Setup = () => import("@/views/manage/setup");
export default [
    {
        name: "manage",
        path: "/manage",
        component: List,
    },
    {
        name: "setupManage",
        path: "/manage/setup",
        component: Setup,
    },
];
