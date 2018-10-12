import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Crimes from '@/components/Crimes';
import Users from '@/components/Users';
import RegisterUser from '@/components/RegisterUser';

import store from '../store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/crimes',
      name: 'Crimes',
      component: Crimes,
    },
    {
      path: '/crimes/:Id/edit',
      name: 'Crimes',
      component: Crimes,
    },
    {
      path: '/users/new',
      name: 'Create New User',
      component: RegisterUser,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
    // otherwise redirect to home
    { path: '*', redirect: '/' },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const chefPages = ['/users', '/users/new'];
  const chefRoleRequired = chefPages.includes(to.path);
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.state.auth.status.loggedIn;

  /* eslint-disable no-console */
  console.log(store.state.auth.status.loggedIn);

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  if ((chefRoleRequired && !loggedIn) || (chefRoleRequired && store.state.auth.user.role !== 'chef')) {
    return next('/');
  }

  if (to.path === '/login' && loggedIn) {
    return next('/');
  }

  return next();
});

export default router;
