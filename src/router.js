import { createRouter, createWebHistory } from "vue-router";
import Layout from "./pages/Layout.vue";
import Home from "./pages/Home.vue";
import Integrations from "./pages/Integrations.vue";
import Joinus from "./pages/Joinus.vue";
import IntegrationsSingle from "./pages/IntegrationsSingle.vue";
import Changelog from "./pages/Changelog.vue";
import SignIn from "./pages/SignIn.vue";
import SignUp from "./pages/SignUp.vue";
import ResetPassword from "./pages/ResetPassword.vue";
const routerHistory = createWebHistory();

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 });
    } else {
      document.querySelector("html").style.scrollBehavior = "auto";
      window.scroll({ top: 0 });
      document.querySelector("html").style.scrollBehavior = "";
    }
  },
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "integrations",
          component: Integrations,
        },
        {
          path: "joinus",
          component: Joinus,
        },
        {
          path: "integrations-single",
          component: IntegrationsSingle,
        },

        {
          path: "changelog",
          component: Changelog,
        },
      ],
    },
    {
      path: "/signin",
      component: SignIn,
    },
    {
      path: "/signup",
      component: SignUp,
    },
    {
      path: "/reset-password",
      component: ResetPassword,
    },
  ],
});

export default router;
