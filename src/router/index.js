import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 85,
        // behavior: "smooth",
        class: "ACTIVE",
      };
    }
  },
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",
});

export default router;
