const getDefaultState = () => {
  return {
    items: []
  }
}

// initial state
const state = getDefaultState()

const mutations = {
  RESET_STATE(state) {
    Object.assign(state, getDefaultState())
  }
}

const actions = {
  resetState({ commit }) {
    commit('RESET_STATE')
  },
}

export default {
  state,
  getters: {},
  actions,
  mutations
}
