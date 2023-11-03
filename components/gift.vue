<template>
    <a :href="gift.attributes.link" class="gift" v-bind:target="'_blank'">
        <div class="gift__image">
            <img
                class="gift__image--base"
                :src="'https://api.simonbotte.fr' + gift.attributes.pictures.data[0].attributes.url"
            />
            <img
                class="gift__image--hover"
                :src="'https://api.simonbotte.fr' + gift.attributes.pictures.data[1].attributes.url"
            />
        </div>
        <div class="gift__data">
            <h2 class="gift__title">{{ gift.attributes.name }}</h2>
            <div class="gift__dataRow">
                <p class="gift__description">
                    {{
                        gift.attributes.description.substring(0, 199) +
                        (gift.attributes.description.length > 200 ? "..." : "")
                    }}
                </p>
                <p class="gift__price">{{ gift.attributes.price }}€</p>
            </div>
        </div>
    </a>
</template>

<script setup>
const props = defineProps({
    gift: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped lang="scss">
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
        gap: 8px;
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
@media screen and (min-width: 768px) {
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
