import { createRouter, createWebHistory } from "vue-router";
import TodoHome from "../views/TodoHome.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: TodoHome,
    },
    // {
    //   path: "/",
    //   name: "home",
    //   component: TodosView,
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
