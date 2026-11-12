# Les envies de Simon

Liste d’idées de cadeaux pour Noël construite avec Nuxt 4 et Vue 3.

## Développement

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

## Design

Le site utilise [USWDS 3.14](https://designsystem.digital.gov/), avec une direction visuelle inspirée d’[america.gov](https://america.gov/) : grands titres à empattements, fond clair, surfaces arrondies et accents bleu marine.

- `app/assets/css/uswds.scss` configure et compile uniquement les composants `usa-card`, `usa-button` et `usa-skipnav`. Les polices Merriweather et Source Sans Pro sont servies localement depuis le paquet USWDS.
- `app/assets/css/main.css` contient les couleurs et les adaptations visuelles et responsive.
- `app/components/GiftCard.vue` respecte la [structure des cartes USWDS](https://designsystem.digital.gov/components/card/), avec un titre, une image, une description et un lien explicite.
- `app/components/WishlistManifesto.vue` présente l’esprit de la liste avec du texte et des pictogrammes SVG dessinés dans `ManifestoPictogram.vue`. Les badges se réordonnent et le cœur s’anime au clic ; la réduction des animations est respectée.
- `app/data/gifts.ts` contient les catégories et les cadeaux.
- `app/app.vue` gère la recherche (insensible à la casse et aux accents), les filtres et le menu mobile.
- `public/og-image.png` est le visuel de partage au format 1200 × 630, créé avec ImageGen dans le thème du site.
- `public/favicon.svg` reprend le cadeau du logo en blanc sur bleu marine, avec des exports ICO, WebP et une icône Apple Touch.

Les liens marchands s’ouvrent dans un nouvel onglet. Le site prend en compte la préférence de réduction des animations, et les résultats des filtres sont annoncés aux lecteurs d’écran.

## Prix

La case « Afficher les prix » remplace le compteur visible dans la barre des filtres. Elle est décochée à chaque chargement ; les prix et leur date de relevé ne s’affichent qu’une fois cochée. Le compteur reste annoncé aux lecteurs d’écran.

Les prix sont enregistrés dans `app/data/gifts.ts`, avec la date du dernier relevé `pricesCheckedAt`. Ils sont en euros par défaut ; `priceCurrency` permet de conserver la devise du marchand lorsqu’elle diffère. Ils sont indicatifs, hors livraison, et ne se mettent pas à jour automatiquement. Relevé du 11 octobre 2026 sur les fiches marchandes liées aux cadeaux :

| Cadeau | Prix relevé | Source |
| --- | --- | --- |
| Portefeuille Ridge MagSafe noir mat | 149,00 € | [Ridge EU](https://eu.ridge.com/fr-fr/products/ridge-wallet-for-magsafe-matte-black?variant=55268711367032) |
| Boucle Sport Nike gris asphalte, 46 mm | 49,00 € | [Apple](https://www.apple.com/fr/shop/product/mkuy4zm/a/boucle-sport-nike-gris-asphalte-46-mm) |
| Sweat à capuche oversize vert foncé, L | 39,90 € | [Uniqlo](https://www.uniqlo.com/fr/fr/products/E471808-000/00?colorDisplayCode=59&sizeDisplayCode=005) |
| T-shirt Boxy bleu ou blanc, L | 14,90 € chacun | [Uniqlo](https://www.uniqlo.com/fr/fr/products/E487962-000/00?colorDisplayCode=67&sizeDisplayCode=005) |
| Amuseables Pickle | 23,00 € | [Jellycat](https://fr.jellycat.com/amuseables-pickle/) |
| Surprise de la collection GTA VI | À partir de 4,99 € (stickers holographiques) | [Rockstar Games](https://store.rockstargames.com/fr/grand-theft-auto-vi-collection) |
| Joy-Con 2 bleu et jaune clair | 79,99 € | [E.Leclerc](https://www.e.leclerc/fp/paire-de-manettes-joy-con-2-gauche-bleu-droite-jaune-clair-nintendo-switch-2-nintendo-switch-2-0045496321857) |
| LEGO Botanicals 10371 | 19,99 € | [LEGO](https://www.lego.com/fr-fr/product/cozy-plants-10371) |
| Plat airfryer Pyrex 1,5 L avec poignée | 15,90 € | [Pyrex](https://www.pyrex.fr/products/plat-airfryer-en-verre-avec-poignee-amovible?variant=57073354342773) |

Ajouts du 14 octobre 2026, avec les prix relevés à la Fnac et chez Cultura :

| Cadeau | Prix relevé | Source |
| --- | --- | --- |
| L’Odyssée — Blu-ray 4K | 29,99 € | [Fnac](https://www.fnac.com/a23410774/L-Odyssee-2026-Blu-ray-4K-Ultra-HD-Matt-Damon-Blu-ray-4K) |
| Tenet — Blu-ray 4K | 14,99 € | [Cultura](https://www.cultura.com/p-tenet-11765864.html) |

L’Odyssée est en précommande, avec une sortie annoncée par la Fnac au 18 novembre 2026.

Ajout du 23 octobre 2026, avec le prix relevé dans la sélection de précommandes cinéma de la Fnac :

| Cadeau | Prix relevé | Source |
| --- | --- | --- |
| Le film à regarder quand… — Thomas Deseur | 19,95 € | [Fnac](https://www.fnac.com/l143740/Reserver-des-maintenant-Cinema/Tous-les-livres-sur-le-Cinema/Art-Cinema-Musique) |

Le livre est en précommande, avec une parution annoncée au 19 novembre 2026. Le t-shirt vert olive a été retiré de la liste.

Ajout du 25 octobre 2026 dans « Petits plaisirs », avec le prix relevé chez theory11 :

| Cadeau | Prix relevé | Source |
| --- | --- | --- |
| Jeu de cartes The Office — theory11 | 12,95 $ US | [theory11](https://store.theory11.com/products/the-office-playing-cards) |

Le prix du jeu est conservé en dollars américains, la devise affichée par le marchand, sans conversion en euros.

Ajout du 25 octobre 2026 dans « High-tech », avec le prix de départ relevé sur l’Apple Store France :

| Cadeau | Prix relevé | Source |
| --- | --- | --- |
| iPhone Duo — Apple | À partir de 2 339,00 € (256 Go) | [Apple](https://www.apple.com/fr/shop/buy-iphone/iphone-duo) |

Aucune couleur ni capacité de stockage n’est imposée pour cette idée ; le lien ouvre la présentation officielle du produit.

Ajout du 7 novembre 2026 dans « High-tech », avec le prix relevé chez IPLN :

| Cadeau | Prix relevé | Source |
| --- | --- | --- |
| Objectif Sigma 50-120 mm F2.8 DC OS Contemporary — monture Sony E | 799,00 € | [IPLN](https://ipln.fr/objectif-hybride/29820-19111-sigma-objectif-50-120mm-f28-dc-os-contemporary) |

Le lien ouvre directement la déclinaison en monture Sony E ; l’objectif existe aussi en Canon RF et Fujifilm X chez le marchand. Les paramètres de suivi publicitaire de l’URL d’origine ont été retirés.

Ajout du 8 novembre 2026 dans « Accessoires », avec le prix relevé sur l’Apple Store France :

| Cadeau | Prix relevé | Source |
| --- | --- | --- |
| Smart Folio pour iPad mini (A20 Pro) — bleu marine | 89,00 € | [Apple](https://www.apple.com/fr/shop/product/mkr44zm/a/smart-folio-pour-ipad-mini-a20-pro-bleu-marine) |

L’étui est compatible avec l’iPad mini (A20 Pro). Les paramètres de suivi de l’URL d’origine ont été retirés.

Ajouts du 11 novembre 2026, avec les prix relevés chez Norbert Bottier et sur la boutique LEGO France :

| Cadeau | Prix relevé | Source |
| --- | --- | --- |
| Chausse-pied en bois laqué rouge, 25 cm — Norbert Bottier | 15,00 € | [Norbert Bottier](https://norbertbottier.com/products/chausse-pied-bois-16-cm?variant=47405653819726) |
| Panorama de Marvel — LEGO Marvel 67006 | 99,99 € | [LEGO](https://www.lego.com/fr-fr/product/the-marvel-skyline-67006) |

Le chausse-pied rejoint « Accessoires ». Malgré l’adresse de la page, il n’existe plus en 16 cm : le marchand le propose en 25 cm (15,00 €), 40 cm (20,00 €) et 54 cm (25,00 €). La longueur retenue est le 25 cm, et le lien ouvre directement cette déclinaison. Le set LEGO rejoint « Petits plaisirs » ; il est en précommande, avec une expédition annoncée à partir du 1er janvier 2027. Les paramètres d’affiliation de l’URL LEGO d’origine ont été retirés.
