interface State {
    user: {}
    auth: boolean
}

export const state = (): State => ({
    user: {},
    auth: false,
})

export const mutations = {
    login(state: State, user: {}) {
        state.user = user
        state.auth = user !== undefined
    },

    logout(state: State) {
        state.user = {}
        state.auth = false
    },
}
