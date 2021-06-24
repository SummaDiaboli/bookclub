<template>
    <div>
        <new-comment-modal />
        <!-- Discussion -->
        <div class="bg-white max p-5 w-full rounded-sm shadow-md">
            <div
                v-show="!$fetchState.pending"
                class="flex flex-wrap gap-2 items-center"
            >
                <div class="bg-bookclubnav rounded-full h-6 w-6">
                    <img :src="creatorPhoto" class="rounded-full h-6" />
                </div>
                <content-placeholders v-if="$fetchState.pending">
                    <content-placeholders-text :lines="1" />
                </content-placeholders>

                <div v-else class="text-sm font-bold">
                    {{
                        `${dicussionDetails.author.firstname} ${dicussionDetails.author.lastname}`
                    }}
                </div>
            </div>

            <content-placeholders v-if="$fetchState.pending">
                <content-placeholders-heading :lines="1" />
                <content-placeholders-text :lines="3" />
            </content-placeholders>

            <div v-else>
                <div class="text-xl font-bold mt-3">
                    {{ dicussionDetails.title }}
                </div>
                <div class="mt-2 text-gray-700">
                    {{ dicussionDetails.text }}
                </div>
            </div>

            <div class="mt-2 relative flex gap-8">
                <!-- Bookmard icon -->
                <!-- <div v-if="!data.bookmarked">
                    <FontAwesomeIcon
                        class="cursor-pointer"
                        :icon="['far', 'bookmark']"
                        @click="
                            prevent
                            data.bookmarked = !data.bookmarked
                        "
                    />
                </div>
                <div v-else>
                    <FontAwesomeIcon
                        class="cursor-pointer"
                        :icon="['fas', 'bookmark']"
                        @click="
                            prevent
                            data.bookmarked = !data.bookmarked
                        "
                    />
                </div> -->

                <div v-show="!$fetchState.pending" class="cursor-pointer">
                    <FontAwesomeIcon :icon="['fas', 'share']" />
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
                    <!-- <span>{{}}</span> -->
                    <span v-if="!$fetchState.pending"
                        >{{ dicussionDetails.comments.length }} replies</span
                    >
                    <span v-if="!$fetchState.pending">{{
                        convertDate(dicussionDetails.created_at)
                    }}</span>
                </div>
            </div>
        </div>

        <!-- Comment Section -->
        <div class="mt-4">
            <h1
                class="
                    font-bold
                    cursor-pointer
                    flex
                    justify-between
                    items-center
                "
            >
                <div>
                    New
                    <FontAwesomeIcon :icon="['fas', 'caret-down']" />
                </div>

                <div
                    v-show="getAuth"
                    class="
                        cursor-pointer
                        py-1
                        px-2
                        border
                        rounded-md
                        font-light
                        border-gray-700
                        hover:text-white hover:bg-gray-700
                    "
                    @click="toggleModal"
                >
                    Reply +
                </div>
            </h1>

            <div class="mt-4">
                <ul class="flex flex-wrap gap-5 flex-col">
                    <li
                        v-for="discussionComment in dicussionDetails.comments"
                        :key="discussionComment.id"
                    >
                        <div class="bg-white px-4 py-2 rounded-md shadow-md">
                            <div
                                class="
                                    flex flex-wrap
                                    xl:flex-row xl:flex-nowrap
                                    gap-3
                                "
                            >
                                <!-- <div class="flex flex-wrap gap-2"> -->
                                <div
                                    class="
                                        bg-bookclubnav
                                        invisible
                                        rounded-full
                                        xl:h-8 xl:w-8 xl:visible
                                        h-0
                                        w-0
                                    "
                                >
                                    <img
                                        :src="creatorPhoto"
                                        class="rounded-full object-contain h-8"
                                    />
                                </div>

                                <div class="w-full">
                                    <div class="flex flex-wrap gap-3 xl:gap-0">
                                        <div
                                            class="
                                                bg-bookclubnav
                                                rounded-full
                                                h-5
                                                w-5
                                                visible
                                                xl:invisible xl:h-0 xl:w-0
                                            "
                                        >
                                            <img
                                                :src="creatorPhoto"
                                                class="rounded-full"
                                            />
                                        </div>
                                        <div
                                            class="
                                                text-sm
                                                font-bold
                                                cursor-pointer
                                                inline-flex
                                            "
                                        >
                                            {{
                                                `${discussionComment.author.firstname} ${discussionComment.author.lastname}`
                                            }}
                                        </div>
                                    </div>
                                    <!-- </div> -->
                                    <div class="text-justify mt-3 md:mt-1">
                                        {{ discussionComment.text }}
                                    </div>

                                    <!-- Card actions -->
                                    <div
                                        class="
                                            mt-2
                                            w-full
                                            flex
                                            gap-5
                                            justify-between
                                        "
                                    >
                                        <!-- Bookmard icon -->
                                        <!-- <div v-if="!comment.bookmarked">
                                            <FontAwesomeIcon
                                                class="cursor-pointer"
                                                :icon="['far', 'bookmark']"
                                                @click="
                                                    prevent
                                                    comment.bookmarked =
                                                        !comment.bookmarked
                                                "
                                            />
                                        </div>
                                        <div v-else>
                                            <FontAwesomeIcon
                                                class="cursor-pointer"
                                                :icon="['fas', 'bookmark']"
                                                @click="
                                                    prevent
                                                    comment.bookmarked =
                                                        !comment.bookmarked
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
                                        <div class="text-sm text-gray-500">
                                            <span>{{
                                                convertDate(
                                                    discussionComment.created_at
                                                )
                                            }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
/* eslint-disable camelcase */
import moment from 'moment'
import Vue from 'vue'
import NewCommentModal from '~/components/NewCommentModal.vue'
import { getSpecificDiscussion } from '~/queries/discussions'

interface Author {
    id: string
    firstname: string
    lastname: string
}

interface Comment {
    id: string
    author: Author
    created_at: string
    discussion_id: string
    text: string
}

interface Club {
    id: string
    name: string
}

interface Discussion {
    author: Author
    comments: Comment[]
    created_at: string
    id: string
    text: string
    title: string
    club?: Club
}

export default Vue.extend({
    components: { NewCommentModal },
    data: () => {
        return {
            creatorPhoto: 'https://picsum.photos/900?random=6',
            dicussionDetails: {} as Discussion,
        }
    },
    async fetch() {
        const { id } = this.$route.params
        const query = getSpecificDiscussion(id)

        this.dicussionDetails = await this.$axios
            .$post(`${process.env.HTTP_ENDPOINT}`, JSON.stringify({ query }), {
                headers: {
                    'Content-Type': 'application/json',
                    'x-hasura-admin-secret': `${process.env.HASURA_KEY}`,
                },
            })
            .then((res) => res.data.discussions[0])
            .then((discussion) => discussion)
    },
    computed: {
        getAuth() {
            return this.$store.state.users.auth
        },
    },
    methods: {
        convertDate(date: Date) {
            return moment(new Date(date)).calendar()
        },

        toggleModal() {
            this.$store.commit('modals/toggleModal', 'newCommentModal')
        },
    },
})
</script>