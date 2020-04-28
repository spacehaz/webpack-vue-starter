import { call, put, delay } from 'vuex-saga'

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
    },
    *testSaga(store, payload) {
      yield call(delay,1000)
      yield put('moduleB/increment', 2)

      yield call(delay,700)
      yield put('moduleB/increment', 10)
      return store.count
    }
  }
}

export default moduleB