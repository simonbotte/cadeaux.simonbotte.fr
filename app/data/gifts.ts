export interface Gift {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    imageWidth: number;
    imageHeight: number;
    imageRounded?: boolean;
    link: string;
}

export interface GiftCategory {
    id: string;
    name: string;
    items: Gift[];
}

export const categories: GiftCategory[] = [
    {
        id: "accessoires",
        name: "Accessoires",
        items: [
            {
                title: "Portefeuille Ridge MagSafe — noir mat",
                description: "Le portefeuille Ridge pour MagSafe, en noir mat. Un essentiel pour le quotidien.",
                image: "/img/gift/ridge-magsafe-noir.jpg",
                imageAlt: "Portefeuille Ridge noir mat avec fixation MagSafe",
                imageWidth: 1000,
                imageHeight: 1000,
                imageRounded: true,
                link: "https://eu.ridge.com/fr-fr/products/ridge-wallet-for-magsafe-matte-black?variant=55268711367032",
            },
            {
                title: "Boucle Sport Nike — gris asphalte, 46 mm",
                description: "Un nouveau bracelet pour mon Apple Watch : la Boucle Sport Nike gris asphalte, en 46 mm.",
                image: "/img/gift/apple-nike-gris-asphalte-46mm.jpg",
                imageAlt: "Bracelet Apple Watch Boucle Sport Nike gris asphalte avec languette Run Swoosh",
                imageWidth: 1144,
                imageHeight: 1144,
                link: "https://www.apple.com/fr/shop/product/mkuy4zm/a/boucle-sport-nike-gris-asphalte-46-mm",
            },
        ],
    },
    {
        id: "vetements",
        name: "Vêtements",
        items: [
            {
                title: "Sweat à capuche oversize Uniqlo — vert foncé, taille L",
                description: "Un sweat à capuche à la coupe oversize, pour être bien au chaud. Le coloris souhaité est le vert foncé (59), en taille L.",
                image: "/img/gift/uniqlo-sweat-capuche-vert-fonce-produit.jpg",
                imageAlt: "Sweat à capuche oversize Uniqlo vert foncé",
                imageWidth: 900,
                imageHeight: 1200,
                link: "https://www.uniqlo.com/fr/fr/products/E471808-000/00?colorDisplayCode=59&sizeDisplayCode=005",
            },
            {
                title: "T-shirt Boxy Uniqlo — bleu, taille L",
                description: "Un T-shirt 100 % coton à la coupe ample et courte, facile à porter au quotidien. Le coloris souhaité est le bleu (67), en taille L.",
                image: "/img/gift/uniqlo-t-shirt-boxy-bleu-l.jpg",
                imageAlt: "T-shirt Boxy Uniqlo bleu à manches courtes",
                imageWidth: 900,
                imageHeight: 1200,
                link: "https://www.uniqlo.com/fr/fr/products/E487962-000/00?colorDisplayCode=67&sizeDisplayCode=005",
            },
            {
                title: "T-shirt Boxy Uniqlo — blanc, taille L",
                description: "Un T-shirt 100 % coton à la coupe ample et courte, facile à porter au quotidien. Le coloris souhaité est le blanc (00), en taille L.",
                image: "/img/gift/uniqlo-t-shirt-boxy-blanc-l.jpg",
                imageAlt: "T-shirt Boxy Uniqlo blanc à manches courtes",
                imageWidth: 900,
                imageHeight: 1200,
                link: "https://www.uniqlo.com/fr/fr/products/E487962-000/00?colorDisplayCode=00&sizeDisplayCode=005",
            },
            {
                title: "T-shirt Boxy Uniqlo — vert olive, taille L",
                description: "Un T-shirt 100 % coton à la coupe ample et courte, facile à porter au quotidien. Le coloris souhaité est le vert olive (56), en taille L.",
                image: "/img/gift/uniqlo-t-shirt-boxy-vert-olive-l.jpg",
                imageAlt: "T-shirt Boxy Uniqlo vert olive à manches courtes",
                imageWidth: 900,
                imageHeight: 1200,
                link: "https://www.uniqlo.com/fr/fr/products/E487962-000/00?colorDisplayCode=56&sizeDisplayCode=005",
            },
        ],
    },
    {
        id: "petits-plaisirs",
        name: "Petits plaisirs",
        items: [
            {
                title: "Amuseables Pickle — Jellycat",
                description: "Un cornichon en peluche, tout doux et plein de bonne humeur. Difficile de lui résister.",
                image: "/img/gift/jellycat-cornichon.jpg",
                imageAlt: "Peluche cornichon Jellycat Amuseables Pickle, souriante avec de petits pieds marron",
                imageWidth: 1000,
                imageHeight: 1000,
                link: "https://fr.jellycat.com/amuseables-pickle/",
            },
            {
                title: "Une surprise de la collection GTA VI",
                description: "Quelque chose de la collection officielle GTA VI chez Rockstar Games. Je te laisse choisir la surprise !",
                image: "/img/gift/rockstar-gta-vi-collection.jpg",
                imageAlt: "La collection GTA VI de Rockstar Games : vêtements, casquettes, sacs et accessoires roses et bleus",
                imageWidth: 1200,
                imageHeight: 400,
                imageRounded: true,
                link: "https://store.rockstargames.com/fr/grand-theft-auto-vi-collection",
            },
            {
                title: "Paire de Joy-Con 2 — bleu et jaune clair",
                description: "Une paire de manettes Joy-Con 2 pour la Nintendo Switch 2, en bleu et jaune clair. De quoi partager des parties à deux dans les jeux compatibles.",
                image: "/img/gift/nintendo-joy-con-2-bleu-jaune.jpg",
                imageAlt: "Manettes Nintendo Joy-Con 2 gauche bleu et droite jaune clair",
                imageWidth: 1000,
                imageHeight: 1000,
                link: "https://www.e.leclerc/fp/paire-de-manettes-joy-con-2-gauche-bleu-droite-jaune-clair-nintendo-switch-2-nintendo-switch-2-0045496321857",
            },
            {
                title: "Petites plantes adorables — LEGO Botanicals 10371",
                description: "Une menthe poivrée et une camomille à construire, dans deux pots souriants avec un livre et une tasse de thé. Un petit duo plein de bonne humeur à exposer.",
                image: "/img/gift/lego-petites-plantes-adorables-10371.jpg",
                imageAlt: "Deux plantes LEGO : un pot marron souriant qui lit un livre et un pot violet qui tient une tasse de thé",
                imageWidth: 1000,
                imageHeight: 875,
                link: "https://www.lego.com/fr-fr/product/cozy-plants-10371",
            },
        ],
    },
    {
        id: "cuisine",
        name: "Cuisine",
        items: [
            {
                title: "Plat airfryer Pyrex — 1,5 L, poignée amovible",
                description: "Un plat en verre de 1,5 L pour airfryer à double tiroir, avec une poignée amovible. Pratique pour préparer de bons petits plats et les servir à table.",
                image: "/img/gift/pyrex-airfryer-poignee-amovible-1-5l.png",
                imageAlt: "Plat rectangulaire Pyrex en verre de 1,5 L avec poignée amovible en inox",
                imageWidth: 500,
                imageHeight: 500,
                link: "https://www.pyrex.fr/products/plat-airfryer-en-verre-avec-poignee-amovible?variant=57073354342773",
            },
        ],
    },
];
