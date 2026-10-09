<script setup lang="ts">
import type { Gift } from "~/data/gifts";

defineProps<{ gift: Gift }>();
</script>

<template>
    <li class="usa-card gift-card">
        <div class="usa-card__container">
            <div class="usa-card__header">
                <h4 class="usa-card__heading">{{ gift.title }}</h4>
            </div>
            <div class="usa-card__media">
                <div class="usa-card__img">
                    <img :src="gift.image" :alt="gift.imageAlt ?? gift.title" :class="{ 'gift-image--rounded': gift.imageRounded }" loading="lazy" decoding="async" :width="gift.imageWidth" :height="gift.imageHeight" />
                </div>
            </div>
            <div class="usa-card__body">
                <p>{{ gift.description }}</p>
            </div>
            <div class="usa-card__footer">
                <a class="usa-button usa-button--outline gift-link" :href="gift.link" target="_blank" rel="noopener noreferrer">
                    Découvrir l'idée <SiteIcon name="arrow-up-right" />
                    <span class="sr-only"> : {{ gift.title }} (nouvel onglet)</span>
                </a>
            </div>
        </div>
    </li>
</template>
