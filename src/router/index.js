import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/layouts/Main';
import TicketCheckPreview from '@/layouts/TicketCheckPreview';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main },
  ],
});

export default router;
