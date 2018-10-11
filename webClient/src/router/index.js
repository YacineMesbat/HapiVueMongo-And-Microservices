import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Crimes from '@/components/Crimes';
import Users from '@/components/Users';

Vue.use(Router);

export default new Router({
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
      path: '/users',
      name: 'Users',
      component: Users,
    },
  ],
});
