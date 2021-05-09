<template>
    <div>
        <!-- Discussion -->
        <div class="bg-white max p-5 w-full rounded-sm shadow-md">
            <div class="flex flex-wrap gap-2 items-center">
                <div class="bg-bookclubnav rounded-full h-6 w-6">
                    <img :src="data.creatorPhoto" class="rounded-full h-6" />
                </div>
                <div class="text-sm font-bold">{{ data.creator }}</div>
            </div>

            <div class="text-xl font-bold mt-3">{{ data.title }}</div>
            <div class="mt-2 text-gray-700">{{ data.text }}</div>

            <div class="mt-2 relative flex gap-8">
                <!-- Bookmard icon -->
                <div v-if="!data.bookmarked">
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
                </div>

                <div class="cursor-pointer">
                    <FontAwesomeIcon :icon="['fas', 'share']" />
                    <!-- <span class="text-sm ml-1">Share</span> -->
                </div>

                <!-- Additional information -->
                <div
                    class="absolute top-0 right-0 text-sm text-gray-500 space-x-5"
                >
                    <span>{{ data.replyNum }} replies</span>
                    <span>{{ data.dateCreated }}</span>
                </div>
            </div>
        </div>

        <!-- Comment Section -->
        <div class="mt-4">
            <h1 class="font-bold cursor-pointer inline-block">
                New
                <FontAwesomeIcon :icon="['fas', 'caret-down']" />
            </h1>

            <div class="mt-4">
                <ul class="flex flex-wrap gap-5 flex-col">
                    <li v-for="n in 3" :key="n">
                        <div class="bg-white px-4 py-2 rounded-md shadow-md">
                            <div
                                class="flex flex-wrap xl:flex-row xl:flex-nowrap gap-3"
                            >
                                <!-- <div class="flex flex-wrap gap-2"> -->
                                <div
                                    class="bg-bookclubnav invisible rounded-full xl:h-8 xl:w-32 xl:visible h-0 w-0"
                                >
                                    <img
                                        :src="comment.creatorPhoto"
                                        class="rounded-full"
                                    />
                                </div>

                                <div>
                                    <div class="flex flex-wrap gap-3 xl:gap-0">
                                        <div
                                            class="bg-bookclubnav rounded-full h-5 w-5 visible xl:invisible xl:h-0 xl:w-0"
                                        >
                                            <img
                                                :src="comment.creatorPhoto"
                                                class="rounded-full"
                                            />
                                        </div>
                                        <div
                                            class="text-sm font-bold cursor-pointer inline-flex"
                                        >
                                            {{ comment.creator }}
                                        </div>
                                    </div>
                                    <!-- </div> -->
                                    <div class="text-justify mt-3 md:mt-1">
                                        {{ comment.text }}
                                    </div>

                                    <!-- Card actions -->
                                    <div class="mt-2 relative flex gap-5">
                                        <!-- Bookmard icon -->
                                        <div v-if="!comment.bookmarked">
                                            <FontAwesomeIcon
                                                class="cursor-pointer"
                                                :icon="['far', 'bookmark']"
                                                @click="
                                                    prevent
                                                    comment.bookmarked = !comment.bookmarked
                                                "
                                            />
                                        </div>
                                        <div v-else>
                                            <FontAwesomeIcon
                                                class="cursor-pointer"
                                                :icon="['fas', 'bookmark']"
                                                @click="
                                                    prevent
                                                    comment.bookmarked = !comment.bookmarked
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
                                            <span>{{
                                                comment.dateCreated
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
import Vue from 'vue'

const data = {
    title: 'Why is Brando Sando taking his time to release Skyward 3?',
    creator: 'Salim Hussaini',
    creatorPhoto: 'https://picsum.photos/900?random=6',
    tags: ['books', 'novel', 'question'],
    text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque viverra venenatis ac diam semper porttitor. Bibendum amet, fermentum a dui. Suspendisse lectus massa integer tristique volutpat ornare sapien. Interdum est non lobortis nibh aliquam sagittis leo. Aliquet amet volutpat porttitor mauris semper eu vitae pharetra at. Odio facilisi nulla arcu viverra id scelerisque. Mauris phasellus at condimentum amet lectus aliquet donec mi habitasse. Sit a commodo, laoreet vitae velit, ultrices. Nibh cras eu rhoncus leo nulla auctor elementum. Turpis ridiculus sed proin faucibus. Faucibus ut cursus libero risus vulputate gravida volutpat. Et pellentesque placerat a eu sodales erat at lectus integer. In diam nisl, urna mi sodales elit sodales velit. Fames faucibus fames hendrerit risus ac adipiscing mi. Vulputate amet ac odio aliquam ullamcorper id arcu in. Sed sapien viverra tristique nascetur molestie orci. Ipsum, diam neque nec sem cras ipsum varius. Tincidunt scelerisque suspendisse accumsan augue. Mi pellentesque iaculis felis dictum vulputate posuere. Arcu congue vestibulum fusce condimentum dignissim morbi laoreet.',
    bookmarked: false,
    replyNum: '10k+',
    dateCreated: 'Tue 3rd March, 2021',
}

const comment = {
    creator: 'Esther Ikpeme',
    creatorPhoto: 'https://picsum.photos/900?random=7',
    text:
        'Maecenas diam tincidunt urna adipiscing adipiscing neque, in. Sed non malesuada mattis commodo. Proin sollicitudin posuere platea ultrices amet egestas. Tellus integer platea est et. Sit ipsum in lobortis sit tellus. Tincidunt a ultrices massa eu eget blandit donec nam. Felis id bibendum ipsum tortor ut. Sed eget pulvinar integer enim nunc cras. Leo suspendisse nam ultrices turpis curabitur ultrices diam. Sapien quam pretium mattis tempor tincidunt quis nulla. Viverra faucibus ac orci malesuada sed fermentum in amet. Amet, cursus eget posuere odio nulla turpis vitae. Integer sit netus vulputate dolor, accumsan aliquam lacus massa blandit. Vel eu vitae pellentesque accumsan.',
    bookmarked: false,
    dateCreated: 'Tue 3rd March, 2021',
    replies: 4,
}

export default Vue.extend({
    data: () => {
        return {
            data,
            comment,
        }
    },
})
</script>