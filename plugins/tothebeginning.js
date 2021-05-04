export default function () {
    // window.$nuxt.$rou
    console.log('here')
    window.onNuxtReady(() => {
        if (window.$nuxt.$route.path !== '/') {
            window.$nuxt.$router.replace('/')
        }
    })
}