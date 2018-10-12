const auth = {
  state: {
    status: {},
    user: null,
    token: null,
  },
  mutations: {
    loginRequest(state) {
      state.status = { loggingIn: true };
    },
    loginSuccess(state, data) {
      state.status = { loggingIn: false, loggedIn: true };
      state.token = data.token;
      state.user = data.user;
    },
    loginFailure(state) {
      state.status = {};
      state.token = null;
      state.user = null;
    },
    logout(state) {
      state.status = {};
      state.token = null;
      state.user = null;
    },
  },
  getters: {
  },
  actions: {
  },
};

export default auth;
