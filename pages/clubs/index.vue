<template>
    <div>
        <div class="grid grid-cols-8 overflow-x-hidden">
            <div class="col-start-1 col-end-7 row-start-1">
                <new-club-modal />

                <div class="flex justify-between">
                    <span class="font-bold">All Clubs</span>
                    <div
                        v-show="getAuth"
                        class="
                            -mr-7
                            xl:mr-10
                            border
                            rounded-md
                            border-gray-700
                            py-[0.1rem]
                            px-1
                            cursor-pointer
                            hover:text-white hover:bg-gray-700
                        "
                        @click="toggleModal"
                    >
                        Add +
                    </div>
                </div>
                <ul class="flex flex-wrap gap-4">
                    <li v-if="$fetchState.pending">Loading...</li>

                    <li
                        v-for="club in clubCards"
                        v-else
                        :key="club.name"
                        :class="[getAuth ? 'mt-3' : 'mt-4']"
                    >
                        <nuxt-link :to="`/clubs/${club.id}`">
                            <club-card
                                :name="club.name"
                                :reading="club.reading"
                            />
                        </nuxt-link>
                    </li>
                </ul>
            </div>

            <div class="col-start-7 col-span-2 invisible xl:visible">
                <span class="font-bold">Upcoming Club Events</span>

                <div class="bg-white h-72 mt-4 shadow-md rounded-sm">
                    <div class="">
                        <img
                            class="object-cover h-40 min-w-full"
                            src="https://placekitten.com/300/400"
                        />
                    </div>
                    <div class="min-w-full">
                        <div
                            class="
                                pt-2
                                px-2
                                leading-tight
                                text-center
                                font-bold
                                text-xl
                            "
                        >
                            AMA: Brandon Sanderson
                        </div>

                        <div class="text-center pt-1 font-medium">
                            Meet with bestselling author Brandon Sanderson as he
                            talks about the upcoming sequel to his Skyward
                            Series
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ClubCard from '~/components/ClubCard.vue'
import NewClubModal from '~/components/NewClubModal.vue'
import { getClubs } from '~/queries/clubs'

const clubCards = [
    { name: 'The Ladies Club', reading: 'The Court of Silver Flames' },
    { name: 'Motivators', reading: 'Keep Going! Never Stop!' },
    { name: 'Fantasy Lovers', reading: 'The Name of the Wind' },
]

export default Vue.extend({
    components: { ClubCard, NewClubModal },
    data: () => {
        return { clubCards }
    },
    async fetch() {
        const query = getClubs()

        this.clubCards = await this.$axios
            .$post(`${process.env.HTTP_ENDPOINT}`, JSON.stringify({ query }), {
                headers: {
                    'Content-Type': 'application/json',
                    'x-hasura-admin-secret': `${process.env.HASURA_KEY}`,
                },
            })
            .then((res) => res.data)
            .then((data) => data.clubs)
    },
    head: { title: 'Clubs' },
    computed: {
        getAuth() {
            return this.$store.state.users.auth
        },
    },
    activated() {
        // Call fetch again if last fetch more than 5 mins ago
        if (this.$fetchState.timestamp <= Date.now() - 300000) {
            this.$fetch()
        }
    },
    methods: {
        toggleModal() {
            this.$store.commit('modals/toggleModal', 'newClubModal')
        },
    },
    // created() {
    //     this.retrieveClubs()
    // },
    // methods: {
    //     retrieveClubs() {
    //         const query = getClubs()

    //         this.$axios
    //             .$post(
    //                 `${process.env.HTTP_ENDPOINT}`,
    //                 JSON.stringify({ query }),
    //                 {
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         'x-hasura-admin-secret': `${process.env.HASURA_KEY}`,
    //                     },
    //                 }
    //             )
    //             .then((res) => res.data)
    //             .then((data) => {
    //                 console.log(data.clubs)
    //                 this.clubCards = data.clubs
    //             })
    //     },
    // },
})
</script>