<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div class="flex flex-wrap lg:flex-row gap-16">
                <div
                    class="lg:w-2/3 flex flex-wrap gap-4 h-84 justify-center xl:justify-start"
                >
                    <div class="bg-bookclubnav h-84 w-52">
                        <img
                            :src="getThumbnail(bookData.volumeInfo.imageLinks)"
                            class="h-84"
                        />
                    </div>

                    <div class="lg:w-3/5">
                        <div class="font-bold text-2xl">
                            {{ bookData.volumeInfo.title }}
                        </div>

                        <div
                            v-for="author in bookData.volumeInfo.authors"
                            :key="author"
                            class="font-semibold mt-2"
                        >
                            <span>{{ author }}</span>
                        </div>

                        <div class="flex flex-wrap gap-1">
                            Tags:
                            <div
                                v-for="genre in bookData.volumeInfo.categories"
                                :key="genre"
                                class="font-light text-gray-500"
                            >
                                {{ genre }},
                            </div>
                        </div>

                        <div
                            class="bg-white rounded-md shadow-md max-h-56 px-2 py-2 text-justify"
                        >
                            <p
                                class="overflow-ellipsis overflow-auto max-h-52 pr-2"
                                v-html="bookData.volumeInfo.description"
                            />
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="invisible xl:visible">
                    <div>
                        <h1 class="font-bold">Recommended Books</h1>
                    </div>

                    <div class="grid grid-cols-2 mt-2 gap-5">
                        <img
                            class="bg-white h-36 w-24 object-cover rounded-sm shadow-sm hover:shadow-md cursor-pointer"
                            src="https://picsum.photos/900?random=1"
                        />
                        <img
                            class="bg-white h-36 w-24 object-cover rounded-sm shadow-sm hover:shadow-md cursor-pointer"
                            src="https://picsum.photos/900?random=2"
                        />
                        <img
                            class="bg-white h-36 w-24 object-cover rounded-sm shadow-sm hover:shadow-md cursor-pointer"
                            src="https://picsum.photos/900?random=3"
                        />
                    </div>
                </div>
            </div>

            <!-- Read by section -->
            <div class="xl:mt-10">
                <div class="font-bold">Currently Read By</div>
                <ul class="flex flex-wrap gap-4">
                    <li v-for="club in clubCards" :key="club.name" class="mt-4">
                        <nuxt-link :to="`/clubs/${club.id}`">
                            <div
                                class="bg-white h-64 w-70 rounded-sm shadow-md hover:shadow-lg"
                            >
                                <div class="">
                                    <img
                                        class="object-cover h-52 min-w-full"
                                        :src="`https://picsum.photos/900?random=${
                                            club.id + 3
                                        }`"
                                    />
                                </div>
                                <div class="min-w-full">
                                    <div
                                        class="pt-2 text-center font-bold text-xl"
                                    >
                                        {{ club.name }}
                                    </div>
                                </div>
                            </div>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <div v-else class="prose">
            <div>Title: {{ bookData.volumeInfo.title }}</div>
            <div>Author: {{ bookData.volumeInfo.authors[0] }}</div>
            <div>Categories: {{ bookData.volumeInfo.categories }}</div>
            <div>
                Description: <span v-html="bookData.volumeInfo.description" />
            </div>
            <div>Language: {{ bookData.volumeInfo.language }}</div>
            <div>Page Count: {{ bookData.volumeInfo.printedPageCount }}</div>
            <div>Published: {{ bookData.volumeInfo.publishedDate }}</div>
        </div> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

const clubCards = [
    { id: 1, name: 'The Ladies Club', reading: 'The Court of Silver Flames' },
    { id: 2, name: 'Motivators', reading: 'Keep Going! Never Stop!' },
    { id: 3, name: 'Fantasy Lovers', reading: 'The Name of the Wind' },
]

export default Vue.extend({
    data: () => {
        return {
            loading: true,
            bookData: [] as any,
            bookThumbnail: 'https://picsum.photos/900?random=1',
            clubCards,
        }
    },
    created() {
        this.$axios
            .$get(
                `https://www.googleapis.com/books/v1/volumes/${this.$route.params.id}`
            )
            .then((data) => {
                this.bookData = data
                // console.log(data)
                this.loading = false
            })
    },
    methods: {
        getThumbnail(image) {
            // console.log(image)
            if (image !== undefined) {
                return image.thumbnail
            } else {
                return 'https://picsum.photos/900?random=1'
            }
        },
    },
})
</script>