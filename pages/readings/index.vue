<template>
    <div>
        <new-reading-modal />
        <div class="">
            <!-- Search -->
            <div class="h-10 container relative w-full">
                <div class="absolute flex gap-2 top-0 right-0">
                    <!-- hello -->
                    <!-- <FontAwesomeIcon class="cursor-pointer mt-2" :icon="['fas', 'sort-amount-down']" /> -->
                    <!-- <input
                            type="text"
                            class="w-max text-sm px-3 mr-2 h-9 mx-auto bg-white rounded-2xl hover:ring-1 hover:ring-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                            placeholder="Books, Authors, Tags..."
                        />
                        <FontAwesomeIcon
                            class="cursor-pointer mt-2"
                            :icon="['fas', 'search']"
                        /> -->

                    <div
                        v-show="getAuth"
                        class="
                            cursor-pointer
                            py-1
                            px-2
                            border
                            rounded-md
                            border-gray-700
                            hover:text-white hover:bg-gray-700
                        "
                        @click="toggleModal"
                    >
                        Add +
                    </div>

                    <div
                        class="
                            cursor-pointer
                            py-1
                            px-2
                            border
                            rounded-md
                            border-gray-700
                            hover:text-white hover:bg-gray-700
                        "
                    >
                        Manage
                    </div>
                </div>
            </div>

            <!-- CardList -->
            <div v-if="$fetchState.pending || $fetchState.error">
                <ul class="flex flex-col gap-5">
                    <li v-for="i in 5" :key="i">
                        <div
                            class="
                                bg-white
                                xl:max-h-40
                                rounded-md
                                shadow-md
                                hover:shadow-lg
                            "
                        >
                            <content-placeholders rounded class="px-6 py-2">
                                <content-placeholders-text
                                    :lines="1"
                                    class="font-bold text-lg col-span-2 mt-2"
                                />
                                <content-placeholders-text
                                    class="mt-6 line-clamp-4 xl:line-clamp-3"
                                    :lines="3"
                                />
                            </content-placeholders>
                        </div>
                    </li>
                </ul>
            </div>

            <div v-else>
                <ul class="flex flex-col gap-4">
                    <div v-for="reading in readingCards" :key="reading.id">
                        <li>
                            <div
                                class="
                                    bg-white
                                    xl:max-h-48
                                    rounded-md
                                    shadow-md
                                    hover:shadow-lg
                                "
                            >
                                <div class="px-6 py-2">
                                    <nuxt-link :to="`readings/${reading.id}`">
                                        <div class="relative">
                                            <h1
                                                class="
                                                    font-bold
                                                    text-lg
                                                    col-span-2
                                                    line-clamp-1
                                                "
                                            >
                                                {{ reading.title }}
                                            </h1>
                                        </div>

                                        <div class="mt-2 line-clamp-4">
                                            {{ reading.description }}
                                        </div>

                                        <div>
                                            Starts:
                                            {{
                                                convertDate(reading.start_time)
                                            }}
                                        </div>

                                        <!-- <div>Time: {{ readings.time }}</div> -->
                                    </nuxt-link>

                                    <!-- Bottom card actions -->
                                    <div
                                        class="
                                            mt-2
                                            relative
                                            flex flex-col
                                            md:flex-row
                                            gap-5
                                        "
                                    >
                                        <!-- Buttons -->
                                        <div
                                            class="
                                                bg-bookclubnav
                                                rounded
                                                cursor-pointer
                                                hover:bg-bookclubbutton
                                            "
                                        >
                                            <nuxt-link
                                                :to="`/books/${reading.book}`"
                                            >
                                                <span
                                                    class="
                                                        inline-block
                                                        mx-2
                                                        my-1
                                                        text-sm
                                                    "
                                                    >View Book</span
                                                >
                                            </nuxt-link>
                                        </div>

                                        <div
                                            class="
                                                bg-bookclubnav
                                                rounded
                                                cursor-pointer
                                                hover:bg-bookclubbutton
                                            "
                                        >
                                            <span
                                                class="
                                                    inline-block
                                                    mx-2
                                                    my-1
                                                    text-sm
                                                "
                                                >Add to Schedule</span
                                            >
                                        </div>

                                        <!-- Additional information -->
                                        <div
                                            class="
                                                md:absolute
                                                top-0
                                                right-0
                                                text-sm text-gray-500
                                                space-x-5
                                            "
                                        >
                                            <span>{{
                                                convertDate(reading.created_at)
                                            }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </div>

        <!--  Sidebar 
            <div class="col-start-7 col-span-2 invisible xl:visible">
                <h1 class="font-bold">Popular Reading Events</h1>

                <div class="bg-white h-72 mt-4 shadow-md rounded-sm">
                    <div class="">
                        <img
                            class="object-cover h-40 min-w-full"
                            src="https://placekitten.com/300/400"
                        />
                    </div>

                    <div class="min-w-full">
                        <div
                            class="pt-2 px-2 leading-tight text-center font-bold text-xl"
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
        </div> -->
    </div>
</template>

<script lang="ts">
import moment from 'moment'
import Vue from 'vue'
import NewReadingModal from '~/components/NewReadingModal.vue'
import { getReadings } from '~/queries/readings'

const readingCards = {
    title: '',
    description: '',
    start_date: '',
    created_at: '',
    replies: '',
}

export default Vue.extend({
    components: { NewReadingModal },
    data: () => {
        return { readingCards }
    },
    async fetch() {
        const query = getReadings()

        this.readingCards = await this.$axios
            .$post(`${process.env.HTTP_ENDPOINT}`, JSON.stringify({ query }), {
                headers: {
                    'Content-Type': 'application/json',
                    'x-hasura-admin-secret': `${process.env.HASURA_KEY}`,
                },
            })
            .then((res) => res.data)
            .then((data) => data.readings)
    },
    head: {
        title: 'Readings',
    },
    computed: {
        getAuth() {
            return this.$store.state.users.auth
        },
    },
    methods: {
        toggleModal() {
            this.$store.commit('modals/toggleModal', 'newReadingModal')
        },

        convertDate(date: Date) {
            return moment(new Date(date)).calendar()
        },
    },
})
</script>