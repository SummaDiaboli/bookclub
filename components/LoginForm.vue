<template>
    <div>
        <!-- Login Form -->
        <div
            v-show="formType === 'login'"
            class="flex flex-col justify-center items-center mb-8"
        >
            <h2 class="font-bold text-lg">Login</h2>
            <form class="md:w-full max-w-lg text-sm min-w-full">
                <div class="mx-3">
                    <div class="mb-4">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="login-email"
                        >
                            Email
                        </label>
                        <input
                            id="login-email"
                            v-model="login.email"
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
                            type="email"
                            placeholder="janedoe@email.com"
                        />
                    </div>

                    <div class="mb-3">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="login-password"
                        >
                            Password

                            <FontAwesomeIcon
                                :icon="['fas', 'eye']"
                                class="cursor-pointer"
                                @click="changeLoginPasswordVisible"
                            />
                        </label>
                        <input
                            id="login-password"
                            v-model="login.password"
                            :class="{
                                'border-red-500 mb-3': emptyFirstNameError,
                            }"
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
                            :type="showLoginPassword ? 'text' : 'password'"
                            placeholder="******************"
                        />
                        <p
                            v-show="emptyPasswordError"
                            class="text-red-500 text-xs italic"
                        >
                            Please choose a password.
                        </p>
                    </div>

                    <div class="mb-3">
                        <a
                            class="
                                inline-block
                                align-baseline
                                font-bold
                                text-sm text-gray-600
                                hover:text-gray-800
                            "
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <div
                        class="
                            flex flex-col
                            gap-4
                            md:flex-row md:gap-0
                            items-center
                            justify-between
                        "
                    >
                        <!-- <div class="md:w-1/3"></div> -->
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
                                @click.prevent="loginUser"
                            >
                                <FontAwesomeIcon
                                    v-if="loading"
                                    icon="circle-notch"
                                    spin
                                />

                                <span v-else> Log In </span>
                            </button>
                        </div>
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
                            @click.prevent="formType = 'signup'"
                        >
                            Don't Have An Account?
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <!-- Signup Form -->
        <div
            v-show="formType === 'signup'"
            class="flex flex-col justify-center items-center mb-8"
        >
            <!-- <h2>Login</h2> -->
            <h2 class="font-bold text-lg">Sign Up</h2>
            <div class="mt-5">
                <form class="md:w-full md:max-w-lg text-sm">
                    <div class="flex flex-wrap md:-mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                class="
                                    block
                                    tracking-wide
                                    text-gray-700
                                    font-bold
                                    mb-2
                                "
                                for="first-name"
                            >
                                First Name
                            </label>
                            <input
                                id="first-name"
                                v-model="signUp.firstName"
                                :class="{
                                    'border-red-500 mb-3': emptyFirstNameError,
                                }"
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
                                placeholder="Jane"
                            />
                            <p
                                v-show="emptyFirstNameError"
                                class="text-red-500 text-xs italic"
                            >
                                Please fill out this field.
                            </p>
                        </div>

                        <div class="w-full md:w-1/2 px-3">
                            <label
                                class="
                                    block
                                    tracking-wide
                                    text-gray-700
                                    font-bold
                                    mb-2
                                "
                                for="last-name"
                            >
                                Last Name
                            </label>
                            <input
                                id="last-name"
                                v-model="signUp.lastName"
                                :class="{
                                    'border-red-500 mb-3': emptyLastNameError,
                                }"
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
                                placeholder="Doe"
                            />
                            <p
                                v-show="emptyLastNameError"
                                class="text-red-500 text-xs italic"
                            >
                                Please fill out this field.
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-wrap md:-mx-3 mb-6">
                        <div class="w-full px-3">
                            <label
                                class="
                                    block
                                    tracking-wide
                                    text-gray-700
                                    font-bold
                                    mb-2
                                "
                                for="signup-email"
                            >
                                Email
                            </label>
                            <input
                                id="signup-email"
                                v-model="signUp.email"
                                :class="{
                                    'border-red-500 mb-3': invalidEmailError,
                                }"
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
                                    mb-3
                                    leading-tight
                                    focus:outline-none
                                    focus:bg-white
                                    focus:border-gray-500
                                "
                                type="email"
                                placeholder="janedoe@email.com"
                            />
                            <p
                                v-show="invalidEmailError"
                                class="text-red-500 text-xs italic"
                            >
                                Please fill out this field.
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-wrap md:-mx-3 mb-6">
                        <div class="w-full px-3">
                            <label
                                class="
                                    block
                                    tracking-wide
                                    text-gray-700
                                    font-bold
                                    mb-2
                                "
                                for="signup-password"
                            >
                                Password

                                <FontAwesomeIcon
                                    :icon="['fas', 'eye']"
                                    class="cursor-pointer"
                                    @click="changeSignupPasswordVisible"
                                />
                            </label>
                            <input
                                id="signup-password"
                                v-model="signUp.password"
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
                                    mb-3
                                    leading-tight
                                    focus:outline-none
                                    focus:bg-white
                                    focus:border-gray-500
                                "
                                :type="showSignupPassword ? 'text' : 'password'"
                                placeholder="******************"
                            />
                            <p class="text-gray-600 text-xs italic">
                                At least 8 characters
                            </p>
                        </div>
                    </div>

                    <div
                        class="
                            flex flex-col
                            gap-4
                            md:flex-row
                            xl:gap-0
                            items-center
                            justify-between
                        "
                    >
                        <!-- <div class="md:w-1/3"></div> -->
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
                                @click.prevent="signUpUser"
                            >
                                <FontAwesomeIcon
                                    v-if="loading"
                                    icon="circle-notch"
                                    spin
                                />

                                <span v-else> Sign Up </span>
                            </button>
                        </div>
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
                            @click.prevent="formType = 'login'"
                        >
                            Already Have An Account?
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import ClickOutside from 'vue-click-outside'
import { signUpUser, loginUser } from '~/queries/users'

