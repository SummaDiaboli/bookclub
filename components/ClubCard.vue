<template>
    <div class="bg-white h-84 w-70 rounded-sm shadow-md hover:shadow-lg">
        <div class="">
            <img
                class="object-cover h-52 min-w-full"
                src="https://picsum.photos/900?random=2"
                :alt="`${name} Club Image`"
            />
        </div>
        <div class="min-w-full">
            <div class="pt-4 text-center font-bold text-2xl">
                {{ name }}
            </div>

            <div class="text-center pt-5 font-medium">Currently reading:</div>

            <div class="text-center pt-2 text-gray-500">
                {{ reading }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        // eslint-disable-next-line vue/require-default-prop
        name: String,
        // eslint-disable-next-line vue/require-default-prop
        reading: String,
    },
})
</script>