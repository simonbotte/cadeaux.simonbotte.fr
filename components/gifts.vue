<template>
    <div class="container allGifts">
        <h2 class="allGifts__title">Pas d’idées ? En voilà plein</h2>
        <div class="gifts">
            <a
                target="_blank"
                :href="gift.attributes.link"
                v-for="gift in gifts"
                class="gift"
            >
                <div class="gift__image">
                    <img
                        class="gift__image--base"
                        :src="
                            'https://api.simonbotte.fr' +
                            gift.attributes.pictures.data[0].attributes.url
                        "
                    />
                    <img
                        class="gift__image--hover"
                        :src="
                            'https://api.simonbotte.fr' +
                            gift.attributes.pictures.data[1].attributes.url
                        "
                    />
                </div>
                <div class="gift__data">
                    <h2 class="gift__title">{{ gift.attributes.name }}</h2>
                    <div class="gift__dataRow">
                        <p class="gift__description">
                            {{ gift.attributes.description }}
                        </p>
                        <p class="gift__price">{{ gift.attributes.price }}€</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Gifts",
    created() {
        axios
            .get("/api/gifts")
            .then((res) => {
                this.gifts = res.data.data;
            })
            .catch((error) => {});
    },
    data() {
        return {
            gifts: [],
        };
    },
};
</script>

<style scoped lang="scss">
.allGifts {
    margin-top: 50px;
    margin-bottom: 50px;
    &__title {
        margin-bottom: 16px;
        font-size: 1.5rem;
        color: var(--blue);
    }
}
.gifts {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    &__dataRow{
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
@media screen and (min-width: 768px) {
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
@media screen and (min-width: 1200px) {
    .gifts {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
</style>
