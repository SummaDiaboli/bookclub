<template>
    <div>
        <div class="grid grid-cols-8 gap-10">
            <div class="col-start-1 col-end-7 row-start-1">
                <!-- Search -->
                <div class="h-10 container relative w-full">
                    <div class="absolute top-0 right-0">
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
                            class="cursor-pointer py-1 px-2 inline-block shadow-sm font-bold bg-bookclubnav hover:bg-bookclubbutton rounded-md"
                        >
                            Manage
                        </div>
                    </div>
                </div>

                <!-- CardList -->
                <div>
                    <ul class="flex flex-col space-y-4">
                        <div v-for="i in 5" :key="i" class="">
                            <li>
                                <div
                                    class="bg-white h-40 rounded-md shadow-md hover:shadow-lg"
                                >
                                    <div class="px-6 py-2">
                                        <nuxt-link :to="`discussions/${i}`">
                                            <div class="relative">
                                                <div
                                                    class="font-bold text-lg col-span-2"
                                                >
                                                    {{ discussionCard.title }}
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

                                            <div class="mt-2">
                                                {{ discussionCard.description }}
                                            </div>
                                        </nuxt-link>

                                        <!-- Bottom card actions -->
                                        <div
                                            class="mt-2 relative flex space-x-5"
                                        >
                                            <!-- Bookmard icon -->
                                            <div
                                                v-if="
                                                    !discussionCard.bookmarked
                                                "
                                            >
                                                <FontAwesomeIcon
                                                    class="cursor-pointer"
                                                    :icon="['far', 'bookmark']"
                                                    @click="
                                                        prevent
                                                        discussionCard.bookmarked = !discussionCard.bookmarked
                                                    "
                                                />
                                            </div>
                                            <div v-else>
                                                <FontAwesomeIcon
                                                    class="cursor-pointer"
                                                    :icon="['fas', 'bookmark']"
                                                    @click="
                                                        prevent
                                                        discussionCard.bookmarked = !discussionCard.bookmarked
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
                                                class="absolute top-0 right-0 text-sm text-gray-500 space-x-5"
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

            <!-- Sidebar -->
            <div class="col-start-7 col-span-2">
                <span class="font-bold">Popular Discussions</span>

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
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
    data: () => {
        return { discussionCard }
    },
    head: { title: 'Community' },
})
</script>