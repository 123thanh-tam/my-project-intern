import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../layout/SignIn/LoginView.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../layout/SignIn/SignInView.vue"),
  },
  {
    path: "/policy",
    name: "policy",
    component: () => import("../layout/Security/SecurityPolicy.vue"),
  },
  {
    path: "/global",
    name: "global",
    component: () => import("../layout/Global/LazadaGlobal.vue"),
  },
  {
    path: "/detail/:script/detail/:img/detail/:priceFirst/detail/:sale/detail/:sold/detail/:id",
    name: "detailPro",
    component: () => import("../components/DetailPro/detailProducts.vue"),
  },
  {
    path: "/cartItem/:script/cartItem/:id",
    name: "cartItem",
    component: () => import("../components/Cart/CartItem.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
