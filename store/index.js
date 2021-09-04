export const strict = false

export const state = () => ({
  isLoaded: false,
  onlines: [],
})

export const getters = {
  GET_ONLINES: (state) => {
    return state.onlines
  },
}
export const mutations = {
  SET_ONLINES(state, users) {
    state.onlines = users
  },
  SET_NEW_ONLINE(state, user) {
    if (!state.onlines.find((u) => u.id === user.id)) {
      state.onlines.push(user)
    }
  },
  SET_OFFLINE(state, user) {
    state.onlines = state.onlines.filter((u) => u.id !== user.id)
  },
  FINISH_LOADING(state) {
    state.isLoaded = true
  },
}
