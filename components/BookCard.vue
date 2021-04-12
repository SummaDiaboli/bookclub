<template>
    <div class="bg-white h-96 w-52">
        <div class="">
            <img
                class="object-cover h-64 min-w-full"
                src="https://placekitten.com/300/400"
            />
        </div>
        <div class="min-w-full">
            <div class="pt-2 px-2 leading-tight text-center font-bold text-xl">
                {{ name }}
            </div>

            <div class="text-center pt-1 font-medium">
                {{ author }}
            </div>

            <div class="text-center px-2 text-gray-500 italic text-sm">
                {{ tags }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    // eslint-disable-next-line vue/require-default-prop
    props: { name: String, author: String, tags: String },
})
</script>
