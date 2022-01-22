const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'home',
        path: '/',
        component: () => import('pages/Index.vue'),
      },
      {
        name: 'login',
        path: '/login',
        component: () => import('pages/Login/Login.vue'),
      },
      {
        name: 'preferencias',
        path: 'preferencias',
        component: () => import('pages/MyPreferences/Preferences.vue'),
      },
      {
        name: 'perfil',
        path: '/perfil',
        component: () => import('pages/MyProfile/Perfil.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
