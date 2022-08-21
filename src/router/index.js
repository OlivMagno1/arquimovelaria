import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjetosView from "../views/ProjetosView.vue";
import FaleConoscoView from "../views/FaleConoscoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projetos",
    name: "projetos",
    component: ProjetosView,
  },
  {
    path: "/faleconosco",
    name: "faleconosco",
    component: FaleConoscoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
