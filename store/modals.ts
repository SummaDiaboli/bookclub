interface State {
    loginModal: boolean
    newClubModal: boolean
    newDiscussionModal: boolean
}

export const state = (): State => ({
    loginModal: false,
    newClubModal: false,
    newDiscussionModal: false,
})

export const mutations = {
    toggleModal(state: State, modal: string) {
        switch (modal) {
            case 'loginModal':
                state.loginModal = !state.loginModal
                break

            case 'newClubModal':
                state.newClubModal = !state.newClubModal
                break

            case 'newDiscussionModal':
                state.newDiscussionModal = !state.newDiscussionModal
                break

            default:
                break
        }
    },
}
