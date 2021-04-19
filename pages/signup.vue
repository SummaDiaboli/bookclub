<template>
    <div class="h-screen font-merriweather bg-bookclubbody text-sm">
        <!-- Background image -->
        <div class="h-full grid grid-cols-3 grid-rows-1">
            <img
                src="~/assets/images/bookshelf.jpeg"
                class="h-full w-full object-cover col-span-2"
                alt="bookshelf background"
            />

            <!-- Signup form -->
            <div class="col-start-3 row-start-1">
                <div
                    class="flex flex-wrap justify-center h-screen place-content-start"
                >
                    <img
                        src="~/assets/images/BookClubLogo.png"
                        alt="Bookclub logo"
                        class="h-32 w-32"
                    />

                    <div class="flex flex-wrap justify-center mt-5">
                        <h1>Get started now</h1>
                        <span class="text-center"
                            >Join BookClub for free and connect with people
                            based on your literary interests
                        </span>
                    </div>

                    <div class="mt-2">
                        <form class="flex-wrap space-y-2">
                            <FormulateInput
                                v-model="firstName"
                                type="text"
                                name="firstName"
                                label="First Name"
                                validation="required"
                            />
                            <FormulateInput
                                v-model="lastName"
                                type="text"
                                name="lastName"
                                label="Last Name"
                                validation="required"
                            />
                            <FormulateInput
                                v-model="email"
                                type="email"
                                name="email"
                                label="Email Address"
                                validation="required|email"
                            />
                            <FormulateInput
                                v-model="password"
                                type="password"
                                name="password"
                                label="Password"
                                validation="required|min:8,length"
                                error-behaviour="live"
                            />
                            <FormulateInput
                                v-model="confirmPassword"
                                type="password"
                                name="password_confirm"
                                label="Confirm Password"
                                validation="required|confirm"
                            />

                            <FormulateInput
                                type="submit"
                                label="Submit"
                                class="flex bg-bookclubnav hover:bg-bookclubbutton px-2 py-1 rounded-lg justify-center"
                                @click.prevent="warn"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    layout: 'blank',
    data: () => {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
        warn() {
            alert(
                `Name: ${this.firstName} ${this.lastName}\nEmail: ${this.email}\nPassword: You fool, you thought it was me, password`
            )
        },
    },
})
</script>