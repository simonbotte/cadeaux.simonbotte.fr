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
                title: "Paire de Joy-Con 2 — bleu clair et rouge clair",
                description: "Deux manettes Joy-Con 2 pour la Nintendo Switch 2, avec leurs dragonnes. De quoi partager des parties à deux dans les jeux compatibles.",
                image: "/img/gift/nintendo-joy-con-2.jpg",
                imageAlt: "Manettes Nintendo Joy-Con 2 gauche bleu clair et droite rouge clair avec leurs dragonnes",
                imageWidth: 1000,
                imageHeight: 1000,
                link: "https://www.e.leclerc/fp/paire-de-manettes-joy-con-2-gauche-bleu-clair-droite-rouge-clair-nintendo-switch-2-nintendo-switch-2-0045496321413",
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
