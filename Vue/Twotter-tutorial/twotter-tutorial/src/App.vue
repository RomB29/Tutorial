<template>
  <div id="app">
    <nav>
      <div class="navigation__logo">
        <router-link to="/">
          Twooter
        </router-link> 
      </div>
      <div class="navigation__user" v-if="user">
        {{ user.username }}
      </div>
    </nav>
    <router-view/>
  </div>

</template>

<script>
// import { reactive } from 'vue';
//import UserProfile from "./views/UserProfile";
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  name: 'App',
  //name: ''components: { UserProfile },
  setup() {
    const store = useStore();
    const user  = computed(() => store.state.User.user);
    return {
      user
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: rgba(62, 65, 245, 0.925);
    color: white;
    .navigation__logo {
      font-weight: bold;
      font-size: 28px;
    }
    .navigation__user {
      font-weight: bold;
      font-size: 28px;
    }
  }
}
</style>
