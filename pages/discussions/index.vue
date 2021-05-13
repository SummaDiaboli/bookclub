<template>
    <div class="">
        <!-- <div class="col-start-1 col-end-7 row-start-1"> -->
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
            <ul class="flex flex-col gap-4">
                <div v-for="i in 5" :key="i" class="">
                    <li>
                        <div
                            class="bg-white xl:max-h-40 rounded-md shadow-md hover:shadow-lg"
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

                                    <div class="mt-2 line-clamp-4 xl:line-clamp-3">
                                        {{ discussionCard.description }}
                                    </div>
                                </nuxt-link>

                                <!-- Bottom card actions -->
                                <div class="mt-2 relative flex space-x-5">
                                    <!-- Bookmard icon -->
                                    <div v-if="!discussionCard.bookmarked">
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
        <!-- </div> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

const discussionCard = {
    title: 'Why is Brando Sando taking his time to release Skyward 3?',
    tags: ['books', 'novel', 'question'],
    description:
        'Aenean iaculis eros mauris, a dignissim massa suscipit ut. Sed eu pellentesque mauris, ut dignissim nulla. Sed egestas aliquam enim, in tincidunt augue cursus a. Morbi posuere suscipit lorem, vitae rutrum nibh malesuada ac. Nulla vitae rhoncus lorem, a placerat erat. Curabitur leo odio, consectetur ut semper quis, convallis in lectus. Morbi finibus in neque id sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis id molestie turpis. Nam ac velit ut eros mattis maximus. Duis sit amet congue tellus. Nunc quis auctor ante. Ut varius pretium tempus. ',
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