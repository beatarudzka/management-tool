import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Calendar from "../views/CalendarView.vue";
import MindMap from "../views/MindMapView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar,
    },
    {
      path: "/mind-map",
      name: "mind-map",
      component: MindMap,
    },
  ],
});

export default router;
