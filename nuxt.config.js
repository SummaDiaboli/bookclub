// const getDynamicRoutes = function() {
//     return [].concat(
//         ['/clubs/1', '/clubs/2', '/clubs/3'],
//     )
// }
// const ApolloClientConfig = {
//     httpEndpoint: process.env.HTTP_ENDPOINT,
//     httpLinkOptions: {
//         headers: {
//             [process.env.AUTH_SERVER_ADMIN_HEADER]: process.env.HASURA_ADMIN_SECRET
//         }
//     }
// }

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    ssr: false,
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Book Club',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    env: {
        HASURA_KEY: process.env.HASURA_ADMIN_SECRET,
        HTTP_ENDPOINT: process.env.HTTP_ENDPOINT
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@fortawesome/fontawesome-svg-core/styles.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/fontawesome.js', '~/plugins/datetime.js', '~/plugins/contentplaceholders.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@braid/vue-formulate/nuxt',
        '@nuxtjs/pwa',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/onesignal',
        // '@nuxtjs/apollo',
        'cookie-universal-nuxt',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        retry: { retries: 3 }
    },

    // apollo: {
    //     clientConfigs: {
    //         default: {
    //             ...ApolloClientConfig
    //             // wsEndpoint: process.env.WS_ENDPOINT
    //         }
    //     }
    // },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    tailwindcss: {
        jit: true,
    },

    static: {
        prefix: false
    },

    generate: {
        fallback: true
        // routes: getDynamicRoutes
    },

    pwa: {
        manifest: {
            name: 'BookClub',
            short_name: 'BookClub',
            description: 'A place for book lovers to meet',

        }
    }
}