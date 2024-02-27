import { createRouter, createWebHistory } from "vue-router/auto";
import { requireAuth } from "./authMiddleware";

const router = createRouter({
  history: createWebHistory(),
  
});



router.beforeEach(requireAuth);


export default router;
