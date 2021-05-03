export default function () {
    window.onNuxtReady(() => {
        if (window.$nuxt.$route.path !== '/') {
            window.$nuxt.$router.replace('/')
        }
    })
}