export default Vue.extend({
    data: () => {
        return {
            formType: 'login',
            emptyFirstNameError: false,
            emptyLastNameError: false,
            emptyPasswordError: false,
            invalidEmailError: false,
            showLoginPassword: false,
            showSignupPassword: false,
            signUp: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            },
            login: {
                email: '',
                password: '',
            },
            loading: false,
        }
    },
    methods: {
        changeLoginPasswordVisible() {
            this.showLoginPassword = !this.showLoginPassword
        },

        changeSignupPasswordVisible() {
            this.showSignupPassword = !this.showSignupPassword
        },

        signUpUser() {
            if (
                this.signUp.firstName !== '' &&
                this.signUp.lastName !== '' &&
                this.signUp.email !== '' &&
                this.signUp.password !== ''
            ) {
                this.loading = true
                const query = signUpUser(
                    this.signUp.firstName,
                    this.signUp.lastName,
                    this.signUp.password,
                    this.signUp.email
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
                    .then(
                        (res) =>
                            // console.log(res)
                            res.data
                    )
                    .then((data) => {
                        this.loading = false
                        if (data.insert_users.returning.length > 0) {
                            this.$store.commit(
                                'users/login',
                                data.insert_users.returning[0]
                            )
                            this.$cookies.set(
                                'user',
                                data.insert_users.returning[0]
                            )
                            this.$store.commit(
                                'modals/toggleModal',
                                'loginModal'
                            )
                        } else {
                            console.log('Could not Sign up user')
                        }
                        // console.log(data.insert_users.returning[0])
                    })
            }
        },

        loginUser() {
            if (this.login.email !== '' && this.login.password !== '') {
                const query = loginUser(this.login.email, this.login.password)
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
                    .then((res) => res.data)
                    .then((data) => {
                        if (data.users.length > 0) {
                            this.$store.commit('users/login', data.users[0])
                            this.$cookies.set('user', data.users[0])
                            this.$store.commit('loginModal/toggleModal')
                            // console.log(this.$store.state.users.user.firstname)
                        } else {
                            console.log('This user does not exist')
                        }

                        // console.log(data.users)
                    })
            }
        },
    },
})
</script>