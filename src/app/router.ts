// import PAboutUs from "@/pages/PAboutUs.vue";
// import PCertificates from "@/pages/PCertificates.vue";
// import PContacts from "@/pages/PContacts.vue";
// import PGallery from "@/pages/PGallery.vue";
// import PHome from "@/pages/PHome.vue";
// import PProject from "@/pages/PProject.vue";
// import PProjects from "@/pages/PProjects.vue";
import { createWebHistory, createRouter } from "vue-router";
import { routes } from 'vue-router/auto-routes'

// const routes = [
//   { path: "/", component: PHome },
//   { path: "/gallery", component: PGallery },
//   { path: "/projects", component: PProjects },
//   { path: "/projects/:slug", component: PProject },
//   { path: "/certificates", component: PCertificates },
//   { path: "/contacts", component: PContacts },
//   { path: "/about", component: PAboutUs },
// ];

export const router = createRouter({
  history: createWebHistory("/architects-land/"),
  routes,
});
