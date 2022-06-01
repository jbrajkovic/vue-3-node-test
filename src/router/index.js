import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/layouts/Main';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main },
  ],
});

export default router;
