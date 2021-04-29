<template>
    <div class="bg-white h-96 w-52 rounded-sm shadow-md">
        {{ getThumbnail() }}
        <div class="">
            <img class="object-fill h-64 min-w-full" :src="bookThumbnail" />
        </div>
        <div class="min-w-full prose">
            <div
                class="pt-2 px-2 capitalize overflow-ellipsis overflow-hidden h-14 leading-tight text-center font-bold text-xl"
            >
                {{ name }}
            </div>

            <div class="text-center truncate pt-1 px-4 capitalize font-medium">
                {{ author }}
            </div>

            <div class="text-center px-2 text-gray-500 italic text-sm">
                <span v-for="tag in tags" :key="tag">
                    {{ tag }}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    // eslint-disable-next-line vue/require-default-prop
    props: { name: String, author: String, tags: Array, image: Object },
    data: () => {
        return {
            bookThumbnail: 'https://placekitten.com/300/400',
        }
    },
    methods: {
        getThumbnail() {
            if (this.image !== undefined) {
                this.bookThumbnail = this.image.thumbnail
            } else {
                this.bookThumbnail = 'https://placekitten.com/300/400'
            }
        },
    },
})
</script>
