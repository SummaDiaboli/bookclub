<template>
    <div
        :class="{ 'debug-screens': isDev }"
        class="min-h-full font-merriweather bg-bookclubbody text-gray-800"
    >
        <!-- Nav -->
        <div
            class="
                xl:px-28
                2xl:px-36
                bg-bookclubnav
                h-24
                xl:h-19
                min-w-full
                sticky
                top-0
                z-50
            "
        >
            <nav
                v-click-outside="
                    () => {
                        mobileMenuOpen = false
                    }
                "
                class="
                    flex flex-wrap
                    xl:flex-nowrap
                    font-bold
                    text-base
                    items-center
                    justify-between
                "
            >
                <nuxt-link to="/">
                    <!-- <div class="xl:pt-1"> -->
                    <img
                        src="~/assets/images/BookClubLogo.svg"
                        alt="BookClub Logo"
                        class="h-20 xl:h-16 xl:pt-1 ml-2 xl:ml-0 static"
                    />
                    <!-- </div> -->
                </nuxt-link>

                <button
                    class="
                        inline-block
                        xl:hidden
                        w-8
                        h-8
                        pt-1
                        mr-10
                        xl:mr-0
                        focus:outline-none
                    "
                    @click="
                        () => {
                            mobileMenuOpen = !mobileMenuOpen
                        }
                    "
                >
                    <FontAwesomeIcon :icon="['fas', 'bars']" size="2x" />
                </button>

                <div
                    class="
                        xl:relative
                        top-16
                        left-0
                        pb-3
                        xl:pb-0 xl:top-0
                        justify-center
                        xl:flex
                        w-screen
                        flex-col
                        xl:flex-row
                        items-center
                        bg-bookclubnav
                        xl:bg-none
                    "
                    :class="{ flex: mobileMenuOpen, hidden: !mobileMenuOpen }"
                >
                    <div class="xl:mx-20 xl:mr-40 xl:pt-2 pb-6 xl:pb-0">
                        <ul
                            class="
                                flex flex-col
                                xl:flex-row
                                gap-5
                                xl:gap-10
                                items-center
                            "
                        >
                            <li v-for="link in navLinks" :key="link.name">
                                <nuxt-link
                                    :to="link.route"
                                    :class="[
                                        $route.fullPath.includes(link.route)
                                            ? 'border-b-3.5 rounded-sm border-gray-600 pb-2'
                                            : '',
                                    ]"
                                    class="
                                        hover:border-b-3.5
                                        hover:rounded-sm
                                        hover:border-gray-500
                                        hover:pb-2
                                    "
                                    >{{ link.name }}</nuxt-link
                                >
                            </li>
                        </ul>
                    </div>

                    <!-- Searchbar -->
                    <search-bar />

                    <div class="mt-5 xl:mt-0 xl:pt-1">
                        <ul class="flex flex-row gap-10 xl:gap-8 items-center">
                            <!-- <li v-for="action in navActions" :key="action.name">
                                <nuxt-link :to="action.route">
                                <span class="text-xl">
                                    <FontAwesomeIcon
                                        style="color: rgba(31, 41, 55)"
                                        :icon="['fas', action.icon]"
                                        @click="
                                            () => handleNavClick(action.name)
                                        "
                                    ></FontAwesomeIcon>
                                </span>
                                </nuxt-link>
                            </li> -->
                            <li>
                                <div
                                    v-if="getUser"
                                    class="text-xl flex cursor-pointer"
                                >
                                    <!-- <FontAwesomeIcon
                                        class="cursor-pointer"
                                        style="color: rgba(31, 41, 55)"
                                        :icon="['fas', 'user-circle']"
                                    /> -->
                                    <div
                                        class="
                                            text-sm
                                            border-2 border-gray-800
                                            rounded-md
                                            p-2
                                            cursor-pointer
                                            hover:text-white hover:bg-gray-800
                                        "
                                    >
                                        {{ `Hello, ${getUser['firstname']}` }}
                                    </div>
                                </div>

                                <span v-else class="text-sm">
                                    <div
                                        class="
                                            border-2
                                            rounded-md
                                            border-gray-800
                                            p-2
                                            cursor-pointer
                                            hover:text-white hover:bg-gray-800
                                        "
                                        @click="() => handleNavClick('Profile')"
                                    >
                                        Log In
                                    </div>
                                </span>
                            </li>
                            <!-- <div v-if="user">Here</div> -->
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Sign-up modal -->
        <div v-show="checkModal">
            <div
                class="
                    fixed
                    top-[20%]
                    xl:left-[30%] xl:min-w-[40%]
                    min-w-full
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

                <login-form />
            </div>
        </div>

        <!-- <login-modal v-show="showLogin" /> -->
        <!-- Page -->
        <div class="font-alegraya min-h-screen lg:mx-36 pt-10 px-5 lg:px-0">
            <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
        </div>

        <!-- Footer -->
        <footer>
            <div
                class="
                    px-4
                    xl:px-36
                    mt-10
                    bg-bookclubnav
                    lg:h-20
                    min-w-full
                    text-xs
                    xl:text-sm
                    pt-2
                    lg:pt-7
                "
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
import ClickOutside from 'vue-click-outside'
import SearchBar from '~/components/SearchBar.vue'
import LoginForm from '~/components/LoginForm.vue'
// import {getUsers} from '~/queries/users'

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
    // { name: 'Profile', route: '/profile', icon: 'user-circle' },
]

const footerLinks = [
    { name: 'Facebook', icon: 'facebook-square' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Twitter', icon: 'twitter' },
]

// const fetchBooks = () => {}

// const query = (user: string, firstname: string) => {
//     return `
//     {
//         ${user} {
//             ${firstname}
//             lastname
//             email
//             discussions {
//                 id
//                 created_at
//                 comments {
//                     id
//                 }
//                 title
//                 text
//             }
//         }
//     }
// `
// }

export default Vue.extend({
    directives: {
        ClickOutside,
    },
    components: {
        SearchBar,
        LoginForm,
    },
    data: () => {
        return {
            isDev,
            navLinks,
            navActions,
            footerLinks,
            mobileMenuOpen: false,
            showLogin: false,
            user: {},
        }
    },
    computed: {
        getUser() {
            return this.$store.state.users.user
        },

        checkModal() {
            return this.$store.state.modals.loginModal
        },
    },
    created() {
        this.user = this.$cookies.get('user')
        this.$store.commit('users/login', this.user)
    },
    methods: {
        toggleModal() {
            this.$store.commit('modals/toggleModal', 'loginModal')
            // if (this.showLogin === true) {
            //     this.showLogin = false
            // }
        },

        handleNavClick(action) {
            switch (action) {
                case navActions[0].name:
                    break

                case navActions[1].name:
                    break

                case 'Profile':
                    // console.log('here')
                    this.$store.commit('modals/toggleModal', 'loginModal')
                    break

                default:
                    break
            }
        },
    },
})
</script>
