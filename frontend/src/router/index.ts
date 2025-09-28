import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ArticleDetail from '../views/ArticleDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article/:id',
    name: 'ArticleById',
    component: ArticleDetail,
  },
  {
    path: '/post/:slug',
    name: 'ArticleBySlug',
    component: ArticleDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;