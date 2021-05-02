<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else class="prose">
            <div>Title: {{ bookData.volumeInfo.title }}</div>
            <div>Author: {{ bookData.volumeInfo.authors[0] }}</div>
            <div>Categories: {{ bookData.volumeInfo.categories }}</div>
            <div>
                Description: <span v-html="bookData.volumeInfo.description" />
            </div>
            <div>Language: {{ bookData.volumeInfo.language }}</div>
            <div>Page Count: {{ bookData.volumeInfo.printedPageCount }}</div>
            <div>Published: {{ bookData.volumeInfo.publishedDate }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => {
        return {
            loading: true,
            bookData: [] as any,
        }
    },
    created() {
        fetch(
            `https://www.googleapis.com/books/v1/volumes/${this.$route.params.id}`
        )
            .then((response) => response.json())
            .then((data) => {
                this.bookData = data
                this.loading = false
            })
    },
})
</script>