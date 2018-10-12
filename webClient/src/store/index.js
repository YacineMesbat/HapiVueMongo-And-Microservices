import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './auth';
import counter from './counter';
import crimes from './crimes';
import users from './users';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    auth,
    counter,
    crimes,
    users,
  },
});

export default store;
