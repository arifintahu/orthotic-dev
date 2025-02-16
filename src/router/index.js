import Vue from "vue";
import VueRouter from "vue-router";

import main from "./main";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ... main
  ]
});

export default router;