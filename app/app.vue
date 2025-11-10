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
        name: "Romans graphiques",
        items: [
            {
                title: "Tananarive",
                description: "Road-trip intime.",
                image: "https://external-content.duckduckgo.com/iu/?u=https://static.fnac-static.com/multimedia/Images/FR/NR/da/05/cc/13370842/1507-1/tsp20210708130547/Tananarive.jpg&f=1",
                link: "https://www.fnac.com/a15812154/Mark-Eacersall-Tananarive",
            },
            {
                title: "Jours de sable",
                description: "Dust Bowl, photo.",
                image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/e3/37/cb/13318115/1507-1/tsp20250429080615/Jours-de-sable.jpg",
                link: "https://www.fnac.com/a15760835/Aimee-de-Jongh-Jours-de-sable",
            },
            {
                title: "Les Indes fourbes",
                description: "Aventure picaresque.",
                image: "https://static.fnac-static.com/multimedia/Images/FR/NR/a2/da/29/19520162/1507-1/tsp20251022081034/Les-indes-fourbes.jpg",
                link: "https://www.fnac.com/a22208250/Juanjo-Guarnido-Les-indes-fourbes",
            },
            {
                title: "La route",
                description: "Père-fils, survie.",
                image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/c2/51/ff/16732610/1507-1/tsp20250429100750/La-route.jpg",
                link: "https://www.fnac.com/a19356331/Manu-Larcenet-La-route",
            },
        ],
    },
    {
        name: "Divertissement",
        items: [
            {
                title: "Coffret The Dark Knight 4K",
                description: "Le meilleurs de Batman.",
                image: "https://static.fnac-static.com/multimedia/Images/FR/NR/5b/a1/e0/14721371/1540-1/tsp20221011170122/Coffret-The-Dark-Knight-Edition-Speciale-Fnac-Blu-ray-4K-Ultra-HD.jpg",
                link: "https://www.fnac.com/a17374716/Coffret-The-Dark-Knight-Edition-Speciale-Fnac-Blu-ray-4K-Ultra-HD-Christian-Bale-Blu-ray-4K",
            },
            {
                title: "Coloretto",
                description: "Jeu de combinaison et de prise de risque.",
                image: "https://www.espritjeu.com/upload/image/coloretto-p-image-87155-grande.jpg",
                link: "https://www.espritjeu.com/jeu-de-societe/coloretto.html?srsltid=AfmBOopuJjSSAv2k4fw2yluWBMUAloMqilbv38HzMb4V9RE9fNgIH-fV",
            },
            {
                title: "7 Yokai",
                description: "Jeu de plis asymétrique.",
                image: "https://cdn2.philibertnet.com/726219-large_default/yokai-septet.jpg",
                link: "https://www.espritjeu.com/7-yokai.html?srsltid=AfmBOoqW4RvXwuoLzeFFPJeRqhc5SzYgMhmlczutRU1dVsWT3NhFG7qt",
            },
        ],
    },
    {
        name: "Cuisine",
        items: [
            {
                title: "Sauteuse Tefal",
                description: "Anti-adhésive.",
                image: "https://images-eu.ssl-images-amazon.com/images/I/71EIvV1dWqL._AC_UL348_SR348,348_.jpg",
                link: "https://amzn.eu/d/csJ1Fwf",
            },
            {
                title: "Poignée Tefal",
                description: "Amovible, Ingenio.",
                image: "https://images-eu.ssl-images-amazon.com/images/I/61nrhw0b+1L._AC_UL348_SR348,348_.jpg",
                link: "https://amzn.eu/d/9vqMBPP",
            },
            {
                title: "Air fryer Ninja",
                description: "Sans huile.",
                image: "https://m.media-amazon.com/images/I/71lLLGyzpBL._AC_SX679_.jpg",
                link: "https://amzn.eu/d/ceVs1Vb",
            },
        ],
    },
    {
        name: "Apple",
        items: [
            {
                title: "Apple Watch Hermès - En Mer Orange 49 mm",
                description: "La classe à la française.",
                image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGN94?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=QVptOGY1MkJ6VVpIMDZDSHA1c2JVUWtuVHYzMERCZURia3c5SzJFOTlPZ1JyNmpKMEI2VStpRkVmclovWERhZldlRWJUR3Y4M1l2UE5FN0JZYm1FQ0E",
                link: "https://www.apple.com/fr/shop/product/mgn94zm/a/apple-watch-hermès-en-mer-orange-49-mm?fnode=a81e245e20e8c0f0de080ac2a71d6ad6fa09e0ee1f8db0500258b76b84dab0a1233eb5aece62ac9b42240b23d0b82589991992eb53ac45a84aa36c1379a6e9b3a370295159eb6a753268f7d217a9a60c",
            },
            {
                title: "AirTag",
                description: "Pour traquer le vélo",
                image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-single-select-202104?wid=940&hei=1112&fmt=png-alpha&.v=a2ZqcUtUS1VMaUZQNkl6T3JzY1ZmM2VtMnRWRDBsa0dSNys0czlzRGpsWUcvVUdZSjVwcUlDeFRXWEVzclZJSHg2bitObzZwQzk4cEorV1dZdzhIa3pOYWxjbnhLdlBxcWZOdnQwOWRQZk0",
                link: "https://amzn.eu/d/1uFeWES",
            },
						{
                title: "Visio Pro M5",
                description: "Incroyablement incroyable",
                image: "https://www.apple.com/v/apple-vision-pro/i/images/specs/hero__cvgr5aj1ttsi_small_2x.jpgairtag-single-select-202104?wid=940&hei=1112&fmt=png-alpha&.v=a2ZqcUtUS1VMaUZQNkl6T3JzY1ZmM2VtMnRWRDBsa0dSNys0czlzRGpsWUcvVUdZSjVwcUlDeFRXWEVzclZJSHg2bitObzZwQzk4cEorV1dZdzhIa3pOYWxjbnhLdlBxcWZOdnQwOWRQZk0",
                link: "https://www.apple.com/fr/shop/buy-vision/apple-vision-pro",
            },
        ],
    },
    {
        name: "Autres",
        items: [
            {
                title: "Support pour AirTag",
                description: "Pour cacher le AirTag sur le vélo.",
                image: "https://m.media-amazon.com/images/I/41qmS5Nh93L._AC_.jpg",
                link: "https://amzn.eu/d/8eoF0ew",
            },
						{
								title: "Casquette Patagonia",
                description: "Pour un style inégalé",
                image: "https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw248ba34d/images/hi-res/22321_ELGR.jpg?sw=1920&sh=1920&sfrm=png&q=90&bgcolor=f3f4ef",
                link: "https://eu.patagonia.com/fr/fr/product/p-6-label-maclure-five-panel-hat/198077201458.html",
						},
						{
								title: "Lego La tête dans les étoiles avec Pharrell Williams",
                description: "C'est magnifique non ?",
                image: "https://static.fnac-static.com/multimedia/Images/FR/MDM/48/00/a3/27459656/1520-1/tsp20250225135647/LEGO-Icons-10391-La-tete-dans-les-etoiles-avec-Pharrell-Williams-Exclusivite-Fnac.jpg/-/Sites-patagonia-master/default/dw248ba34d/images/hi-res/22321_ELGR.jpg?sw=1920&sh=1920&sfrm=png&q=90&bgcolor=f3f4ef",
                link: "https://www.fnac.com/LEGO-Icons-10391-La-tete-dans-les-etoiles-avec-Pharrell-Williams-Exclusivite-Fnac/a20974622/w-4?storecode=6902&Origin=SEA_GOOGLE_PLA_JOUET&esl-k=sem-google%7Cnx%7Cc%7Cm%7Ck%7Cp%7Ct%7Cdm%7Ca20461236398%7Cg20461236398&gclsrc=aw.ds&gad_source=1&gad_campaignid=20455746609&gclid=CjwKCAiAt8bIBhBpEiwAzH1w6fnK0SrFgRSVS74gShFIssUkK-NtBy-bFTrwATiAMHd0PT4Wc42CxxoCf2IQAvD_BwEhat/198077201458.html",
						},
						{
								title: "Sweat à capuche",
                description: "S'habiller comme un développeur",
                image: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/471808/sub/goods_471808_sub14_3x4.jpg?width=60027459656/1520-1/tsp20250225135647/LEGO-Icons-10391-La-tete-dans-les-etoiles-avec-Pharrell-Williams-Exclusivite-Fnac.jpg/-/Sites-patagonia-master/default/dw248ba34d/images/hi-res/22321_ELGR.jpg?sw=1920&sh=1920&sfrm=png&q=90&bgcolor=f3f4ef",
                link: "https://https://www.uniqlo.com/fr/fr/products/E471808-000/00?colorDisplayCode=58&sizeDisplayCode=005storecode=6902&Origin=SEA_GOOGLE_PLA_JOUET&esl-k=sem-google%7Cnx%7Cc%7Cm%7Ck%7Cp%7Ct%7Cdm%7Ca20461236398%7Cg20461236398&gclsrc=aw.ds&gad_source=1&gad_campaignid=20455746609&gclid=CjwKCAiAt8bIBhBpEiwAzH1w6fnK0SrFgRSVS74gShFIssUkK-NtBy-bFTrwATiAMHd0PT4Wc42CxxoCf2IQAvD_BwEhat/198077201458.html",
						}
        ]
    }
]);

