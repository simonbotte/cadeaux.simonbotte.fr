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

Les liens marchands s’ouvrent dans un nouvel onglet. Le site prend en compte la préférence de réduction des animations, et les résultats des filtres sont annoncés aux lecteurs d’écran.
