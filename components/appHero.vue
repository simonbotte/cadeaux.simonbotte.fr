<template>
    <section class="appHero">
        <div class="appHero__container container">
            <div class="appHero__text">
                <h1>La liste de cadeaux de Simon</h1>
                <p>Retrouvez une liste d'idée cadeaux pour Nöel</p>
            </div>
            <div class="appHero__decoration">
                <ClientOnly>
                    <Vue3Lottie animationLink="/lottie/gift-burst.json" :height="250" :width="250" :loop="true" />
                </ClientOnly>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped lang="scss">
    .appHero{
        &__container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
            padding-top: 164px;
            h1{
                font-size: 2.5rem;
                color: var(--blue);
                margin-bottom: 16px;
            }
            p{
                font-size: 1.5rem;
                color: var(--blue);
            }
        }
        &__decoration{
            transform: scale(2);
        }
    }
</style>