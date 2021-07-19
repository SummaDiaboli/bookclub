interface State {
    loginModal: boolean
    newClubModal: boolean
    newDiscussionModal: boolean
    newCommentModal: boolean
    newReadingModal: boolean
}

export const state = (): State => ({
    loginModal: false,
    newClubModal: false,
    newDiscussionModal: false,
    newCommentModal: false,
    newReadingModal: false
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

            case 'newCommentModal':
                state.newCommentModal = !state.newCommentModal
                break

            case 'newReadingModal':
                state.newReadingModal = !state.newReadingModal
                break

            default:
                break
        }
    },
}
