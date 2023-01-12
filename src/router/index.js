import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Login from "../views/LoginPage.vue";
import Movie from "../views/MoviePage.vue";
import Purchase from "../views/PurchasePage.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/movies",
    component: Movie,
  },
  {
    path: "/purchases",
    component: Purchase,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
