import { getItems } from 'data/api/items'

const items = {
  namespaced: true,
  state: { items: [] },
  mutations: {
    setItems (state, items) {
      state.items = items
    }
  },
  getters: {},
  actions: {
    getAllItems ({ commit }) {
      getItems(items => {
        commit('setItems', items)
      })
    }
  }
}

export default items