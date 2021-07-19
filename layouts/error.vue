<template>
    <div
        class="
            h-screen
            flex flex-col
            items-center
            text-center
            justify-center
            bg-bookclubbody
        "
    >
        <h1 v-if="error.statusCode === 404">
            <p class="font-merriweather text-[8rem] lg:text-[16rem] -mt-40">404</p>

            <p class="text-2xl mb-2 uppercase font-bold">Oops!!</p>

            <p class="text-2xl mb-6 capitalize">
                The page you're looking for doesn't exist
            </p>
        </h1>

        <h1 v-else>An error occurred</h1>
        <NuxtLink
            to="/"
            class="
                cursor-pointer
                py-1
                px-2
                text-xl
                border-3
                rounded-md
                border-gray-700
                hover:text-white hover:bg-gray-700
            "
        >
            Back to Home
        </NuxtLink>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    layout: 'blank', // you can set a custom layout for the error page
    // eslint-disable-next-line vue/require-prop-types
    props: ['error'],
})
</script>