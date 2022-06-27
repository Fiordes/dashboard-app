<template>
  <div v-if="appReady" class="main-wrapper">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import {ref} from "vue";
import {supabase} from './supabase/init';

export default {
  components: {Navigation},
  setup() {
    const appReady = ref(true);
    const user = supabase.auth.user();

    if (!user) {
      appReady.value = false;
    }

    return {
      appReady
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
