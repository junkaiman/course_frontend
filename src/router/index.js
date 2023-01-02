import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ViewView from "../views/ViewView.vue";
import PostView from "../views/PostView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/view",
      name: "view",
      component: ViewView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/post",
      name: "post",
      component: PostView
    }
  ],
});

export default router;
