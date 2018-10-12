const users = {
  state: {
    status: { loading: false },
    users: [],
    currentPage: null,
    lastPage: null,
  },
  mutations: {
    getUsersRequest(state) {
      state.status = { loading: true };
      state.users = [];
    },
    getUsersSuccess(state, data) {
      state.status = data.status;
      state.users = data.users;
      state.currentPage = data.currentPage;
      state.lastPage = data.lastPage;
    },
    getUsersFailure(state) {
      state.status = { loading: false };
      state.users = [];
      state.currentPage = null;
      state.lastPage = null;
    },
  },
  getters: {
  },
  actions: {
  },
};

export default users;
