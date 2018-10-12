const crimes = {
  state: {
    status: { loading: false },
    crimes: [],
    currentPage: null,
    lastPage: null,
  },
  mutations: {
    getCrimesRequest(state) {
      state.status = { loading: true };
      state.crimes = [];
    },
    getCrimesSuccess(state, data) {
      state.status = data.status;
      state.crimes = data.crimes;
      state.currentPage = data.currentPage;
      state.lastPage = data.lastPage;
    },
    getCrimesFailure(state) {
      state.status = { loading: false };
      state.crimes = [];
      state.currentPage = null;
      state.lastPage = null;
    },
  },
  getters: {
  },
  actions: {
  },
};

export default crimes;
