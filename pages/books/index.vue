<template>
    <div>
        <div class="grid grid-cols-8">
            <!-- Main -->
            <div class="col-start-1 col-end-7 row-start-1">
                <span class="font-bold">All Books</span>
                <div v-if="loading">Loading...</div>
                <ul v-else class="flex flex-wrap">
                    <li
                        v-for="book in receivedBooks"
                        :key="book.id"
                        class="mt-4 mx-2"
                    >
                        <nuxt-link :to="`/books/${book.id}`">
                            <book-card
                                :image="book.volumeInfo.imageLinks"
                                :author="book.volumeInfo.authors[0]"
                                :name="book.volumeInfo.title"
                                :tags="book.volumeInfo.categories"
                            />
                        </nuxt-link>
                    </li>
                </ul>
            </div>

            <!-- Sidebar -->
            <div class="col-start-7 col-span-2">
                <span class="font-bold">Upcoming Book Events</span>

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
import BookCard from '~/components/BookCard.vue'

const bookCards = [
    {
        name: 'The Name of the Wind',
        author: 'Patrick Ruthfuss',
        tags: 'Novel, Heroic Fantasy, Adult, Adventure',
    },
    {
        name: 'A Court of Silver Flames',
        author: 'Sarah J. Maas',
        tags: 'Novel, Fantasy, Romance, New Adult, Young, Adult',
    },
    {
        name: 'Before They Are Hanged',
        author: 'Joe Abercrombie',
        tags: 'Novel, Fantasy, Adventure',
    },
    {
        name: 'Red Rising',
        author: 'Pierce Brown',
        tags: 'Novel, Science Fiction, Fantasy, Young Adult, Adventure',
    },
]

export default Vue.extend({
    components: { BookCard },
    data: () => {
        return { bookCards, receivedBooks: [] as any, loading: true }
    },
    head: { title: 'Books' },
    created() {
        fetch(
            'https://www.googleapis.com/books/v1/volumes?q=a&printType=books&orderBy=newest&maxResults=40&projection=full'
        )
            .then((response) => response.json())
            .then((data) => {
                this.receivedBooks.push(data.items)
                this.receivedBooks = this.receivedBooks[0]
            })
            .then(() => {
                // console.log(this.receivedBooks)
                this.loading = false
            })
    },
})
</script>