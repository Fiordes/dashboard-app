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
import {VueCookieNext} from "vue-cookie-next";

export default {
  components: {Navigation},
  setup() {
    const store = useStore();
    // const user = supabase.auth.user();

    onMounted(async () => {
      try {
        if(!VueCookieNext.getCookie('user'))  return;
        const { user, error } = await supabase.auth.api.getUser(
            VueCookieNext.getCookie('user'),
        );
        if(error) throw error
        console.log(user)
        store.commit('setUser', user);

      } catch (error) {
        console.log(error)
      }


    })

    supabase.auth.onAuthStateChange((_, session) => {
      VueCookieNext.setCookie('user', session.access_token)
    })

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
