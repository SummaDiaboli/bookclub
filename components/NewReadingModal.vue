<template>
    <div v-show="checkModal">
        <div
            class="
                fixed
                top-[20%]
                xl:left-[30%]
                left-[10%]
                xl:min-w-[40%]
                min-w-[80%]
                max-h-[80%]
                z-50
                bg-bookclubnav
                rounded-md
                shadow-md
                overflow-auto
            "
        >
            <div class="flex flex-row-reverse min-w-full justify-between">
                <button
                    class="focus:outline-none mr-3 mt-1"
                    @click="toggleModal"
                >
                    <FontAwesomeIcon :icon="['fas', 'times']" size="lg" />
                </button>
            </div>

            <!-- Form -->
            <div class="flex flex-col justify-center items-center mb-8">
                <h2 class="font-bold text-lg">Create New Reading</h2>

                <form class="md:w-full max-w-lg min-w-full text-sm">
                    <div class="mx-3">
                        <div class="mb-4">
                            <label
                                class="
                                    block
                                    text-gray-700 text-sm
                                    font-bold
                                    mb-2
                                "
                                for="title"
                            >
                                Title
                            </label>

                            <input
                                id="title"
                                v-model="title"
                                class="
                                    appearance-none
                                    block
                                    w-full
                                    bg-gray-200
                                    text-gray-700
                                    border border-gray-200
                                    rounded
                                    py-3
                                    px-4
                                    leading-tight
                                    focus:outline-none
                                    focus:bg-white
                                    focus:border-gray-500
                                "
                                type="text"
                            />
                        </div>

                        <div class="mb-3">
                            <label
                                class="
                                    block
                                    text-gray-700 text-sm
                                    font-bold
                                    mb-2
                                "
                                for="description"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                v-model="description"
                                class="
                                    appearance-none
                                    resize-none
                                    block
                                    w-full
                                    min-h-[10rem]
                                    bg-gray-200
                                    text-gray-700
                                    border border-gray-200
                                    rounded
                                    py-3
                                    px-4
                                    leading-tight
                                    focus:outline-none
                                    focus:bg-white
                                    focus:border-gray-500
                                "
                                type="text"
                            />
                        </div>

                        <div>
                            <label
                                class="
                                    block
                                    text-gray-700 text-sm
                                    font-bold
                                    mb-2
                                "
                                for="datepicker"
                            >
                                Date and Time
                            </label>

                            <Datetime
                                id="datepicker"
                                v-model="datetime"
                                :flow="flow"
                                auto
                                use12-hour
                                type="datetime"
                                input-class="
                                    appearance-none
                                    block
                                    w-full
                                    bg-gray-200
                                    text-gray-700
                                    border border-gray-200
                                    rounded
                                    py-3
                                    px-4
                                    mb-2
                                    leading-tight
                                    focus:outline-none
                                    focus:bg-white
                                    focus:border-gray-500
                                "
                            ></Datetime>
                        </div>

                        <!-- Book Search -->
                        <div class="mb-3">
                            <label
                                class="
                                    block
                                    text-gray-700 text-sm
                                    font-bold
                                    mb-2
                                "
                                for="book"
                            >
                                Book
                            </label>

                            <div id="book" class="flex">
                                <input
                                    v-model="searchText"
                                    type="text"
                                    class="
                                        appearance-none
                                        block
                                        w-full
                                        bg-gray-200
                                        text-gray-700
                                        border border-gray-200
                                        rounded
                                        py-3
                                        px-4
                                        leading-tight
                                        focus:outline-none
                                        focus:bg-white
                                        focus:border-gray-500
                                    "
                                    @keyup.enter="getBooks"
                                />

                                <span class="text-xl pt-2 pl-2">
                                    <FontAwesomeIcon
                                        style="color: rgba(31, 41, 55)"
                                        :icon="['fas', 'search']"
                                        class="cursor-pointer"
                                        @click="getBooks"
                                    ></FontAwesomeIcon>
                                </span>
                            </div>

                            <div
                                class="
                                    relative
                                    xl:absolute
                                    pt-1
                                    lg:w-[100%]
                                    xl:w-[90%]
                                "
                            >
                                <div
                                    class="
                                        rounded-md
                                        shadow-md
                                        w-70
                                        lg:w-full
                                        max-h-52
                                        overflow-auto
                                        bg-white
                                    "
                                >
                                    <div
                                        v-for="book in searchResults"
                                        :key="book.id"
                                        class="
                                            truncate
                                            p-2
                                            flex
                                            items-center
                                            gap-2
                                        "
                                        @click="
                                            addBook(
                                                book.id,
                                                book.volumeInfo.title,
                                                book
                                            )
                                        "
                                    >
                                        <img
                                            :src="
                                                getThumbnail(
                                                    book.volumeInfo.imageLinks
                                                )
                                            "
                                            class="h-10 w-10"
                                        />
                                        <div
                                            class="truncate font-medium text-sm"
                                        >
                                            {{ book.volumeInfo.title }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="md:w-1/3">
                            <button
                                class="
                                    shadow-sm
                                    text-sm
                                    bg-bookclubbutton
                                    hover:bg-bookgray hover:shadow-md
                                    focus:shadow-outline focus:outline-none
                                    font-bold
                                    py-2
                                    px-4
                                    rounded
                                "
                                type="button"
                                @click.prevent="createReading"
                            >
                                <FontAwesomeIcon
                                    v-if="loading"
                                    icon="circle-notch"
                                    spin
                                />

                                <span v-else> Create </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createReading } from '~/queries/readings'
export default Vue.extend({
    data: () => {
        return {
            title: '',
            description: '',
            userId: '',
            loading: false,
            datetime: '',
            flow: ['date', 'time'],
            bookId: '',
            searchText: '',
            searchResults: [] as any[],
        }
    },
    computed: {
        getUser() {
            return this.$store.state.users.user
        },

        checkModal() {
            return this.$store.state.modals.newReadingModal
        },
    },
    methods: {
        toggleModal() {
            this.$store.commit('modals/toggleModal', 'newReadingModal')
        },

        createReading() {
            // console.log(this.datetime)
            if (
                this.title !== '' &&
                this.description !== '' &&
                this.bookId !== '' &&
                this.datetime !== ''
            ) {
                this.loading = true

                const userId = this.getUser?.id
                const query = createReading(
                    userId,
                    this.description,
                    this.title,
                    this.datetime,
                    this.bookId
                )

                this.$axios
                    .$post(
                        `${process.env.HTTP_ENDPOINT}`,
                        JSON.stringify({ query }),
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'x-hasura-admin-secret': `${process.env.HASURA_KEY}`,
                            },
                        }
                    )
                    .then((res) =>
                        // TODO: Show an error when it fails to create discussion
                        {
                            // console.log(res)
                            if (res.data.insert_readings_one) {
                                this.toggleModal()
                                this.$nuxt.refresh()
                            } else {
                                this.creationError()
                            }
                            this.loading = false
                        }
                    )
            }
        },

        creationError() {},

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

        addBook(id, name, _e) {
            this.searchText = name
            this.bookId = id
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