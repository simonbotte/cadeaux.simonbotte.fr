<script setup lang="ts">
import { categories } from "~/data/gifts";

const search = ref("");
const selectedCategory = ref("all");
const menuOpen = ref(false);
const resultsHeading = ref<HTMLElement | null>(null);
const totalGifts = categories.reduce((total, category) => total + category.items.length, 0);

const categoryDescriptions: Record<string, string> = {
    accessoires: "De petits détails qui accompagnent le quotidien.",
    "petits-plaisirs": "Une touche de douceur et de quoi jouer ensemble.",
    cuisine: "De quoi préparer de bons petits plats.",
};

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/(\d)\s+(?=mm\b)/g, "$1");
const visibleCategories = computed(() => {
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);

    return categories
        .filter((category) => selectedCategory.value === "all" || category.id === selectedCategory.value)
        .map((category) => ({
            ...category,
            items: category.items.filter((item) => {
                const content = normalize(`${item.title} ${item.description} ${category.name} ${new URL(item.link).hostname}`);
                return terms.every((term) => content.includes(term));
            }),
        }))
        .filter((category) => category.items.length > 0);
});
const visibleCount = computed(() => visibleCategories.value.reduce((total, category) => total + category.items.length, 0));
const hasFilters = computed(() => search.value.trim() !== "" || selectedCategory.value !== "all");

function resetFilters() {
    search.value = "";
    selectedCategory.value = "all";
}

function showResults() {
    resultsHeading.value?.focus({ preventScroll: true });
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    resultsHeading.value?.scrollIntoView({ behavior, block: "start" });
}

useHead({
    title: "Les envies de Simon — Idées de cadeaux pour Noël",
    htmlAttrs: { lang: "fr" },
    meta: [
        {
            name: "description",
            content: "Mes idées de cadeaux pour Noël : accessoires, douceur, jeux vidéo et cuisine, avec des Joy-Con 2 et un plat Pyrex pour airfryer.",
        },
        { property: "og:title", content: "Les envies de Simon — Cadeaux de Noël" },
        { property: "og:description", content: "Quelques envies sous le sapin, et le plaisir de se retrouver à Noël." },
        { property: "og:image", content: "https://kdo.smnb.fr/og-image.png?v=2" },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Les envies de Simon. Bonjour, Noël. Des envies sous le sapin, des moments à partager, avec des branches de sapin enneigées." },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Les envies de Simon — Cadeaux de Noël" },
        { name: "twitter:description", content: "Quelques envies sous le sapin, et le plaisir de se retrouver à Noël." },
        { name: "twitter:image", content: "https://kdo.smnb.fr/og-image.png?v=2" },
        { name: "twitter:image:alt", content: "Les envies de Simon. Bonjour, Noël. Des envies sous le sapin, des moments à partager, avec des branches de sapin enneigées." },
        { name: "theme-color", content: "#10245b" },
    ],
    link: [
        { rel: "icon", type: "image/x-icon", sizes: "16x16 32x32 48x48 64x64", href: "/favicon.ico?v=2" },
        { rel: "icon", type: "image/svg+xml", sizes: "any", href: "/favicon.svg?v=2" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=2" },
    ],
});
</script>

