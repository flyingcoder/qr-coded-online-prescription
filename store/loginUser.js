export const state = () => ({
    loginuser: [],
})

export const mutations = {
    SET_LOGINUSER(state, loginuser) {
        state.loginuser = state.loginuser.concat(loginuser)
    },
}

export const actions = {
    getUser({ commit }) {
        //this.axios
    }
}
