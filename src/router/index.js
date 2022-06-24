import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'dashboard',
    component:  () => import(/* webpackChunkName: "about" */ '../views/DashboardView.vue')
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import(/* webpackChunkName: "activity" */ '../views/ActivityView.vue')
  },
  {
    path: '/library',
    name: 'library',
    component: () => import(/* webpackChunkName: "library" */ '../views/LibraryView.vue')
  },
  {
    path: '/security',
    name: 'security',
    component: () => import(/* webpackChunkName: "security" */ '../views/SecurityView.vue')
  },
  {
    path: '/schedules',
    name: 'schedules',
    component: () => import(/* webpackChunkName: "schedules" */ '../views/ScheduleView.vue')
  },
  {
    path: '/payouts',
    name: 'payouts',
    component: () => import(/* webpackChunkName: "payouts" */ '../views/PayoutsView.vue')
  },
  {
    path: '/settings',
    name: "settings",
    component: () => import(/* webpackChunkName: "settings"*/ '../views/SettingsView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
