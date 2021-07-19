<template>
    <div>
        <div v-if="isDev === 'production'">This page is under production</div>

        <div v-else>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => {
        return {
            isDev: process.env.NODE_ENV,
        }
    },
})
</script>