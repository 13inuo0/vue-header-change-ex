import Home from "@/views/Home.vue";
import Reser from "@/views/Reser.vue";
import Resercheck from "@/views/Resercheck.vue";
import Review from "@/views/Review.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: Home, name: "Home"},
  { path: "/reser", component: Reser, name: "Reser"},
  { path: "/review", component: Review, name: "Review"},
  { path: "/resercheck", component: Resercheck, name: "Resercheck"},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
