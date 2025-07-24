import PGallery from "@/pages/PGallery.vue";
import PHome from "@/pages/PHome.vue";
import PProjects from "@/pages/PProjects.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: PHome },
  { path: "/gallery", component: PGallery },
  { path: "/projects", component: PProjects },
];

export const router = createRouter({
  history: createWebHistory('/architects-land/'),
  routes,
});
