<template>
  <div class="page-wrapper form-wrapper">
    <!--    Error Handling   -->
    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
    <!--  Registration Form  -->
    <form >
      <h2>Login</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Enter your password" v-model="password">
      </div>
      <button type="submit">Register</button>
      <router-link class="login-link" to="/register">Dont have an account? <span>Register</span></router-link>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "LoginView.vue",
  setup() {
    const email = ref(null);
    const password = ref(null);
    const errorMessage = ref(null);

    return {
      email,
      password,
      errorMessage
    }

  }
}
</script>

<style scoped>

</style>
