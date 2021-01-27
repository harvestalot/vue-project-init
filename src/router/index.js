import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/403',
    name: '403',
    component: () => import('../views/Errors/403.vue'),
  },
  {
    path: '/*',
    name: '404',
    component: () => import('../views/Errors/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
