import { createRouter, createWebHashHistory } from 'vue-router';

// Define routes
const routes = [
  {
    path: '/',
    component: () =>
      import(
        /* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage'
      ),
  },
  {
    path: '/about',
    component: () =>
      import(
        /* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage'
      ),
  },
  {
    path: '/id',
    component: () =>
      import(
        /* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'
      ),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () =>
      import(
        /* webpackChunkName: "NotFoundPage" */ '@/modules/shared/pages/NotFoundPage'
      ),
  },
];

// Create the router instance and pass the `routes` option
const router = createRouter({
  // Provide the history implementation to use
  history: createWebHashHistory(),
  routes,
});

export default router;
