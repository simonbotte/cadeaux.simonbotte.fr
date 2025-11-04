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
        name: "Blu-ray 4k",
        items: [
            {
                title: "Coffret The Dark Knight 4K (Édition Spéciale Fnac)",
                description: "Le meilleurs de Batman.",
                image: "https://static.fnac-static.com/multimedia/Images/FR/NR/5b/a1/e0/14721371/1540-1/tsp20221011170122/Coffret-The-Dark-Knight-Edition-Speciale-Fnac-Blu-ray-4K-Ultra-HD.jpg",
                link: "https://www.fnac.com/a17374716/Coffret-The-Dark-Knight-Edition-Speciale-Fnac-Blu-ray-4K-Ultra-HD-Christian-Bale-Blu-ray-4K",
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
                title: "Bracelet Apple Watch Nike (46 mm)",
                description: "Sport, respirant.",
                image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD44?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=MzN0emlEaWVTbmFHMkZjcExKbEZFZ2tuVHYzMERCZURia3c5SzJFOTlPZ1p3a1FSWkNyRzExM1dnU25TSHAxTlU3ZTBSb0RvTTd5eUlBK3M1Zm9sTlE",
                link: "https://www.apple.com/fr/shop/product/mgd44zm/a/boucle-sport-nike-gris-voilé-46-mm",
            },
        ],
    },
]);

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
                        dessinée, mais aussi de quoi mieux prendre plaisir à cuisiner. Et, bien sûr, de quoi
                        faire grimper un peu l’action Apple.
                    </p>
                </div>
            </section>
        </div>
        <section class="bg-slate-200 pt-10 flex flex-col gap-8">
            <div v-for="category in categories" class="max-w-200 m-auto flex flex-col gap-4" :key="`category-${category.name}`">
                <h2 class="text-3xl text-bolder font-serif">{{ category.name }}</h2>
                <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <li v-for="item in category.items" :key="`item-${item.title}`" class="h-full">
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
