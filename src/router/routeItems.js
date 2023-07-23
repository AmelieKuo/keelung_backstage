// router name path

export const routes = [

  // 以下為 default.layout
  {
    path: '/',
    name: 'default',
    component: () => import('@/layout/default.vue'),
    meta: { layout: 'default' },
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: 'backstage',
        component: () => import('@/layout/backstage.vue'),
        children: [
          {
            name: 'permissions',
            path: 'permissions',
            component: () => import('@/views/UserAuthorization/Permissions.vue'),
          },
        ],
      },
    ],
  },
  // 以下為 white.layout
  {
    path: '/',
    name: 'white',
    component: () => import('@/layout/white.vue'),
    meta: { layout: 'white' },
    children: [
      {
        path: 'backstage',
        component: () => import('@/layout/backstage.vue'),
        children: [
          {
            name: 'requirement',
            path: 'requirement',
            component: () => import('@/views/VolunteerService/Requirement.vue'),
          },
        ],
      },
    ],
  },
];
