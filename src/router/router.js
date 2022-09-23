import { createRouter, createWebHashHistory } from 'vue-router';

// Define routes
const routes = [
  { path: '/', redirect: { name: 'pokemon' } },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () =>
      import(
        /* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'
      ),
    children: [
      {
        path: 'home',
        name: 'pokemon-home',
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage'
          ),
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage'
          ),
      },
      {
        path: 'pokemon/:pokemonId',
        name: 'pokemon-id',
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'
          ),
        props: route => {
          const { pokemonId } = route.params;
          const pokemonIdNumber = Number(pokemonId);
          return {
            pokemonId: !isNaN(pokemonIdNumber) ? pokemonIdNumber : 1,
          };
        },
      },
      { path: '', redirect: { name: 'pokemon-home' } },
    ],
  },
  {
    path: '/dbz',
    name: 'dbz',
    component: () =>
      import(
        /* webpackChunkName: "DbzLayout" */ '@/modules/dbz/layouts/DbzLayout'
      ),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () =>
          import(
            /* webpackChunkName: "Characters" */ '@/modules/dbz/pages/Characters'
          ),
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () =>
          import(/* webpackChunkName: "About" */ '@/modules/dbz/pages/About'),
      },
      { path: '', redirect: { name: 'dbz-characters' } },
    ],
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
