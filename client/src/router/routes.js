
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Profile', component: () => import('pages/Perfil.vue') }
    ]
  },
  {
    path: '/NewUser',
    component: () => import('layouts/Profile.vue'),
    children: [
      { path: '', component: () => import('pages/NewProfile.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