<template>
    <div id="haut" class="wishlist">
        <a class="usa-skipnav" href="#envies">Aller aux idées de cadeaux</a>

        <div class="personal-banner">
            <SiteIcon name="gift" />
            <span>Au pied du sapin, une petite liste d’envies.</span>
        </div>

        <div class="landing-shell">
            <header class="site-header">
                <a class="site-brand" href="#haut" aria-label="Les envies de Simon, accueil">
                    <span class="brand-mark"><SiteIcon name="gift" /></span>
                    <span>Les envies de Simon<span class="brand-period">.</span></span>
                </a>

                <nav class="desktop-nav" aria-label="Navigation principale">
                    <a href="#envies">Les idées</a>
                    <a href="#manifesto">L’esprit de la liste</a>
                    <a class="nav-arrow" href="#envies" aria-label="Découvrir les idées de cadeaux">
                        <SiteIcon name="arrow-down" />
                    </a>
                </nav>

                <button class="usa-button menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="mobile-menu" @click="menuOpen = !menuOpen">
                    {{ menuOpen ? "Fermer" : "Menu" }}
                    <SiteIcon :name="menuOpen ? 'close' : 'menu'" />
                </button>

                <nav v-show="menuOpen" id="mobile-menu" class="mobile-nav" aria-label="Navigation mobile">
                    <a href="#envies" @click="menuOpen = false">Les idées <SiteIcon name="arrow-down" /></a>
                    <a href="#manifesto" @click="menuOpen = false">L’esprit de la liste <SiteIcon name="arrow-down" /></a>
                </nav>
            </header>

            <main>
                <section class="hero" aria-labelledby="hero-title">
                    <p class="eyebrow">Ma liste de Noël</p>
                    <h1 id="hero-title">Bonjour, Noël.</h1>
                    <p class="hero-description">Quelques envies sous le sapin, et le plaisir de se retrouver.</p>

                    <div class="hero-discovery">
                        <div class="hero-memory">
                            <img src="/sapin.jpg" alt="Des branches de sapin recouvertes de neige" width="1920" height="1080" fetchpriority="high" />
                            <div class="memory-caption">
                                <span class="memory-kicker">L’esprit de Noël</span>
                                <p>Des envies sous le sapin.<br />Des moments à partager.</p>
                            </div>
                            <span class="memory-stamp" aria-hidden="true"><SiteIcon name="tree" /></span>
                        </div>
                    </div>

                    <a class="hero-scroll" href="#envies">Trouver une petite attention <SiteIcon name="arrow-down" /></a>
                </section>

                <WishlistManifesto />

                <section id="envies" class="gifts-section" aria-labelledby="gifts-title">
                    <div class="section-intro">
                        <div>
                            <p class="eyebrow">À offrir, avec le cœur</p>
                            <h2 id="gifts-title" ref="resultsHeading" tabindex="-1">De quoi me faire sourire.</h2>
                        </div>
                        <p class="collection-note">{{ totalGifts }} idées, {{ categories.length }} univers. <br />Et aucune obligation, évidemment.</p>
                    </div>

                    <div class="collection-toolbar">
                        <div class="category-filters" role="group" aria-label="Filtrer les cadeaux par catégorie">
                            <button type="button" :aria-pressed="selectedCategory === 'all'" @click="selectedCategory = 'all'">
                                Toutes les envies <span>{{ totalGifts }}</span>
                            </button>
                            <button v-for="category in categories" :key="category.id" type="button" :aria-pressed="selectedCategory === category.id" @click="selectedCategory = category.id">
                                {{ category.name }} <span>{{ category.items.length }}</span>
                            </button>
                        </div>
                        <p class="results-count" role="status" aria-live="polite" aria-atomic="true">{{ visibleCount }} {{ visibleCount > 1 ? "idées" : "idée" }}</p>
                    </div>

                    <div v-if="hasFilters" class="active-search">
                        <p v-if="search.trim()">Les envies qui correspondent à <strong>« {{ search.trim() }} »</strong></p>
                        <p v-else>{{ categories.find((category) => category.id === selectedCategory)?.name }}</p>
                        <button type="button" @click="resetFilters">Tout afficher <SiteIcon name="close" /></button>
                    </div>

                    <div id="gift-results">
                        <section v-for="category in visibleCategories" :key="category.id" class="gift-category" :aria-labelledby="`title-${category.id}`">
                            <div class="category-heading">
                                <div class="category-title">
                                    <span class="category-number" aria-hidden="true">0{{ categories.findIndex((item) => item.id === category.id) + 1 }}</span>
                                    <h3 :id="`title-${category.id}`">{{ category.name }}</h3>
                                </div>
                                <p>{{ categoryDescriptions[category.id] }}</p>
                            </div>
                            <ul class="usa-card-group gift-grid" role="list">
                                <GiftCard v-for="gift in category.items" :key="gift.title" :gift="gift" />
                            </ul>
                        </section>

                        <div v-if="visibleCount === 0" class="empty-state">
                            <span class="empty-icon"><SiteIcon name="search" /></span>
                            <h3>Cette envie reste à inventer.</h3>
                            <p>Aucune idée ne correspond à ces filtres. Essayez un autre mot ou retrouvez toute la liste.</p>
                            <button class="usa-button" type="button" @click="resetFilters">Voir toutes les envies <SiteIcon name="arrow-right" /></button>
                        </div>
                    </div>
                </section>

                <section id="a-propos" class="about-section" aria-labelledby="about-title">
                    <div class="about-heading">
                        <p class="eyebrow">L’esprit de la liste</p>
                        <h2 id="about-title">Noël, le plaisir<br />d’être ensemble.</h2>
                        <span class="about-decoration" aria-hidden="true"><SiteIcon name="sparkles" /></span>
                    </div>
                    <div class="about-copy">
                        <p>Noël, c’est l’occasion de ralentir, de se retrouver et de partager de bons moments avec les personnes que j’aime. Les cadeaux en font partie, mais ce sont surtout ces instants ensemble qui rendent les fêtes précieuses.</p>
                        <p>Dans cette liste, tu trouveras des envies qui me ressemblent : des accessoires pour le quotidien, un cornichon tout doux, une petite surprise de l’univers GTA VI, des Joy-Con 2 pour jouer ensemble et un plat Pyrex pour cuisiner. Quelques idées choisies avec le sourire, à glisser sous le sapin.</p>
                        <p class="about-signature">Le plus beau cadeau, c’est de passer Noël ensemble.<span>Simon</span></p>
                    </div>
                </section>
            </main>
        </div>

        <footer class="site-footer">
            <a class="footer-brand" href="#haut">Les envies de Simon.</a>
            <p>Des idées choisies avec soin. Des cadeaux offerts avec le cœur.</p>
            <a class="back-to-top" href="#haut">Retour en haut <SiteIcon name="arrow-up" /></a>
        </footer>
    </div>
</template>
