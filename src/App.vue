<template>
  <div class="main-wrapper">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import {onMounted} from "vue";
import {supabase} from './supabase/init';
import {useStore} from "vuex";
import {useCookie} from "vue-cookie-next";

export default {
  components: {Navigation},
  setup() {
    const store = useStore();
    const cookie = useCookie();

    onMounted(async () => {
      try {
        if(!cookie.getCookie('user'))  return;
        const { user, error } = await supabase.auth.api.getUser(
            cookie.getCookie('user'),
        );
        if(error) throw error;

        store.commit('setUser', user);
      } catch (error) {
        console.log(error)
      }
    });

    // supabase.auth.onAuthStateChange((_, session) => {
    //   if(session) {
    //     cookie.setCookie('user', session.access_token)
    //   }
    // });

    return {
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
</style>
