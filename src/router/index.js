import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    name: "index",
    component: () => import("../views/content"),
    children: [
      {
        path: "/information",
        name: "information",
        component: () => import("../views/Information.vue"),
      },
      {
        path: "*",
        name: "FailPage",
        component: () => import("../views/FailPage.vue"),
      },
      {
        path: "/fineArts",
        name: "FineArts",
        component: () => import("../views/curriculum/FineArts.vue"),
      },
      {
        path: "/language",
        name: "Language",
        component: () => import("../views/curriculum/Language.vue"),
      },
      {
        path: "/mathematics",
        name: "Mathematics",
        component: () => import("../views/curriculum/Mathematics.vue"),
      },
      {
        path: "/music",
        name: "Music",
        component: () => import("../views/curriculum/Music.vue"),
      },
      {
        path: "/painting",
        name: "Painting",
        component: () => import("../views/curriculum/Painting.vue"),
      },
      {
        path: "/information",
        name: "Information",
        component: () => import("../views/Information.vue"),
      },
      {
        path: "/uploaddata",
        name: "UploadData",
        component: () => import("../views/UploadData.vue"),
      },
      {
        path: "/statisticalchart",
        name: "StatisticalChart",
        component: () => import("../views/StatisticalChart.vue"),
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
    ],
  },

  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
