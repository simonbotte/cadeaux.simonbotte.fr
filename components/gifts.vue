<template>
    <div class="container allGifts">
        <h2 class="allGifts__title">Pas d’idées ? En voilà plein</h2>
        <div class="gifts">
            <Gift v-for="gift in gifts" :gift="gift" />
        </div>
    </div>
</template>

<script setup>
const { data, loading } = await useFetch("/api/gifts");
const gifts = ref(data.value.data);
console.log(gifts.value);
onMounted(() => {
    setTimeout(() => {
        document.querySelector(".allGifts").classList.add("loaded");
    }, 100);
});
</script>

<style scoped lang="scss">
.allGifts {
    margin-top: 50px;
    margin-bottom: 50px;
    opacity: 0;
    transform: translateY(100px);
    &__title {
        margin-bottom: 16px;
        font-size: 1.5rem;
        color: var(--blue);
    }
    &.loaded {
        opacity: 1;
        transform: translateY(0px);
        transition: 500ms ease;
    }
}
.gifts {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}
.gift {
    width: 100%;
    text-decoration: none;
    color: var(--blue);
    &__image {
        width: 100%;
        display: grid;
        margin-bottom: 8px;
        img {
            grid-column: 1/1;
            grid-row: 1/1;
            width: 100%;
            aspect-ratio: 1;
            object-fit: contain;
        }
        &--base {
            z-index: 1;
            transition: opacity 0.3s ease-in-out;
        }
        &--hover {
            z-index: 2;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }
    }
    &__data {
        display: grid;
        flex-direction: column;
        gap: 4px;
    }
    &__title {
        font-size: 0.875rem;
    }
    &__description {
        font-size: 0.75rem;
        opacity: 0.8;
    }
    &__price {
        font-size: 0.75rem;
    }
    &__dataRow {
        display: flex;
        justify-content: space-between;
    }
    &:hover {
        .gift__image--hover {
            opacity: 1;
        }
        .gift__image--base {
            opacity: 0;
        }
    }
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
    .gift {
        &__title {
            font-size: 1rem;
        }
        &__price {
            font-size: 0.875rem;
        }
    }
}
</style>
