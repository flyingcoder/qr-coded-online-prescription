export const state = () => ({
  preloaders: {},
})

export const mutations = {
  SET_PRELOADER(state, preloader) {
    state.preloaders = preloader
  },
}

export const actions = {
  setPreloader({ commit }, preloader) {
    commit('SET_PRELOADER', preloader)
  },
}
