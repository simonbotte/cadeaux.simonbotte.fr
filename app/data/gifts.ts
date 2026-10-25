export interface Gift {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    imageWidth: number;
    imageHeight: number;
    imageRounded?: boolean;
    link: string;
    price: number;
    priceCurrency?: string;
    priceFrom?: boolean;
}

export interface GiftCategory {
    id: string;
    name: string;
    items: Gift[];
}

// Prices in EUR unless priceCurrency is specified, checked on the linked merchant pages. Date of the latest price check.
export const pricesCheckedAt = "2026-10-25";

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
                price: 149,
            },
            {
                title: "Boucle Sport Nike — gris asphalte, 46 mm",
                description: "Un nouveau bracelet pour mon Apple Watch : la Boucle Sport Nike gris asphalte, en 46 mm.",
                image: "/img/gift/apple-nike-gris-asphalte-46mm.jpg",
                imageAlt: "Bracelet Apple Watch Boucle Sport Nike gris asphalte avec languette Run Swoosh",
                imageWidth: 1144,
                imageHeight: 1144,
                link: "https://www.apple.com/fr/shop/product/mkuy4zm/a/boucle-sport-nike-gris-asphalte-46-mm",
                price: 49,
            },
        ],
    },
    {
        id: "high-tech",
        name: "High-tech",
        items: [
            {
                title: "iPhone Duo — Apple",
                description: "L’iPhone pliable d’Apple, avec un grand écran de 7,6 pouces pour les films, les jeux et deux apps côte à côte. Une envie pour voir les choses en grand.",
                image: "/img/gift/apple-iphone-duo.jpg",
                imageAlt: "iPhone Duo fermé, tenu dans une main, avec l’écran d’accueil affiché",
                imageWidth: 966,
                imageHeight: 640,
                link: "https://www.apple.com/fr/iphone-duo/",
                price: 2339,
                priceFrom: true,
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
                price: 39.9,
            },
            {
                title: "T-shirt Boxy Uniqlo — bleu, taille L",
                description: "Un T-shirt 100 % coton à la coupe ample et courte, facile à porter au quotidien. Le coloris souhaité est le bleu (67), en taille L.",
                image: "/img/gift/uniqlo-t-shirt-boxy-bleu-l.jpg",
                imageAlt: "T-shirt Boxy Uniqlo bleu à manches courtes",
                imageWidth: 900,
                imageHeight: 1200,
                link: "https://www.uniqlo.com/fr/fr/products/E487962-000/00?colorDisplayCode=67&sizeDisplayCode=005",
                price: 14.9,
            },
            {
                title: "T-shirt Boxy Uniqlo — blanc, taille L",
                description: "Un T-shirt 100 % coton à la coupe ample et courte, facile à porter au quotidien. Le coloris souhaité est le blanc (00), en taille L.",
                image: "/img/gift/uniqlo-t-shirt-boxy-blanc-l.jpg",
                imageAlt: "T-shirt Boxy Uniqlo blanc à manches courtes",
                imageWidth: 900,
                imageHeight: 1200,
                link: "https://www.uniqlo.com/fr/fr/products/E487962-000/00?colorDisplayCode=00&sizeDisplayCode=005",
                price: 14.9,
            },
        ],
    },
    {
        id: "petits-plaisirs",
        name: "Petits plaisirs",
        items: [
            {
                title: "Jeu de cartes The Office — theory11",
                description: "Un jeu de cartes premium inspiré de The Office, avec les personnages de Dunder Mifflin et des clins d’œil aux moments cultes de la série. De quoi partager une soirée jeux à Scranton.",
                image: "/img/gift/the-office-playing-cards.jpg",
                imageAlt: "Étui du jeu de cartes The Office de theory11, illustré avec les personnages de la série et un trophée Dundie",
                imageWidth: 1000,
                imageHeight: 1000,
                imageRounded: true,
                link: "https://store.theory11.com/products/the-office-playing-cards",
                price: 12.95,
                priceCurrency: "USD",
            },
            {
                title: "Amuseables Pickle — Jellycat",
                description: "Un cornichon en peluche, tout doux et plein de bonne humeur. Difficile de lui résister.",
                image: "/img/gift/jellycat-cornichon.jpg",
                imageAlt: "Peluche cornichon Jellycat Amuseables Pickle, souriante avec de petits pieds marron",
                imageWidth: 1000,
                imageHeight: 1000,
                link: "https://fr.jellycat.com/amuseables-pickle/",
                price: 23,
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
                price: 4.99,
                priceFrom: true,
            },
            {
                title: "Paire de Joy-Con 2 — bleu et jaune clair",
                description: "Une paire de manettes Joy-Con 2 pour la Nintendo Switch 2, en bleu et jaune clair. De quoi partager des parties à deux dans les jeux compatibles.",
                image: "/img/gift/nintendo-joy-con-2-bleu-jaune.jpg",
                imageAlt: "Manettes Nintendo Joy-Con 2 gauche bleu et droite jaune clair",
                imageWidth: 1000,
                imageHeight: 1000,
                link: "https://www.e.leclerc/fp/paire-de-manettes-joy-con-2-gauche-bleu-droite-jaune-clair-nintendo-switch-2-nintendo-switch-2-0045496321857",
                price: 79.99,
            },
            {
                title: "Petites plantes adorables — LEGO Botanicals 10371",
                description: "Une menthe poivrée et une camomille à construire, dans deux pots souriants avec un livre et une tasse de thé. Un petit duo plein de bonne humeur à exposer.",
                image: "/img/gift/lego-petites-plantes-adorables-10371.jpg",
                imageAlt: "Deux plantes LEGO : un pot marron souriant qui lit un livre et un pot violet qui tient une tasse de thé",
                imageWidth: 1000,
                imageHeight: 875,
                link: "https://www.lego.com/fr-fr/product/cozy-plants-10371",
                price: 19.99,
            },
        ],
    },
    {
        id: "cinema",
        name: "Cinéma",
        items: [
            {
                title: "L’Odyssée — Blu-ray 4K",
                description: "L’épopée d’Ulysse et son retour à Ithaque, à découvrir en Blu-ray 4K. En précommande à la Fnac, avec une sortie annoncée au 18 novembre 2026.",
                image: "/img/gift/odyssee-blu-ray-4k-fnac.jpg",
                imageAlt: "Coffret de L’Odyssée en Blu-ray 4K Ultra HD avec un cheval de Troie en flammes",
                imageWidth: 340,
                imageHeight: 340,
                link: "https://www.fnac.com/a23410774/L-Odyssee-2026-Blu-ray-4K-Ultra-HD-Matt-Damon-Blu-ray-4K",
                price: 29.99,
            },
            {
                title: "Tenet — Blu-ray 4K",
                description: "Le film de Christopher Nolan, entre espionnage et inversion du temps, en Blu-ray 4K. De quoi profiter d’une soirée cinéma à la maison.",
                image: "/img/gift/tenet-blu-ray-4k.jpg",
                imageAlt: "Jaquette de Tenet de Christopher Nolan en Blu-ray 4K Ultra HD",
                imageWidth: 660,
                imageHeight: 922,
                link: "https://www.cultura.com/p-tenet-11765864.html",
                price: 14.99,
            },
            {
                title: "Le film à regarder quand… — Thomas Deseur",
                description: "Le livre de Thomas Deseur pour trouver un film selon son humeur et les moments de la vie. En précommande à la Fnac, avec une parution annoncée au 19 novembre 2026.",
                image: "/img/gift/thomas-deseur-le-film-a-regarder-quand.jpg",
                imageAlt: "Couverture illustrée du livre Le film à regarder quand… de Thomas Deseur, avec une vitrine de téléviseurs",
                imageWidth: 340,
                imageHeight: 340,
                link: "https://www.fnac.com/a23680974/Thomas-Deseur-Le-film-a-regarder-quand",
                price: 19.95,
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
                price: 15.9,
            },
        ],
    },
];
