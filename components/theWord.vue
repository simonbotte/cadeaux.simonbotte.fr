<template>
    <section class="container theWord">
        <h2>{{ word?.attributes?.title }}</h2>
        <p v-html="word?.attributes?.paragraphe"></p>
    </section>
</template>

<script setup>
const { data, loading } = await useFetch("/api/word/");
let word = ref(data.value.data);
onMounted(() => {
    setTimeout(() => {
        document.querySelector(".theWord").classList.add("loaded");
    }, 100);
});
</script>

<style scoped lang="scss">
.theWord {
    margin-top: 50px;
    opacity: 0;
    transform: translateY(50px);
    h2 {
        font-size: 1.5rem;
        margin-bottom: 16px;
    }
    p {
        font-size: 1rem;
        line-height: 1.5rem;
        max-width: 1000px;
    }
    h2,
    p {
        color: var(--blue);
    }
    &.loaded {
        opacity: 1;
        transform: translateY(0px);
        transition: 500ms ease;
    }
}
</style>
