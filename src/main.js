import { createApp } from 'vue'
import { VueCookieNext } from 'vue-cookie-next'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(VueCookieNext).mount('#app');

VueCookieNext.config({ expire: '7d' })
