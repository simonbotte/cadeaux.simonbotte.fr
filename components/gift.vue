<template>
    <div ref="gift" class="gift">
        <NuxtLink :href="giftData.attributes.link" :target="'_blank'">
            <div class="gift__image">
                <img
                    class="gift__image--base"
                    :src="'https://api.simonbotte.fr' + giftData.attributes.pictures.data[0].attributes.url"
                />
                <img
                    class="gift__image--hover"
                    :src="'https://api.simonbotte.fr' + giftData.attributes.pictures.data[1].attributes.url"
                />
            </div>
            <div class="gift__data">
                <div class="gift__dataRow">
                    <h2 class="gift__title">{{ giftData.attributes.name }}</h2>
                    <p class="gift__price">{{ giftData.attributes.price }}€</p>
                </div>

                <p class="gift__description">
                    {{
                        giftData.attributes.description.substring(0, 199) +
                        (giftData.attributes.description.length > 200 ? "..." : "")
                    }}
                </p>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
    giftData: {
        type: Object,
        required: true,
    },
});

const gift = ref(null);

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(gift.value, {
        scrollTrigger: {
            trigger: gift.value,
            start: "top 80%",
            end: "bottom 50%",
        },
        y: 128,
        opacity: 0,
        duration: 0.3,
    });
});
</script>

<style scoped lang="scss">
.gift {
    width: 100%;
    a {
        color: var(--blue);
        text-decoration: none;
    }
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
        gap: 16px;
    }
    &__title {
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
    &__description {
        font-size: 1rem;
        opacity: 0.8;
    }
    &__price {
        font-size: 1.25rem;
    }
    &__dataRow {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 16px;

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
