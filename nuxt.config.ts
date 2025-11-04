// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/content", "@nuxt/fonts"],
    css: ["./app/assets/css/main.css", "./app/assets/css/font.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: {
        families: [{ name: "PPAcma", provider: "none" }],
    },
});
