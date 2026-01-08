<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const { $gsap, $ScrollTrigger, $snow } = useNuxtApp();
const wrapperRef = ref(null);
const headerImageRef = ref(null);
const headerTitleRef = ref(null);
const introWrapperRef = ref(null);
const introImageRef = ref(null);
const introTextRef = ref(null);

const starSnow = () => {
    $snow.start({
        color: "#fff",
        count: 50,
        minSize: 6,
        maxSize: 20,
    });
};

const stopSnow = () => {
    $snow.stop();
};

const categories = reactive([
    {
        name: "Divertissement",
        items: [
            {
                title: "Lego La tête dans les étoiles avec Pharrell Williams",
                description: "C'est magnifique non ?",
                image: "/img/gift/lego-pharell.webp",
                link: "https://www.fnac.com/LEGO-Icons-10391-La-tete-dans-les-etoiles-avec-Pharrell-Williams-Exclusivite-Fnac/a20974622/w-4?storecode=6902&Origin=SEA_GOOGLE_PLA_JOUET&esl-k=sem-google%7Cnx%7Cc%7Cm%7Ck%7Cp%7Ct%7Cdm%7Ca20461236398%7Cg20461236398&gclsrc=aw.ds&gad_source=1&gad_campaignid=20455746609&gclid=CjwKCAiAt8bIBhBpEiwAzH1w6fnK0SrFgRSVS74gShFIssUkK-NtBy-bFTrwATiAMHd0PT4Wc42CxxoCf2IQAvD_BwEhat/198077201458.html",
            },
            {
                title: "Lego AT-AT Star Wars",
                description: "Piou piou !",
                image: "/img/gift/atatlego.png.webp",
                link: "https://www.lego.com/fr-fr/product/at-at-75440",
            },
            {
                title: "Voiture de course de l’écurie APXGP tirée du film F1",
                description: "Vroooom",
                image: "/img/gift/f1lego.png.webp",
                link: "https://www.lego.com/fr-fr/product/apxgp-team-race-car-from-f1-the-movie-77252",
            },
            {
                title: "Coloretto",
                description: "Jeu de combinaison et de prise de risque.",
                image: "/img/gift/coloretto.webp",
                link: "https://www.espritjeu.com/jeu-de-societe/coloretto.html?srsltid=AfmBOopuJjSSAv2k4fw2yluWBMUAloMqilbv38HzMb4V9RE9fNgIH-fV",
            },
            {
                title: "Phase 10",
                description: "Jeu de cartes stratégique et fun.",
                image: "/img/gift/phase-10.jpg",
                link: "https://www.philibertnet.com/fr/mattel/76425-phase-10-887961497397.html",

            }
        ],
    },
    {
        name: "Vêtements",
        items: [
            {
                title: "Carte cadeau Uniqlo",
                description: "Pour des basics de qualité",
                image: "/img/gift/gift-card-uniqlo.jpg",
                link: "https://www.uniqlo.com/fr/fr/special-feature/gift-card",
            },
            {
                title: "Casquette Patagonia",
                description: "Afin de protéger mes idées",
                image: "/img/gift/casquette-2.webp",
                link: "https://eu.patagonia.com/fr/fr/product/fitz-roy-icon-trad-cap/38364.html?dwvar_38364_color=TLVA",
            },
            {
                title: "Veste Patagonia",
                description: "Parfaite pour le Bordelais que je suis",
                image: "/img/gift/veste.webp",
                link: "https://eu.patagonia.com/fr/fr/product/mens-point-reyes-cotton-canvas-jacket/198077194316.html",
            },
						{
                title: "New Balance 2002R beige",
                description: "On reprends les mêmes et on recommence (en 44.5)",
                image: "https://nb.scene7.com/is/image/NB/u2002rb_nb_05_i?$pdpflexf2SM2x$&qlt=80&fmt=webp&wid=726&hei=726",
                link: "https://www.newbalance.fr/fr/pd/2002r/U2002RV1-50719.html?dwvar_U2002RV1-50719_style=U2002RB#dwvar_U2002RV1-50719_size=10.5&dwvar_U2002RV1-50719_style=U2002RB&dwvar_U2002RV1-50719_width=D&pid=U2002RV1-50719&quantity=1",
            },
        ],
    },
    {
        name: "Romans graphiques",
        items: [
            {
                title: "Tananarive",
                description: "Road-trip intime.",
                image: "/img/gift/tananarive.jpg",
                link: "https://www.fnac.com/a15812154/Mark-Eacersall-Tananarive",
            },
            {
                title: "Jours de sable",
                description: "Dust Bowl, photo.",
                image: "/img/gift/jours-de-sable.jpg",
                link: "https://www.fnac.com/a15760835/Aimee-de-Jongh-Jours-de-sable",
            },
            {
                title: "Les Indes fourbes",
                description: "Aventure picaresque.",
                image: "/img/gift/les-indes-fourbes.jpg",
                link: "https://www.fnac.com/a22208250/Juanjo-Guarnido-Les-indes-fourbes",
            },
        ],
    },
]);

