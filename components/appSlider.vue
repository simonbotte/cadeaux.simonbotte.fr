<template>
    <!-- Slider main container -->
    <div class="swiper" v-bind:class="loading ? '' : 'loaded'">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div
                v-for="slide in slides"
                class="swiper-slide slide"
                :key="slide.id"
            >
                <div class="slide__image">
                    <img
                        :src="
                            'https://api.simonbotte.fr' +
                            slide.attributes.background.data.attributes.url
                        "
                    />
                </div>

                <div class="slide__data">
                    <SliderWaves class="slide__wave"></SliderWaves>
                    <h2 data-swiper-parallax="-400" class="slide__title">
                        {{ slide.attributes.gift.data.attributes.name }}
                    </h2>
                    <p class="slide__price" data-swiper-parallax="-200">
                        {{ slide.attributes.gift.data.attributes.price }}€
                    </p>
                    <a
                        class="btn btn__secondary slide__link"
                        data-swiper-parallax="-100"
                        :href="slide.attributes.gift.data.attributes.link"
                        >Voir plus</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch } from "vue";
import { useFetch, useFetchCache } from "@/composables/useFetch.js";
import Swiper, { Autoplay, Parallax } from "swiper";
import "swiper/css";
const { response, data, error, loading } = useFetchCache(
    "slides",
    "/api/slides"
);

let slides = data;

watch(data, (before, after) => {

    setTimeout(() => {
        const swiper = new Swiper(".swiper", {
            modules: [Autoplay, Parallax],
            // Optional parameters
            speed: 500,
            parallax: true,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            cssMode: false,
        });
    }, 1);
});
</script>

<style scoped lang="scss">
.swiper {
    width: 100%;
    height: 500px;
    opacity: 0;
    &-slide {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &.loaded {
        opacity: 1;
        transition: 500ms;
    }
}
.slide {
    background: var(--blue);
    &__image {
        width: 100%;
        height: 100%;
        max-height: 300px;
    }
    &__data {
        height: calc(100% - 300px);
        width: 100%;
        padding: 16px;
        background: var(--blue);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        position: relative;
    }
    &__wave {
        position: absolute;
        top: 1px;
        left: 0;
        transform: translateY(-100%) rotate(180deg);
        width: 100%;
    }
    &__title {
        font-size: 1.5rem;
        color: white;
        margin-bottom: 4px;
    }
    &__price {
        font-size: 1rem;
        color: white;
        opacity: 0.8;
        margin-bottom: 16px;
    }
}

@media screen and (min-width: 768px) {
    .swiper {
        width: 100%;
        height: 700px;
    }
    .slide {
        &__image {
            width: 100%;
            height: 100%;
            max-height: 550px;
        }
        &__data {
            height: calc(100% - 250px);
        }
    }
}
@media screen and (min-width: 1200px) {
    .slide {
        display: flex;
        &__wave {
            height: 100%;
            transform: none;
        }
    }

    .slide__image {
        width: 80%;
        height: 100%;
        max-height: 100%;
    }

    .slide__data {
        width: 20%;
        height: 100%;
        justify-content: center;
    }
}
</style>