useHead({
    title: "Ma liste au Papa Noël",
    meta: [
        {
            name: "description",
            content:
                "Découvrez ma liste de souhaits pour Noël, remplie d'idées de cadeaux soigneusement sélectionnées pour cette saison festive.",
        },
        {
            name: "og:title",
            content: "Ma liste au Papa Noël",
        },
        {
            name: "og:description",
            content:
                "Découvrez ma liste de souhaits pour Noël, remplie d'idées de cadeaux soigneusement sélectionnées pour cette saison festive.",
        },
        {
            name: "og:image",
            content: "https://cadeaux.smnb.fr/og-image.png",
        }
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
        class: "bg-slate-950",
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
        z: -400,
        opacity: 0,
        scale: 4,
        ease: "none",
    });

    tl.to(headerTitleRef.value, { z: -400, opacity: 0, scale: 2, ease: "none", filter: "blur(20px)" }, "<");

    tl.fromTo(introWrapperRef.value, { z: -800, opacity: 0 }, { z: 0, opacity: 1, ease: "none" }, "<");
    tl.from(introImageRef.value, { z: -400, opacity: 0, scale: 5, ease: "none" }, "<");
    tl.from(introTextRef.value, { z: -200, opacity: 0, ease: "none", filter: "blur(10px)" }, "<");
    starSnow();

    onBeforeUnmount(() => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
    });
});
</script>

