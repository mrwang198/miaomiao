import Vue from "vue";
import VueRouter from "vue-router";
import movieRouter from "./movie";
import mineRouter from "./mine";
import cinemaRouter from "./cinema";
Vue.use(VueRouter);

const routes = [
  movieRouter,
  mineRouter,
  cinemaRouter,
  //路由重定向
  {
    path: "/*",
    redirect: "/movie"
  }
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
