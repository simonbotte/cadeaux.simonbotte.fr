// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        // SCSS file in the project
        '@/assets/css/main.scss',
        '@/assets/css/button.scss',
    ],
    runtimeConfig: {
        // The private keys which are only available server-side
        // apiSecret:
        //     "24ee8d8278e66d927d954df7fc875981c71224b2f708adae17f066b9af6301bc1bbd5536023fbe7a2281cbfd1bc93f53623cd3043eff81ede0c6a81efa06d47dbb255825907ba8f25b8af1d7771f2d277fa47ad155e7673e11b2aed6672f602e1496244180bed142fbc2f46059231bf70c866f321d96ccef3dd4667aafa2d5c2",
        apiToken: process.env.NUXT_STRAPI_TOKEN,
        // Keys within public are also exposed client-side
        public: {
            apiUrl: "http://localhost:1337/api",
        },
    },
});
