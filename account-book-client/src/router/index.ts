import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import commonUtil from "@/utils/common";

Vue.use(VueRouter);

const files = require.context("./routes", true, /\.ts$/);
const routes: RouteConfig[] = [];

files.keys().forEach((item: string) => {
  routes.push(...files(item).default);
});

const router = new VueRouter({
  routes,
});

router.beforeResolve((to: any, from: any, next: any) => {
  if (!!commonUtil.getToken() && to.name === "login") {
    next({name: "transactionsList"});
  } else {
    next();
  }
});

export default router;


