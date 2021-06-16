export const state = () => ({
  preloader: [],
})

export const mutations = {
  SET_PRELOADER(state, preloader) {
    state.showing = state.preloader.concat(preloader)
  },
}

export const actions = {
  setPreloader({ commit }, preloader) {
    commit('SET_PRELOADER', preloader)
  },
}
