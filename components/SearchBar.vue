<template>
    <div v-click-outside="clearSearch" class="xl:pr-6">
        <div class="flex">
            <input
                v-model="searchText"
                type="text"
                class="
                    w-70
                    text-sm
                    px-3
                    mt-1
                    mr-2
                    h-9
                    mx-auto
                    bg-white
                    rounded-2xl
                    flex
                    space-x-4
                    hover:ring-1 hover:ring-gray-500
                    focus:outline-none focus:ring-1 focus:ring-gray-500
                "
                placeholder="Books, Authors, Clubs..."
                @keyup.enter="getBooks"
            />

            <span class="text-xl pt-2">
                <FontAwesomeIcon
                    style="color: rgba(31, 41, 55)"
                    :icon="['fas', 'search']"
                    class="cursor-pointer"
                    @click="getBooks"
                ></FontAwesomeIcon>
            </span>
        </div>

        <div class="relative xl:absolute pt-1">
            <div
                class="
                    rounded-md
                    shadow-md
                    w-70
                    max-h-52
                    overflow-auto
                    bg-white
                "
            >
                <div
                    v-for="book in searchResults"
                    :key="book.id"
                    class="truncate p-2 flex items-center gap-2"
                    @click="gotoBook(book.id)"
                >
                    <img
                        :src="getThumbnail(book.volumeInfo.imageLinks)"
                        class="h-10 w-10"
                    />
                    <div class="truncate font-medium text-sm">
                        {{ book.volumeInfo.title }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ClickOutside from 'vue-click-outside'

export default Vue.extend({
    directives: {
        ClickOutside,
    },
    data: () => {
        return {
            searchText: '',
            searchResults: [] as any[],
        }
    },
    methods: {
        async getBooks(_e) {
            // console.log(this.searchText)
            if (this.searchText !== '') {
                await this.$axios
                    .$get(
                        `https://www.googleapis.com/books/v1/volumes?q=${this.searchText}&printType=books&orderBy=relevance&maxResults=10&projection=lite`
                    )
                    .then((data) => {
                        this.searchResults = []
                        this.searchResults.push(data.items)
                        this.searchResults = this.searchResults[0]
                    })
                // .then(() => console.log(this.searchResults))
            }
        },
        gotoBook(id, _e) {
            this.$router.push(`/books/${id}`)
            this.searchText = ''
            this.searchResults = []
        },
        getThumbnail(image) {
            let bookThumbnail
            if (image !== undefined) {
                bookThumbnail = image.thumbnail
            } else {
                bookThumbnail = 'https://picsum.photos/900?random=1'
            }
            return bookThumbnail
        },
        clearSearch(_e) {
            this.searchResults = []
        },
    },
})
</script>