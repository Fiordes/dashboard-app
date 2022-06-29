import { createStore } from 'vuex';
import {supabase} from '../supabase/init';
import router from '../router';
import {VueCookieNext} from 'vue-cookie-next';

export default createStore({
  state: {
    user: null,
    errorMessage: null,
  },
  getters: {
  },
  mutations: {
    setUser(state, payload) {
        state.user = payload
    },
    setErrorMessage(state, payload) {
        state.errorMessage = payload
    },
    resetErrorMessage(state) {
        state.errorMessage = null;
    }
  },
  actions: {
    //   Register
    async registerAction({commit}, form) {
        try {
            const {error} = await await supabase.auth.signUp({
                email: form.email,
                password: form.password
            });
            if (error) throw error;

        // TODO: ADD REDIRECT TO CONFIRMATION MESSAGE

        } catch (error) {
            commit('setErrorMessage', error.message);
            setTimeout(() => {
                commit('resetErrorMessage');
            }, 4000);
        }
    },
    //     LOGIN
    async loginAction({commit}, form) {
        try {
            const {error, user} = await supabase.auth.signIn({
                email: form.email,
                password: form.password
            });
            if (error) throw error;

            commit('setUser', user);

            await router.push({name: 'dashboard'})

        } catch(error) {
            commit('setErrorMessage', error.message);
            setTimeout(() => {
                commit('resetErrorMessage');
            }, 4000);
        }
    },
    //     LOgout
    async logOutAction({commit}) {
        try {
            const {error} = await supabase.auth.signOut();
            if (error) throw error;
            VueCookieNext.removeCookie('user');
            commit('setUser', null);
            await router.push({name: 'login'});

        } catch (error) {
            commit('setErrorMessage', error.message);
            setTimeout(() => {
                commit('resetErrorMessage');
            }, 4000);
        }
    }
  },
  modules: {
  }
});
