<template>
    <div
        :class="{ 'debug-screens': isDev }"
        class="min-h-full font-merriweather bg-bookclubbody text-gray-800"
    >
        <!-- Nav -->
        <div
            class="xl:px-28 2xl:px-36 bg-bookclubnav h-19 min-w-full sticky top-0 z-50"
        >
            <nav class="flex flex-wrap xl:flex-nowrap font-bold text-base">
                <nuxt-link to="/">
                    <!-- <div class="xl:pt-1"> -->
                    <img
                        src="~/assets/images/BookClubLogo.svg"
                        alt="BookClub Logo"
                        class="h-20 xl:h-16 xl:pt-1"
                    />
                    <!-- </div> -->
                </nuxt-link>

                <div class="self-center flex flex-wrap">
                    <div class="xl:mx-20 xl:mr-40 xl:pt-2">
                        <ul class="flex flex-wrap space-x-10">
                            <li v-for="link in navLinks" :key="link.name">
                                <nuxt-link
                                    :to="link.route"
                                    :class="[
                                        $route.fullPath.includes(link.route)
                                            ? 'border-b-3.5 rounded-sm border-gray-600 pb-2'
                                            : '',
                                    ]"
                                    class="hover:border-b-3.5 hover:rounded-sm hover:border-gray-500 hover:pb-2"
                                    >{{ link.name }}</nuxt-link
                                >
                            </li>
                        </ul>
                    </div>

                    <!-- Searchbar -->
                    <search-bar />

                    <div class="pt-2">
                        <ul class="flex gap-8">
                            <li v-for="action in navActions" :key="action.name">
                                <nuxt-link :to="action.route">
                                    <span class="text-xl">
                                        <FontAwesomeIcon
                                            style="color: rgba(31, 41, 55)"
                                            :icon="['fas', action.icon]"
                                        ></FontAwesomeIcon>
                                    </span>
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Page -->
        <div class="font-alegraya min-h-screen lg:mx-36 pt-10 px-5 lg:px-0">
            <Nuxt />
        </div>

        <!-- Footer -->
        <footer>
            <div
                class="px-4 xl:px-36 mt-10 bg-bookclubnav lg:h-20 min-w-full text-xs xl:text-sm pt-2 lg:pt-7"
            >
                <div class="grid grid-cols-4">
                    <ul class="flex flex-wrap lg:space-x-5">
                        <li v-for="link in footerLinks" :key="link.name">
                            <nuxt-link to="#">
                                <FontAwesomeIcon :icon="['fab', link.icon]" />
                                <span>{{ link.name }}</span>
                            </nuxt-link>
                        </li>
                    </ul>

                    <span class="col-start-4 text-gray-500 text-xs"
                        >Copyright&copy; 2021 BookClub. All Rights
                        Reserved</span
                    >
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchBar from '~/components/SearchBar.vue'

const isDev = process.env.NODE_ENV === 'development'

const navLinks = [
    { name: 'Clubs', route: '/clubs' },
    { name: 'Books', route: '/books' },
    { name: 'Discussions', route: '/discussions' },
    { name: 'Readings', route: '/readings' },
]

const navActions = [
    // { name: 'Search', route: '/search', icon: 'search' },
    { name: 'Notifications', route: '/notifications', icon: 'bell' },
    { name: 'Messages', route: '/messages', icon: 'comment-dots' },
    { name: 'Profile', route: '/profile', icon: 'user-circle' },
]

const footerLinks = [
    { name: 'Facebook', icon: 'facebook-square' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Twitter', icon: 'twitter' },
]

// const fetchBooks = () => {}

export default Vue.extend({
    components: {
        SearchBar,
    },
    data: () => {
        return {
            isDev,
            navLinks,
            navActions,
            footerLinks,
        }
    },
    // created() {
    //     this.$router.replace('/')
    // },
})
</script>
