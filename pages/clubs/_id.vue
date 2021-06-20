<template>
    <div>
        <!-- Banner -->
        <div class="w-full -mt-10">
            <img
                src="https://picsum.photos/900"
                class="object-cover h-64 min-w-full bg-bookclubnav"
            />

            <div class="bg-white xl:h-16 shadow-md">
                <div
                    class="
                        flex flex-col
                        gap-1
                        xl:flex-row xl:gap-32
                        justify-center
                        h-full
                        items-center
                    "
                >
                    <span class="text-md text-bookgray">
                        <div v-if="$fetchState.pending">
                            Currently reading: ...
                        </div>
                        <div v-else-if="$fetchState.error">
                            Currently reading:
                        </div>
                        <div v-else>
                            Currently reading: {{ clubDetails.reading }}
                        </div>
                    </span>
                    <span class="font-medium text-2xl">
                        <div v-if="$fetchState.pending">...</div>
                        <div v-else-if="$fetchState.error">--</div>
                        <div v-else>{{ clubDetails.name }}</div>
                    </span>

                    <span class="text-md text-bookgray">
                        <div v-if="$fetchState.pending">- members</div>
                        <div v-else-if="$fetchState.error">- members</div>
                        <div v-else>
                            {{ clubDetails.members }} member{{
                                clubDetails.members > 1 ? 's' : ''
                            }}
                        </div>
                    </span>
                    <!-- <span class="text-md text-bookgray">- online</span> -->
                </div>
            </div>
        </div>

        <!-- About Section -->
        <div class="flex flex-col xl:flex-row gap-16">
            <div class="xl:w-2/3">
                <div class="mt-10">
                    <div class="flex justify-between items-center">
                        <h1 class="font-bold">About us</h1>
                        <button
                            class="
                                bg-bookclubnav
                                rounded-lg
                                text-md
                                font-light
                                px-2
                                shadow-sm
                                hover:shadow-md
                                focus:outline-none
                            "
                        >
                            Join Group
                        </button>
                    </div>

                    <div
                        class="
                            bg-white
                            rounded-md
                            shadow-md
                            mt-2
                            px-2
                            py-2
                            min-h-[2rem]
                        "
                    >
                        <div v-if="$fetchState.pending">...</div>
                        <div v-else-if="$fetchState.error"></div>
                        <div v-else>{{ clubDetails.about }}</div>
                    </div>
                </div>

                <!-- Forum content -->
                <div class="mt-8">
                    <div>
                        <h1 class="font-bold cursor-pointer">
                            Discussions
                            <FontAwesomeIcon :icon="['fas', 'caret-down']" />
                        </h1>
                    </div>

                    <!-- CardList -->
                    <div class="mt-2">
                        <ul class="flex flex-col space-y-4">
                            <div v-for="i in 3" :key="i" class="">
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
                                                :to="`/discussions/${i}`"
                                            >
                                                <div class="relative">
                                                    <div
                                                        class="
                                                            font-bold
                                                            text-lg
                                                            col-span-2
                                                        "
                                                    >
                                                        {{
                                                            discussionCard.title
                                                        }}
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
                                                    {{
                                                        discussionCard.description
                                                    }}
                                                </div>
                                            </nuxt-link>

                                            <!-- Bottom card actions -->
                                            <div
                                                class="
                                                    mt-2
                                                    relative
                                                    flex
                                                    space-x-5
                                                "
                                            >
                                                <!-- Bookmard icon -->
                                                <div
                                                    v-if="
                                                        !discussionCard.bookmarked
                                                    "
                                                >
                                                    <FontAwesomeIcon
                                                        class="cursor-pointer"
                                                        :icon="[
                                                            'far',
                                                            'bookmark',
                                                        ]"
                                                        @click="
                                                            prevent
                                                            discussionCard.bookmarked =
                                                                !discussionCard.bookmarked
                                                        "
                                                    />
                                                </div>
                                                <div v-else>
                                                    <FontAwesomeIcon
                                                        class="cursor-pointer"
                                                        :icon="[
                                                            'fas',
                                                            'bookmark',
                                                        ]"
                                                        @click="
                                                            prevent
                                                            discussionCard.bookmarked =
                                                                !discussionCard.bookmarked
                                                        "
                                                    />
                                                </div>

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
                                                    <span
                                                        >{{
                                                            discussionCard.replyNum
                                                        }}
                                                        replies</span
                                                    >
                                                    <span>{{
                                                        discussionCard.dateCreated
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
            </div>

            <!-- Sidebar -->
            <div class="xl:mt-10 -mt-10">
                <div>
                    <h1 class="font-bold">Previously Read Books</h1>
                </div>

                <div class="grid grid-cols-2 mt-2 gap-5">
                    <img
                        class="
                            bg-white
                            h-36
                            w-24
                            object-cover
                            rounded-sm
                            shadow-sm
                            hover:shadow-md
                            cursor-pointer
                        "
                        src="https://picsum.photos/900?random=1"
                    />
                    <img
                        class="
                            bg-white
                            h-36
                            w-24
                            object-cover
                            rounded-sm
                            shadow-sm
                            hover:shadow-md
                            cursor-pointer
                        "
                        src="https://picsum.photos/900?random=2"
                    />
                    <img
                        class="
                            bg-white
                            h-36
                            w-24
                            object-cover
                            rounded-sm
                            shadow-sm
                            hover:shadow-md
                            cursor-pointer
                        "
                        src="https://picsum.photos/900?random=3"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getClub, getClubMembersCount } from '~/queries/clubs'
const discussionCard = {
    title: 'Why is Brando Sando taking his time to release Skyward 3?',
    tags: ['books', 'novel', 'question'],
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas lacus risus. Aliquam erat volutpat. Maecenas nec porttitor metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vitae ligula lacus. Proin lacus diam, sodales blandit ex eu, tincidunt pulvinar purus...',
    bookmarked: false,
    replyNum: '10k+',
    dateCreated: 'Tue 3rd March, 2021',
}

export default Vue.extend({
    data: (): { discussionCard: any; clubDetails: {} | void } => {
        return { discussionCard, clubDetails: {} }
    },
    async fetch() {
        const { id } = this.$route.params
        const getClubQuery = getClub(id)
        const getClubMembers = getClubMembersCount(id)

        this.clubDetails = await this.$axios
            .$post(
                `${process.env.HTTP_ENDPOINT}`,
                JSON.stringify({ query: getClubQuery }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-hasura-admin-secret': `${process.env.HASURA_KEY}`,
                    },
                }
            )
            .then((res) => res.data.clubs[0])
            .then((club) => club)

        // eslint-disable-next-line dot-notation
        this.clubDetails['members'] = await this.$axios
            .$post(
                `${process.env.HTTP_ENDPOINT}`,
                JSON.stringify({ query: getClubMembers }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-hasura-admin-secret': `${process.env.HASURA_KEY}`,
                    },
                }
            )
            .then((res) => res.data.club_member_aggregate.aggregate.count)
    },
})
</script>