<template>
    <section class="hero">
        <div class="hero__container container">
            <div class="hero__text">
                <h1>La liste de cadeaux de Simon</h1>
                <p>Retrouvez une liste d'idée cadeaux pour Nöel</p>
            </div>
            <div class="hero__decoration">
                <ClientOnly>
                    <Vue3Lottie
                        class="hero__lottie"
                        animationLink="/lottie/gift-burst.json"
                        :width="500"
                        :loop="true"
                    />
                </ClientOnly>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped lang="scss">
.hero {
    &__container {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        padding: 32px;
        padding-top: 88px;
        text-align: center;
        gap: 0px;
        h1 {
            font-size: 3rem;
            text-transform: uppercase;
            color: var(--blue);
            margin-bottom: 16px;
        }
        p {
            font-size: 1.5rem;
            color: var(--blue);
        }
    }

    &__lottie {
        max-width: 100%;
        max-height: 100%;
    }
    &__decoration {
        max-width: 100%;
        aspect-ratio: 1/1;
    }
}
@media (min-width: 992px) {
    .hero {
        &__container {
            flex-direction: row;
            text-align: left;
            padding-top: 164px;
            gap: 64px;
        }
        &__decoration {
            transform: scale(2);
        }
        &__lottie {
            height: 250px;
            width: 250px;
        }
        &__text {
            max-width: 40%;
        }
    }
}
</style>
