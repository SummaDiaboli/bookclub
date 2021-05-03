<template>
    <div>
        <!--Popular Clubs-->
        <div cl>
            <div class="cursor-pointer inline-block">
                <span class="font-bold">Popular Public Clubs</span>
                <FontAwesomeIcon
                    class="ml-2"
                    :icon="['fas', 'chevron-right']"
                />
            </div>

            <div>
                <ul
                    class="inline-flex flex-wrap space-y-3 lg:space-y-0 xl:space-x-5 mt-4"
                >
                    <li v-for="club in clubCards" :key="club.name">
                        <nuxt-link to="/clubs/1">
                            <club-card
                                :name="club.name"
                                :reading="club.reading"
                            ></club-card>
                        </nuxt-link>
                    </li>

                    <div class="self-center">
                        <FontAwesomeIcon
                            :icon="['fas', 'chevron-right']"
                            class="cursor-pointer"
                        />
                    </div>
                </ul>
            </div>
        </div>

        <!-- Popular Books -->
        <div class="mt-10">
            <div class="cursor-pointer inline-block">
                <span class="font-bold">Popular Books</span>
                <FontAwesomeIcon
                    class="ml-2"
                    :icon="['fas', 'chevron-right']"
                />
            </div>

            <div>
                <ul
                    class="flex flex-wrap space-y-3 lg:space-y-0 xl:space-x-5 mt-4"
                >
                    <li v-for="book in bookCards" :key="book.name">
                        <nuxt-link to="#">
                            <book-card
                                :author="book.author"
                                :name="book.name"
                                :tags="book.tags"
                            ></book-card>
                        </nuxt-link>
                    </li>

                    <div class="self-center">
                        <FontAwesomeIcon
                            :icon="['fas', 'chevron-right']"
                            class="cursor-pointer"
                        />
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BookCard from '~/components/BookCard.vue'
import ClubCard from '~/components/ClubCard.vue'

const clubCards = [
    { name: 'The Ladies Club', reading: 'The Court of Silver Flames' },
    { name: 'Motivators', reading: 'Keep Going! Never Stop!' },
    { name: 'Fantasy Lovers', reading: 'The Name of the Wind' },
]

const bookCards = [
    {
        name: 'The Name of the Wind',
        author: 'Patrick Ruthfuss',
        tags: ['Novel, Heroic Fantasy, Adult, Adventure'],
    },
    {
        name: 'A Court of Silver Flames',
        author: 'Sarah J. Maas',
        tags: ['Novel, Fantasy, Romance, New Adult, Young, Adult'],
    },
    {
        name: 'Before They Are Hanged',
        author: 'Joe Abercrombie',
        tags: ['Novel, Fantasy, Adventure'],
    },
    {
        name: 'Red Rising',
        author: 'Pierce Brown',
        tags: ['Novel, Science Fiction, Fantasy, Young Adult, Adventure'],
    },
]

export default Vue.extend({
    components: { BookCard, ClubCard },
    data: () => {
        return { clubCards, bookCards }
    },
    head: { title: 'Home' },
    // created: () => {
    //     fetch('/.netlify/functions/getClubs', { method: 'GET' })
    //         .then((response) => response.json())
    //         // eslint-disable-next-line no-console
    //         .then((data) => console.log(data))

    //     // fetch('/.netlify/functions/getClubs', {
    //     //     method: 'POST',
    //     //     body: JSON.stringify({ title: 'Test', complete: true }),
    //     // })
    // },
})
</script>
