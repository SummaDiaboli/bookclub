<template>
    <div
        :class="{ 'debug-screens': isDev }"
        class="min-h-full font-merriweather bg-bookclubbody text-gray-800"
    >
        <!-- Nav -->
        <div class="md:px-36 bg-bookclubnav h-19 min-w-full">
            <nav class="flex flex-wrap xl:flex-nowrap font-bold text-base">
                <nuxt-link to="/">
                    <div class="pt-1">
                        <img
                            src="~/assets/images/BookClubLogo.svg"
                            alt="BookClub Logo"
                        />
                    </div>
                </nuxt-link>

                <div class="self-center md:ml-40 container pt-2">
                    <ul class="flex space-x-10">
                        <li v-for="link in navLinks" :key="link.name">
                            <nuxt-link
                                :to="link.route"
                                :class="[
                                    $route.name === link.name.toLowerCase()
                                        ? 'border-b-3.5 rounded-sm border-gray-800 pb-2'
                                        : '',
                                ]"
                                class="hover:border-b-3.5 hover:rounded-sm hover:border-gray-600 hover:pb-2"
                                >{{ link.name }}</nuxt-link
                            >
                        </li>
                    </ul>
                </div>

                <input
                    type="text"
                    class="w-3/6 text-sm px-3 mt-2 mr-2 h-9 mx-auto bg-white rounded-2xl flex self-center space-x-4 hover:ring-1 hover:ring-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    placeholder="Books, Authors, Groups..."
                />

                <div class="self-center pt-2">
                    <ul class="flex space-x-6">
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
            </nav>
        </div>

        <!-- Page -->
        <div class="font-alegraya">
            <Nuxt />
        </div>

        <!-- Footer -->
        <footer>
            <div
                class="px-36 mt-10 bg-bookclubnav h-20 min-w-full text-sm pt-7"
            >
                <div class="grid grid-cols-4">
                    <ul class="flex space-x-5">
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

const isDev = process.env.NODE_ENV === 'development'

const navLinks = [
    { name: 'Groups', route: '/groups' },
    { name: 'Books', route: '/books' },
    { name: 'Community', route: '/community' },
    { name: 'Readings', route: '/readings' },
]

const navActions = [
    { name: 'Search', route: '/search', icon: 'search' },
    { name: 'Notifications', route: '/notifications', icon: 'bell' },
    { name: 'Messages', route: '/messages', icon: 'comment-dots' },
    { name: 'Profile', route: '/profile', icon: 'user-circle' },
]

const footerLinks = [
    { name: 'Facebook', icon: 'facebook-square' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Twitter', icon: 'twitter' },
]

export default Vue.extend({
    data: () => {
        return { isDev, navLinks, navActions, footerLinks }
    },
})
</script>
