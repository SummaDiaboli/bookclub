<template>
    <div class="min-h-screen mx-36 pt-10">
        <div class="grid grid-cols-8">
            <!-- Main -->
            <div class="col-start-1 col-end-7 row-start-1">
                <span class="font-bold">All Books</span>
                <ul class="flex flex-wrap space-x-4">
                    <div v-for="n in 4" :key="n">
                        <li
                            v-for="book in bookCards"
                            :key="book.name"
                            class="mt-4"
                        >
                            <nuxt-link to="#">
                                <book-card
                                    :author="book.author"
                                    :name="book.name"
                                    :tags="book.tags"
                                />
                            </nuxt-link>
                        </li>
                    </div>
                </ul>
            </div>

            <!-- Sidebar -->
            <div class="col-start-7 col-span-2">
                <span class="font-bold">Upcoming Book Events</span>

                <div class="bg-white h-72 mt-4">
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
        return { bookCards }
    },
    head: { title: 'Books' },
})
</script>