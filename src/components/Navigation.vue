<template>
  <div class="nav-wrapper">
    <router-link
      class="site-logo"
      to="/"
    >
      <img
        src="../assets/images/logo.svg"
        alt="Logo"
      >
    </router-link>

    <nav>
      <ul>
        <li>
          <router-link to="/">
            <dashboard-icon />
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/activity">
            <activity-icon />
            Activity
          </router-link>
        </li>
        <li>
          <router-link to="/library">
            <library-icon />
            Library
          </router-link>
        </li>
        <li>
          <router-link to="/security">
            <security-icon />
            Security
          </router-link>
        </li>
        <li>
          <router-link to="/schedules">
            <schedules-icon />
            Schedules
          </router-link>
        </li>
        <li>
          <router-link to="/payouts">
            <payouts-icon />
            Payouts
          </router-link>
        </li>
        <li>
          <router-link to="/settings">
            <settings-icon />
            Settings
          </router-link>
        </li>
        <li v-if="!user">
          <router-link to="/login">
            <login-icon />
            Log In
          </router-link>
        </li>
        <li v-else>
          <a
            href="#"
            @click.prevent="logout"
            class="logout-link"
          >
            <login-icon />
            Logout
          </a>
        </li>
      </ul>
      <p
        v-if="!user"
        class="register-link"
      >
        Dont have account yet?
        <router-link to="/register">
          Register now!
        </router-link>
      </p>
    </nav>
  </div>
</template>

<script>
import DashboardIcon from "@/components/icons/DashboardIcon";
import ActivityIcon from "@/components/icons/ActivityIcon";
import LibraryIcon from "@/components/icons/LibraryIcon";
import SecurityIcon from "@/components/icons/SecurityIcon";
import SchedulesIcon from "@/components/icons/SchedulesIcon";
import PayoutsIcon from "@/components/icons/PayoutsIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import LoginIcon from "@/components/icons/LoginIcon";
import {useStore} from 'vuex';
import {computed} from 'vue';

export default {
  name: "Navigation",
  components: {
    LoginIcon,
    SettingsIcon, PayoutsIcon, SchedulesIcon, SecurityIcon, LibraryIcon, ActivityIcon, DashboardIcon
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.auth.user);

    const logout = async () => {
      store.dispatch('auth/logOutAction')
    }
    return {
      logout,
      user
    }
  }
}
</script>

<style lang="scss">
.nav-wrapper {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 50px 38px;

  .site-logo {
    margin-bottom: 48px;
  }

  nav,
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
  }


  li {
    list-style: none;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: $base-color;
      font-size: 16px;
      line-height: 1.5;
      padding: 13px;

      &.router-link-active {
        border-radius: 4px;
        background-color: $base-blue;
        color: #fff;


        .navigation-icon {
          fill: #fff;
        }
      }

      svg {
        margin-right: 16px;
      }
    }

    .navigation-icon {
      fill: $base-color;
      transition: all 0.3s;
    }

    &:hover {
      a {
        color: $base-blue;
        transition: all 0.3s;

        &.router-link-active {
          color: #fff;

          .navigation-icon {
            fill: #fff;
          }
        }

        .navigation-icon {
          fill: $base-blue;
        }
      }


    }

    &:last-of-type {
      margin-top: auto;
    }

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }

  .register-link {
    display: flex;
    align-items: center;
    color: $base-color;

    a {
      color: $base-blue;
      margin-left: 4px;
    }
  }
}
</style>
