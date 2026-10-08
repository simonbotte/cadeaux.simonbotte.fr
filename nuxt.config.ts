// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/content", "@nuxt/fonts"],
    css: ["~/assets/css/uswds.scss", "~/assets/css/main.css", "~/assets/css/font.css"],
    vite: {
        plugins: [tailwindcss()],
        css: {
            preprocessorOptions: {
                scss: {
                    loadPaths: ["node_modules/@uswds/uswds/packages"],
                },
            },
        },
    },
    fonts: {
        families: [{ name: "PPAcma", provider: "none" }],
    },
});
