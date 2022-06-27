import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(view) {
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`
    );
}


const routes = [
  {
    path: '/',
    name: 'dashboard',
    component:  loadPage('DashboardView')
  },
  {
    path: '/activity',
    name: 'activity',
    component: loadPage('ActivityView')
  },
  {
    path: '/library',
    name: 'library',
    component: loadPage('LibraryView')
  },
  {
    path: '/security',
    name: 'security',
    component: loadPage('SecurityView')
  },
  {
    path: '/schedules',
    name: 'schedules',
    component: loadPage('ScheduleView')
  },
  {
    path: '/payouts',
    name: 'payouts',
    component: loadPage('PayoutsView')
  },
  {
    path: '/settings',
    name: "settings",
    component: loadPage('SettingsView')
  },
  {
    path: '/login',
    name: 'login',
    component: loadPage('LoginView')
  },
  {
    path: '/register',
    name: 'register',
    component: loadPage('RegisterView')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
