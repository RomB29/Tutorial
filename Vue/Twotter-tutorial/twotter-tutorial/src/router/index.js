import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import { users } from '../assets/users';
import Home from '../views/Home.vue';
import UserProfile from '../views/UserProfile';
import Admin from "../views/Admin";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/user/:userId', // :userId = variable
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const user = store.state.User.user;
  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
  if (!user) {
    store.dispatch('User/setUser', users[4]) //store.commit() selectionne ici le users 5
  }
  if (requiresAdmin && !isAdmin) next({ name: 'Home' }); // if it passed the it goes next home
  else next();
})

export default router
