<template>
  <div class="main-wrapper">
    <navigation />
    <transition :name="transitionName">
      <router-view :key="route.fullPath" />
    </transition>
  </div>
</template>

<script>
// TODO : FIX TRANSITION FOR ROUTER VIEW


import Navigation from "@/components/Navigation";
import {computed, onMounted} from "vue";
import {supabase} from './supabase/init';
import {useStore} from "vuex";
import {useCookie} from "vue-cookie-next";
import {useRoute} from 'vue-router';

export default {
  components: {Navigation},
  setup() {
    const store = useStore();
    const cookie = useCookie();
    const route = useRoute();

    const transitionName = computed(() => route.meta.transitionName)


    onMounted(async () => {
      try {
        if (!cookie.getCookie('user')) return;
        const {user, error} = await supabase.auth.api.getUser(
            cookie.getCookie('user')
        );
        if (error) throw error;

        store.commit('auth/setUser', user);
      } catch (error) {
        console.log(error)
      }
    });

    return {
      transitionName,
      route
    }
  }
}
</script>

<style lang="scss">

.main-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;
  background-color: #F4F7FE;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