useHead({
    title: "Idées de cadeaux pour mon anniversaire",
    meta: [
        {
            name: "description",
            content:
                "Découvre ma liste d'idées de cadeaux pour mon anniversaire, remplie de suggestions uniques et inspirantes pour célébrer cette occasion spéciale.",
        },
        {
            name: "og:title",
            content: "Idées de cadeaux pour mon anniversaire",
        },
        {
            name: "og:description",
            content:
                "Découvre ma liste d'idées de cadeaux pour mon anniversaire, remplie de suggestions uniques et inspirantes pour célébrer cette occasion spéciale.",
        },
        {
            name: "og:image",
            content: "https://kdo.smnb.fr/og-birthday.png",
        },
    ],
    link: [
        {
            rel: "icon",
            type: "image/webp",
            href: "/favicon.webp",
        },
    ],
    htmlAttrs: {
        lang: "fr",
        class: "bg-orange-950",
    },
});

onMounted(() => {
    const gsap = $gsap;
    const ScrollTrigger = $ScrollTrigger;

    gsap.set(wrapperRef.value, { perspective: 1000 });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: wrapperRef.value,
            start: "top top",
            end: "bottom 10%",
            scrub: 0.5,
            pin: true,
        },
    });

    tl.to(headerImageRef.value, {
        opacity: 0,
        ease: "none",
    });

    tl.to(headerTitleRef.value, { opacity: 0, ease: "none", filter: "blur(20px)" }, "<");

    tl.fromTo(introWrapperRef.value, { opacity: 0 }, { opacity: 1, ease: "none" }, "<");
    tl.from(introImageRef.value, { opacity: 0, ease: "none" }, "<");
    tl.from(introTextRef.value, { opacity: 0, ease: "none", filter: "blur(10px)" }, "<");
    starSnow({
        autoResize: false,
        rotation: false,
    });

    onBeforeUnmount(() => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
    });
});
</script>

<template>
    <div>
        <div ref="wrapperRef" class="relative overflow-hidden min-h-screen bg-orange-950">
            <header
                ref="headerRef"
                class="absolute inset-0 flex flex-col items-center justify-center text-center text-orange-100 h-screen"
            >
                <img
                    ref="headerImageRef"
                    src="/path-camp.png"
                    alt="Photo de sapin enneigé"
                    class="absolute inset-0 w-full h-full object-cover brightness-80"
                />
                <div class="relative z-10 p-8" ref="headerTitleRef">
                    <h1 class="text-6xl font-bold text-orange-100 font-serif">
                        Idées de cadeaux <br />pour mon anniversaire
                    </h1>
                </div>
            </header>

            <section
                ref="introWrapperRef"
                class="absolute top-0 inset-0 h-screen flex flex-col items-center justify-center"
            >
                <img
                    ref="introImageRef"
                    src="/path-bordeaux.png"
                    alt="Photo de sapin enneigé"
                    class="absolute inset-0 w-full h-full object-cover brightness-50"
                />
                <div
                    ref="introTextRef"
                    class="relative z-10 flex flex-col items-center justify-center gap-4 max-w-200 m-auto text-orange-100 p-4"
                >
                    <h2 class="text-3xl text-bolder font-serif text-center">Un anniversaire, une continuité</h2>
                    <div class="h-px w-40 bg-orange-100"></div>
                    <p class="text-center">
                        Un anniversaire, c’est un repère sur un chemin qui continue d’avancer. C’est l’occasion de
                        regarder le parcours déjà accompli, entouré des personnes que j’aime, puis de poursuivre la
                        route à mon rythme, avec curiosité et enthousiasme.
                    </p>
                    <p class="text-center">
                        Dans cette liste, tu trouveras des envies qui me ressemblent : de quoi m’évader et m’amuser, en
                        construisant, en jouant ou en découvrant de belles histoires. Il y a aussi quelques pièces pour
                        m’habiller simplement, durablement et confortablement.
                    </p>
                </div>
            </section>
        </div>
        <section class="bg-orange-200 pt-10 flex flex-col gap-8 pb-10 px-3">
            <div
                v-for="category in categories"
                class="max-w-200 m-auto flex flex-col gap-4"
                :key="`category-${category.name}`"
            >
                <h2 class="text-3xl text-bolder font-serif">{{ category.name }}</h2>
                <ul class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                    <li v-for="item in category.items" :key="`item-${item.title}`" class="min-h-80 h-full">
                        <a
                            :href="item.link"
                            target="_blank"
                            class="bg-orange-50 p-4 flex flex-col justify-between rounded-2xl h-full"
                        >
                            <div class="mx-auto w-full max-w-[440px] overflow-hidden relative h-full flex items-center">
                                <img
                                    :src="item.image"
                                    :alt="item.title"
                                    class="w-full rounded-md"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div
                                    class="absolute bottom-0 w-full h-8 bg-linear-to-t from-orange-50 to-transparent from-60%"
                                ></div>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-lg font-medium">{{ item.title }}</span>
                                <span class="opacity-70 text-sm">{{ item.description }}</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<style>
.snowflake__inner:before {
    background-image: url("/favicon.webp") !important;
    background-size: cover;
    animation: none !important;
}
</style>
