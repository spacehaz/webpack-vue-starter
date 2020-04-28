const moduleB = {
  namespaced: true,
  state: { count: 0 },
  mutations: {
    increment (state, count) {
      state.count = count
    }
  },
  actions: {
    addItem ({ state, commit }, item) {
      commit('increment', Math.random())
    }
  }
}

export default moduleB