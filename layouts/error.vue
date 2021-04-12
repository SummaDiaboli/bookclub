<template>
    <div class="h-screen text-center mt-56">
        <!-- <div class=""> -->
            <h1 v-if="error.statusCode === 404">Page not found</h1>
            <h1 v-else>An error occurred</h1>
            <NuxtLink
                to="/"
                class="font-display font-regular inline-block bg-green-500 p-2 rounded-md hover:shadow-md hover:bg-green-600"
            >
                Home page
            </NuxtLink>
        <!-- </div> -->
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