import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: "/setcolor",
    name: "setcolor",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "setcolor" */ "../views/SetColor.vue")
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "setcolor" */ "../views/SetColor.vue")
  },
  {
    path: "/bird",
    name: "bird",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "setcolor" */ "../views/Bird.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   let token = "";
//   if (token) {
//     if (to.path === "/login") {
//       next({ name: "home" });
//     } else {
//       next();
//     }
//   } else {
//     // eslint-disable-next-line no-console
//     console.log(to.path);
//     if (to.path !== "/login") {
//       next("/login");
//     } else {
//       next();
//     }
//   }
//   // if(!token){
//   //   next({name:"login"})
//   // }else {
//   //   next();
//   // }
// });
export default router;
