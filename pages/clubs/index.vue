<template>
    <div>
        <div class="grid grid-cols-8">
            <div class="col-start-1 col-end-7 row-start-1">
                <span class="font-bold">All Clubs</span>
                <ul class="flex flex-wrap gap-4">
                    <div v-for="n in 3" :key="n">
                        <li
                            v-for="club in clubCards"
                            :key="club.name"
                            class="mt-4"
                        >
                            <nuxt-link :to="`/clubs/${n}`">
                                <club-card
                                    :name="club.name"
                                    :reading="club.reading"
                                />
                            </nuxt-link>
                        </li>
                    </div>
                </ul>
            </div>

            <div class="col-start-7 col-span-2 invisible xl:visible">
                <span class="font-bold">Upcoming Club Events</span>

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
import ClubCard from '~/components/ClubCard.vue'

const clubCards = [
    { name: 'The Ladies Club', reading: 'The Court of Silver Flames' },
    { name: 'Motivators', reading: 'Keep Going! Never Stop!' },
    { name: 'Fantasy Lovers', reading: 'The Name of the Wind' },
]

export default Vue.extend({
    components: { ClubCard },
    data: () => {
        return { clubCards }
    },
    head: { title: 'Groups' },
})
</script>