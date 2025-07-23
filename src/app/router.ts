import PGallery from "@/pages/PGallery.vue";
import PHome from "@/pages/PHome.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: PHome },
  { path: "/gallery", component: PGallery },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
