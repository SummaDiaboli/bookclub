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
                <h2 class="font-bold text-lg">Create New Club</h2>

                <form class="md:w-full max-w-lg min-w-full text-sm">
                    <div class="mx-3">
                        <div class="mb-4">
                            <label
                                class="
                                    block
                                    text-gray-700 text-sm
                                    font-bold
                                    mb-2
                                "
                                for="name"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                v-model="name"
                                class="
                                    appearance-none
                                    block
                                    w-full
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

                        <div class="mb-3">
                            <label
                                class="
                                    block
                                    text-gray-700 text-sm
                                    font-bold
                                    mb-2
                                "
                                for="about"
                            >
                                About
                            </label>
                            <input
                                id="about"
                                v-model="about"
                                class="
                                    appearance-none
                                    block
                                    w-full
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
                                @click.prevent="createClub"
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
import { addClubMember, createClub } from '~/queries/clubs'

export default Vue.extend({
    data: () => {
        return {
            name: '',
            about: '',
            userId: '',
            clubId: '',
            loading: false,
        }
    },
    computed: {
        getUser() {
            return this.$store.state.users.user
        },

        checkModal() {
            return this.$store.state.modals.newClubModal
        },
    },
    methods: {
        toggleModal() {
            this.$store.commit('modals/toggleModal', 'newClubModal')
        },

        createClub() {
            if (this.name !== '' && this.about !== '') {
                this.loading = true

                const userId = this.getUser?.id
                const newClubQuery = createClub(userId, this.name, this.about)

                this.$axios
                    .$post(
                        `${process.env.HTTP_ENDPOINT}`,
                        JSON.stringify({ query: newClubQuery }),
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'x-hasura-admin-secret': `${process.env.HASURA_KEY}`,
                            },
                        }
                    )
                    .then((res) => res.data.insert_clubs.returning[0].id)
                    .then((clubId) => {
                        const newClubMemberQuery = addClubMember(userId, clubId)
                        this.$axios
                            .$post(
                                `${process.env.HTTP_ENDPOINT}`,
                                JSON.stringify({ query: newClubMemberQuery }),
                                {
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'x-hasura-admin-secret': `${process.env.HASURA_KEY}`,
                                    },
                                }
                            )
                            .then((res) => res.data)
                            .then((data) => {
                                this.loading = false
                                if (
                                    data.insert_club_member.returning.length > 0
                                ) {
                                    this.toggleModal()
                                    this.$nuxt.refresh()
                                } else {
                                    console.log(
                                        'Could not register club or user'
                                    )
                                }
                            })
                    })
            }
        },
    },
})
</script>