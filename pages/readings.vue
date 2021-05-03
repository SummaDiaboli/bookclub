<template>
    <div>
        <div class="grid grid-cols-8 gap-10">
            <div class="col-start-1 col-end-7 row-start-1">
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
                            class="cursor-pointer py-1 px-2 inline-block shadow-sm font-bold bg-bookclubnav hover:shadow-md rounded-md"
                        >
                            Manage
                        </div>
                    </div>
                </div>

                <!-- CardList -->
                <div>
                    <ul class="flex flex-col space-y-4">
                        <div v-for="i in 5" :key="i">
                            <li>
                                <div class="bg-white h-48 rounded-md shadow-md hover:shadow-lg">
                                    <div class="px-6 py-2">
                                        <nuxt-link to="#">
                                            <div class="relative">
                                                <h1
                                                    class="font-bold text-lg col-span-2"
                                                >
                                                    {{ readings.title }}
                                                </h1>
                                            </div>

                                            <div class="mt-2">
                                                {{ readings.description }}
                                            </div>

                                            <div>Date: {{ readings.date }}</div>

                                            <div>Time: {{ readings.time }}</div>
                                        </nuxt-link>

                                        <!-- Bottom card actions -->
                                        <div
                                            class="mt-2 relative flex space-x-5"
                                        >
                                            <!-- Buttons -->
                                            <div
                                                class="bg-bookclubnav rounded cursor-pointer hover:bg-bookclubbutton"
                                            >
                                                <span
                                                    class="inline-block mx-2 my-1 text-sm"
                                                    >View Book</span
                                                >
                                            </div>

                                            <div
                                                class="bg-bookclubnav rounded cursor-pointer hover:bg-bookclubbutton"
                                            >
                                                <span
                                                    class="inline-block mx-2 my-1 text-sm"
                                                    >Add to Schedule</span
                                                >
                                            </div>

                                            <!-- Additional information -->
                                            <div
                                                class="absolute top-0 right-0 text-sm text-gray-500 space-x-5"
                                            >
                                                <span
                                                    >{{
                                                        readings.replies
                                                    }}
                                                    replies</span
                                                >
                                                <span>{{
                                                    readings.created
                                                }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="col-start-7 col-span-2">
                <h1 class="font-bold">Popular Reading Events</h1>

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

const readings = {
    title: 'Join Brandon Snaderson as he reads his manuscript of Skyward 3',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas lacus risus. Aliquam erat volutpat. Maecenas nec porttitor metus. ',
    date: '02/03/2021',
    time: '02:25 PST',
    created: 'Tue 3rd March, 2021',
    replies: '10k+ replies',
}

export default Vue.extend({
    data: () => {
        return { readings }
    },
    head: {
        title: 'Readings',
    },
})
</script>