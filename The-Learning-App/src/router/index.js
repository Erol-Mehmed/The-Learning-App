import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Learning from "../views/Learning.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/learning",
    name: "Learning",
    component: Learning,
  },
  {
    path: "",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
