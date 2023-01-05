import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ViewView from "../views/ViewView.vue";
import PostView from "../views/PostView.vue";
import AboutView from "../views/AboutView.vue";
import RechargeView from "../views/RechargeView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/view/:id",
      name: "view",
      component: ViewView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostView,
    },
    {
      path: "/recharge",
      name: "recharge",
      component: RechargeView
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView
    }
  ],
});

export default router;
