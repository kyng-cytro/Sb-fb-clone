import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/Friends",
    name: "Friends",

    component: () =>
      import(/* webpackChunkName: "Friends" */ "../views/Friends.vue"),
  },
  {
    path: "/Events",
    name: "Events",

    component: () =>
      import(/* webpackChunkName: "Events" */ "../views/Events.vue"),
  },
  {
    path: "/Groups",
    name: "Groups",

    component: () =>
      import(/* webpackChunkName: "Groups" */ "../views/Groups.vue"),
  },
  {
    path: "/FriendEntry",
    name: "FriendEntry",

    component: () =>
      import(/* webpackChunkName: "FriendEntry" */ "../views/FriendEntry.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
