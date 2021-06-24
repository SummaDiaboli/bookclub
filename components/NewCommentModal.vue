<template>
    <div v-show="checkModal">
        <div
            class="
                fixed
                top-[20%]
                xl:left-[30%]
                left-[10%]
                xl:min-w-[40%]
                min-w-[80%]
                z-50
                bg-bookclubnav
                rounded-md
                shadow-md
                overflow-auto
            "
        >
            <div class="flex flex-row-reverse min-w-full justify-between">
                <button
                    class="focus:outline-none mr-3 mt-1"
                    @click="toggleModal"
                >
                    <FontAwesomeIcon :icon="['fas', 'times']" size="lg" />
                </button>
            </div>

            <!-- Form -->
            <div class="flex flex-col justify-center items-center mb-8">
                <h2 class="font-bold text-lg">Reply to Discussion</h2>

                <form class="md:w-full max-w-lg min-w-full text-sm">
                    <div class="mx-3">
                        <div class="mb-3">
                            <label
                                class="
                                    block
                                    text-gray-700 text-sm
                                    font-bold
                                    mb-2
                                "
                                for="text"
                            >
                                Text
                            </label>
                            <textarea
                                id="text"
                                v-model="text"
                                class="
                                    appearance-none
                                    block
                                    w-full
                                    min-h-[10rem]
                                    bg-gray-200
                                    text-gray-700
                                    border border-gray-200
                                    rounded
                                    py-3
                                    px-4
                                    leading-tight
                                    focus:outline-none
                                    focus:bg-white
                                    focus:border-gray-500
                                "
                                type="text"
                            />
                        </div>

                        <div class="md:w-1/3">
                            <button
                                class="
                                    shadow-sm
                                    text-sm
                                    bg-bookclubbutton
                                    hover:bg-bookgray hover:shadow-md
                                    focus:shadow-outline focus:outline-none
                                    font-bold
                                    py-2
                                    px-4
                                    rounded
                                "
                                type="button"
                                @click.prevent="createReply"
                            >
                                <FontAwesomeIcon
                                    v-if="loading"
                                    icon="circle-notch"
                                    spin
                                />

                                <span v-else> Create </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createReply } from '~/queries/discussions'
export default Vue.extend({
    data: () => {
        return {
            text: '',
            userId: '',
            loading: false,
        }
    },
    computed: {
        getUser() {
            return this.$store.state.users.user
        },

        checkModal() {
            return this.$store.state.modals.newCommentModal
        },
    },
    methods: {
        toggleModal() {
            this.$store.commit('modals/toggleModal', 'newCommentModal')
        },

        createReply() {
            if (this.text !== '') {
                this.loading = true

                const userId = this.getUser?.id
                const { id } = this.$route.params
                const query = createReply(userId, id, this.text)

                this.$axios
                    .$post(
                        `${process.env.HTTP_ENDPOINT}`,
                        JSON.stringify({ query }),
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'x-hasura-admin-secret': `${process.env.HASURA_KEY}`,
                            },
                        }
                    )
                    .then((res) =>
                        // TODO: Show an error when it fails to create discussion
                        {
                            // console.log(res)
                            if (res.data.insert_comments_one) {
                                this.text = ''
                                this.toggleModal()
                                this.$nuxt.refresh()
                            } else {
                                this.creationError()
                            }
                            this.loading = false
                        }
                    )
            }
        },

        creationError() {},
    },
})
</script>