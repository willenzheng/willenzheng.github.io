import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexPage from '../views/Index.vue';
import Experiment from '../views/Experiment.vue';
import BlogArticle from '../views/Blog/BlogArticle.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage,
  },
  {
    path: '/experiment',
    name: 'Experiment',
    component: Experiment,
  },
  {
    path: '/blog',
    name: 'BlogArticle',
    component: BlogArticle,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
