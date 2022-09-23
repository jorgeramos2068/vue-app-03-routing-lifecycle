import { createRouter, createWebHashHistory } from 'vue-router';
import isAuthenticatedGuard from './authGuard';

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
    beforeEnter: [isAuthenticatedGuard],
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

// Global Synchronous Guard
// router.beforeEach((to, from, next) => {
//   const random = Math.random() * 100;
//   if (random > 50) {
//     console.log('Authenticated');
//     next();
//   } else {
//     console.log('Blocked:', random);
//     next({ name: 'pokemon-home' });
//   }
// });

// Global Asynchronous Guard
// const canAccess = () => {
//   return new Promise(resolve => {
//     const random = Math.random() * 100;
//     if (random > 50) {
//       console.log('Authenticated - canAccess');
//       resolve(true);
//     } else {
//       console.log('Blocked - canAccess:', random);
//       resolve(false);
//     }
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAccess();
//   authorized ? next() : next({ name: 'pokemon-home' });
// });

export default router;