<template>
    <div>
        <div ref="wrapperRef" class="relative overflow-hidden min-h-screen bg-slate-950">
            <header
                ref="headerRef"
                class="absolute inset-0 flex flex-col items-center justify-center text-center text-cyan-100 h-screen"
            >
                <img
                    ref="headerImageRef"
                    src="/sapin.jpg"
                    alt="Photo de sapin enneigé"
                    class="absolute inset-0 w-full h-full object-cover"
                />
                <div class="relative z-10 p-8" ref="headerTitleRef">
                    <h1 class="text-6xl font-bold text-cyan-100 font-serif">Ma liste <br />au Papa Noël</h1>
                </div>
            </header>

            <section
                ref="introWrapperRef"
                class="absolute top-0 inset-0 h-screen flex flex-col items-center justify-center"
            >
                <img
                    ref="introImageRef"
                    src="/montagne.png"
                    alt="Photo de sapin enneigé"
                    class="absolute inset-0 w-full h-full object-cover"
                />
                <div
                    ref="introTextRef"
                    class="relative z-10 flex flex-col items-center justify-center gap-4 max-w-200 m-auto text-cyan-100 p-4"
                >
                    <h2 class="text-3xl text-bolder font-serif text-center">Une année marquée par l'évolution</h2>
                    <div class="h-px w-40 bg-cyan-100"></div>
                    <p class="text-center">
                        Cette année marque un tournant, un signe de maturité, celui de mes ailes qui se déploient pour
                        vivre pleinement une vie d’adulte, tout en restant fidèle à moi-même.
                    </p>
                    <p class="text-center">
                        Dans ma liste de souhaits, tu trouveras des idées que je chéris toutes autant les unes que les
                        autres. Il y a bien sûr de quoi se divertir avec une bonne histoire, qu’elle soit filmée ou
                        dessinée, mais aussi de quoi mieux prendre plaisir à cuisiner. Et, bien sûr, de quoi faire
                        grimper un peu l’action Apple.
                    </p>
                </div>
            </section>
        </div>
        <section class="bg-slate-200 pt-10 flex flex-col gap-8 pb-10 px-3">
            <div
                v-for="category in categories"
                class="max-w-200 m-auto flex flex-col gap-4"
                :key="`category-${category.name}`"
            >
                <h2 class="text-3xl text-bolder font-serif">{{ category.name }}</h2>
                <ul class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                    <li v-for="item in category.items" :key="`item-${item.title}`" class="min-h-80 h-full">
                        <a :href="item.link" class="bg-white p-4 flex flex-col justify-between rounded-2xl h-full">
                            <div class="mx-auto w-full max-w-[440px] overflow-hidden relative h-full flex items-center">
                                <img
                                    :src="item.image"
                                    :alt="item.title"
                                    class="w-full rounded-md"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div
                                    class="absolute bottom-0 w-full h-8 bg-linear-to-t from-white to-transparent from-60%"
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
