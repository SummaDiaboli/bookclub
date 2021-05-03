export default function () {
    window.onNuxtReady(() => {
        if (window.$nuxt.$route.path !== '/') {
            console.log('here')
            window.$nuxt.$router.replace('/')
        }
    })
}