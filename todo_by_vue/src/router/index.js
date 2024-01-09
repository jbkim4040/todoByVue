import { createRouter, createWebHistory } from "vue-router";
import TodosView from "../views/TodosView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: TodosView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/testing",
      name: "testing",
      component: () => import("../views/TestingView.vue"),
    },
  ],
});

export default router;
