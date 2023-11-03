// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        // SCSS file in the project
        "@/assets/css/main.scss",
        "@/assets/css/button.scss",
    ],
    runtimeConfig: {
        apiToken: process.env.NUXT_STRAPI_TOKEN,
        public: {
            apiUrl: "http://localhost:1337/api",
        },
    },
    ssr: true,
});
