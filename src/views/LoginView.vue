<template>
  <div class="page-wrapper form-wrapper">
    <!--    Error Handling   -->
    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
    <!--  Login Form  -->
    <form @submit.prevent="login">
      <h2>Login</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email" v-model="form.email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Enter your password" v-model="form.password">
      </div>
      <button type="submit">Login</button>
      <router-link class="login-link" to="/register">Dont have an account? <span>Register</span></router-link>
    </form>
  </div>
</template>

<script>
import {computed, reactive} from 'vue';
import {useStore} from 'vuex';

export default {
  name: "LoginView",
  setup() {
    const store = useStore();
    const form = reactive({
      email: null,
      password: null
    });
    const errorMessage = computed(() => store.state.auth.errorMessage);
    const login = () => {
      store.dispatch('auth/loginAction', form);
    }

    return {
      form,
      login,
      errorMessage
    }

  }
}
</script>

<style scoped>

</style>
