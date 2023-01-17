<template>
    <div class="container theWord" v-bind:class="loading ? '' : 'loaded'">
        <article>
            <h2>{{ word?.attributes?.title }}</h2>
            <p v-if="word?.attributes != undefined" v-html="word?.attributes?.paragraphe"></p>
        </article>
    </div>
</template>

<script>
export default {
    name: "TheWord",
};
</script>

<script setup>
import { useFetch, useFetchCache } from "@/composables/useFetch.js";

const { response, data, error, loading } = useFetchCache("word", "/api/word/");
let word = data;
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
