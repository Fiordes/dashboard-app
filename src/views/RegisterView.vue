<template>
  <div class="page-wrapper form-wrapper">
    <!--    Error Handling   -->
    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
    <!--  Registration Form  -->
    <form @submit.prevent="register">
      <h2>Register</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email" v-model="form.email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Enter your password" v-model="form.password">
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password"
               v-model="form.confirmPassword">
      </div>
      <button type="submit">Register</button>
      <router-link class="login-link" to="/login">Already have an account? <span>Login</span></router-link>
    </form>
  </div>
</template>

<script>
import {computed, reactive} from "vue";
import {useStore} from "vuex";

export default {
  name: "RegisterView",
  setup() {
    const store = useStore();
    const form = reactive({
      email: null,
      password: null,
      confirmPassword: null,
    });

    const errorMessage = computed(() => store.state.errorMessage);

    const register = () => {
      if (form.password === form.confirmPassword) {
        store.dispatch("registerAction", form)
      } else {
        store.commit('setErrorMessage', "Password is incorrect")
      }

    }

    return {
      register,
      form,
      errorMessage
    }

  }
}
</script>

<style lang="scss" scoped>


</style>
