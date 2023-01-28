import PrivatePage from "/src/views/PrivatePage.vue";
import RegisterPage from "/src/views/RegisterPage.vue";
import HomePage from "/src/views/HomePage.vue";
import LoginPage from "/src/views/LoginPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/private",
    component: PrivatePage,
    name: "private",
    meta: {requiredAuth: true}
  },
  {
    path: "/register",
    component: RegisterPage,
    name: "register",
  },
  {
    path: "/",
    name: "home",
    component: HomePage
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


router.beforeEach((to, from, next) => {
  
  const loggedIn = localStorage.getItem("USER_TOKEN")
  if(to.matched.some(record => record.meta.requiredAuth) && !loggedIn){
    next('/')

  }
  next()

})



export default router;
