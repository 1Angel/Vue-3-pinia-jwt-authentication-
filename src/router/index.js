import HomePage from "/src/views/HomePage.vue";
import RegisterPage from "/src/views/RegisterPage.vue";
import LoginPage from "/src/views/LoginPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/register",
    component: RegisterPage,
    name: "register",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
