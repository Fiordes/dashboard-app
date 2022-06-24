<template>
  <div class="main-wrapper">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  components: {Navigation},
  setup() {
    return {}
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
