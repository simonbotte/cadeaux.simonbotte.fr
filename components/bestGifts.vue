<template>
    <div class="bestGifts">
        <div class="container">
            <h2 class="bestGifts__title">Les meilleurs choix pour me faire plaisir</h2>
            <div class="gifts">
                <Gift v-for="gift in gifts" :gift-data="gift"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    gifts: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped lang="scss">
.bestGifts {
    background-color: var(--blue-20);
    padding: 32px 0px 64px 0px;
    margin: 64px 0;
    &__title {
        margin-bottom: 32px;
        font-size: 2rem;
        text-transform: uppercase;
        color: var(--blue);
        font-weight: 900;
    }
}
.gifts {
    display: grid;
    grid-template-columns: 1fr;
    gap: 64px;
}
@media screen and (min-width: 767px) {
    .gifts {
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (min-width: 992px) {
    .gifts {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
