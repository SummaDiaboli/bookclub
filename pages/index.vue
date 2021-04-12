<template>
    <div class="min-h-screen mx-36 pt-10">
        <!--Popular Groups-->
        <div>
            <div class="cursor-pointer inline-block">
                <span class="font-bold">Popular Public Clubs</span>
                <FontAwesomeIcon
                    class="ml-2"
                    :icon="['fas', 'chevron-right']"
                />
            </div>

            <div>
                <ul class="inline-flex space-x-5 mt-4">
                    <li v-for="club in clubCards" :key="club.name">
                        <nuxt-link to="#">
                            <group-card
                                :name="club.name"
                                :reading="club.reading"
                            ></group-card>
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
                <ul class="flex space-x-5 mt-4">
                    <li v-for="book in bookCards" :key="book.name">
                        <nuxt-link to="#">
                            <book-card
                                :author="book.author"
                                :name="book.name"
                                :tags="book.tags"
                            ></book-card>
                        </nuxt-link>
                    </li>

                    <div v-for="item in items" :key="item.id">
                        {{ item }}
                    </div>

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
import GroupCard from '~/components/GroupCard.vue'

const clubCards = [
    { name: 'The Ladies Club', reading: 'The Court of Silver Flames' },
    { name: 'Motivators', reading: 'Keep Going! Never Stop!' },
    { name: 'Fantasy Lovers', reading: 'The Name of the Wind' },
]

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
    components: { BookCard, GroupCard },
    data: () => {
        return { clubCards, bookCards }
    },
})
</script>
