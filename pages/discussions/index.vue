<template>
    <div class="">
        <!-- <div class="col-start-1 col-end-7 row-start-1"> -->
        <!-- Search -->
        <new-discussion-modal />
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
        <div class="mt-1">
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

                                <div v-show="!$fetchState.pending">
                                    <div class="cursor-pointer">
                                        <FontAwesomeIcon
                                            :icon="['fas', 'share']"
                                        />
                                        <!-- <span class="text-sm ml-1">Share</span> -->
                                    </div>
                                </div>
                            </content-placeholders>
                        </div>
                    </li>
                </ul>
            </div>

            <div v-else>
                <ul class="flex flex-col gap-5">
                    <div
                        v-for="discussion in discussionCards"
                        :key="discussion.id"
                        class=""
                    >
                        <li>
                            <div
                                class="
                                    bg-white
                                    xl:max-h-40
                                    rounded-md
                                    shadow-md
                                    hover:shadow-lg
                                "
                            >
                                <div class="px-6 py-2">
                                    <nuxt-link
                                        :to="`discussions/${discussion.id}`"
                                    >
                                        <div class="relative">
                                            <div
                                                class="
                                                    font-bold
                                                    text-lg
                                                    col-span-2
                                                    line-clamp-2
                                                "
                                            >
                                                {{ discussion.title }}
                                            </div>

                                            <!-- Card Menu -->
                                            <!-- <div
                                                    class="absolute top-0 right-0"
                                                >
                                                    <FontAwesomeIcon
                                                        :icon="[
                                                            'fas',
                                                            'ellipsis-v',
                                                        ]"
                                                        class="cursor-pointer"
                                                    />
                                                </div> -->
                                        </div>

                                        <div
                                            class="
                                                mt-2
                                                line-clamp-4
                                                xl:line-clamp-3
                                            "
                                        >
                                            {{ discussion.text }}
                                        </div>
                                    </nuxt-link>

                                    <!-- Bottom card actions -->
                                    <div class="mt-2 relative flex space-x-5">
                                        <!-- Bookmard icon -->
                                        <!-- <div v-if="!discussionCards.bookmarked">
                                        <FontAwesomeIcon
                                            class="cursor-pointer"
                                            :icon="['far', 'bookmark']"
                                            @click="
                                                prevent
                                                discussionCards.bookmarked =
                                                    !discussionCards.bookmarked
                                            "
                                        />
                                    </div>
                                    <div v-else>
                                        <FontAwesomeIcon
                                            class="cursor-pointer"
                                            :icon="['fas', 'bookmark']"
                                            @click="
                                                prevent
                                                discussionCards.bookmarked =
                                                    !discussionCards.bookmarked
                                            "
                                        />
                                    </div> -->

                                        <div class="cursor-pointer">
                                            <FontAwesomeIcon
                                                :icon="['fas', 'share']"
                                            />
                                            <!-- <span class="text-sm ml-1">Share</span> -->
                                        </div>

                                        <!-- Additional information -->
                                        <div
                                            class="
                                                absolute
                                                top-0
                                                right-0
                                                text-sm text-gray-500
                                                space-x-5
                                            "
                                        >
                                            <!-- <span
                                            >{{
                                                discussionCards.replyNum
                                            }}
                                            replies</span
                                        > -->
                                            <span v-if="!$fetchState.pending"
                                                >{{
                                                    discussion.comments.length
                                                }}
                                                replies</span
                                            >
                                            <span>{{
                                                convertDate(
                                                    discussion.created_at
                                                )
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
        <!-- </div> -->
    </div>
</template>

<script lang="ts">
import moment from 'moment'
import Vue from 'vue'
import NewDiscussionModal from '~/components/NewDiscussionModal.vue'
import { getDiscussions } from '~/queries/discussions'
// import { DateTime } from 'luxon'

const discussionCards = [
    {
        title: 'Why is Brando Sando taking his time to release Skyward 3?',
        tags: ['books', 'novel', 'question'],
        text: 'Aenean iaculis eros mauris, a dignissim massa suscipit ut. Sed eu pellentesque mauris, ut dignissim nulla. Sed egestas aliquam enim, in tincidunt augue cursus a. Morbi posuere suscipit lorem, vitae rutrum nibh malesuada ac. Nulla vitae rhoncus lorem, a placerat erat. Curabitur leo odio, consectetur ut semper quis, convallis in lectus. Morbi finibus in neque id sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis id molestie turpis. Nam ac velit ut eros mattis maximus. Duis sit amet congue tellus. Nunc quis auctor ante. Ut varius pretium tempus. ',
        bookmarked: false,
        replyNum: '10k+',
        dateCreated: 'Tue 3rd March, 2021',
    },
]

export default Vue.extend({
    components: { NewDiscussionModal },
    data: () => {
        return { discussionCards }
    },
    async fetch() {
        const query = getDiscussions()

        this.discussionCards = await this.$axios
            .$post(`${process.env.HTTP_ENDPOINT}`, JSON.stringify({ query }), {
                headers: {
                    'Content-Type': 'application/json',
                    'x-hasura-admin-secret': `${process.env.HASURA_KEY}`,
                },
            })
            .then((res) => res.data)
            .then((data) => data.discussions)
    },
    head: { title: 'Discussions' },
    computed: {
        getAuth() {
            return this.$store.state.users.auth
        },
    },
    methods: {
        toggleModal() {
            this.$store.commit('modals/toggleModal', 'newDiscussionModal')
        },

        convertDate(date: Date) {
            return moment(new Date(date)).calendar()
        },
    },
})
</script>