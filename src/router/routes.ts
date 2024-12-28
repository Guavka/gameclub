import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/order',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/OrderPage.vue') }],
  },
  {
    path: '/qr',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/QrPage.vue') }],
  },
  {
    path: '/booking',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BookingPage.vue') }],
  },
  {
    path: '/leaders',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LeadersPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
