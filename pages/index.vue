<template>
    <div class="home">
        <AppHero></AppHero>
        <theWord></theWord>
        <Gifts></Gifts>
    </div>
</template>

<script>
export default {
    name: "Index",
};
</script>

<script setup>
const title = ref("Liste de cadeaux de simon");
const description = ref("Trouver un cadeau pour montrer à quelqu'un qu'on tient à lui peut être difficile. J'ai donc préparé une liste d'idées de cadeau pour aider ceux qui n'ont pas d'idée.");
useHead({
    title,
    meta: [
        {
            name: "description",
            content: description,
        },
        {
            property: "og:title",
            content: title,
        },
        {
            property: "og:description",
            content: description,
        },
        {
            property: "og:type",
            content: "website",
        },
        {
            property: "og:url",
            content: "https://cadeaux.simonbotte.fr",
        },
        {
            property: "og:image",
            content: "https://images.simonbotte.fr/cadeaux.simonbotte.fr/og-image.jpg",
        },
    ],
    link: [
        {
            rel: "favicon",
            href: "https://images.simonbotte.fr/cadeaux.simonbotte.fr/favicon.ico",
        },
        {
            rel: "shortcut icon",
            href: "https://images.simonbotte.fr/cadeaux.simonbotte.fr/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            href: "https://images.simonbotte.fr/cadeaux.simonbotte.fr/favicon.ico",
        },
    ],
});
</script>

<style scoped lang="scss"></style>
