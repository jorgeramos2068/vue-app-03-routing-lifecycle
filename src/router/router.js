import { createRouter, createWebHashHistory } from 'vue-router';

import AboutPage from '@/modules/pokemon/pages/AboutPage';
import ListPage from '@/modules/pokemon/pages/ListPage';
import PokemonPage from '@/modules/pokemon/pages/PokemonPage';
import NotFoundPage from '@/modules/shared/pages/NotFoundPage';

// Define routes
const routes = [
  { path: '/', component: ListPage },
  { path: '/about', component: AboutPage },
  { path: '/id', component: PokemonPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
];

// Create the router instance and pass the `routes` option
const router = createRouter({
  // Provide the history implementation to use
  history: createWebHashHistory(),
  routes,
});

export default router;
