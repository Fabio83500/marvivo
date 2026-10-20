# Marvivo — AS Mar Vivo

Site vitrine du club de football AS Mar Vivo (La Seyne-sur-Mer), en français.

## Stack

- **Next.js 16.3.3** — **Pages Router** (`src/pages`), pas d'App Router. Voir `node_modules/next/dist/docs/02-pages/` pour la doc à jour avant toute modification touchant le routing, les images, les API routes, etc. (cette version contient des breaking changes par rapport aux versions antérieures).
- **React 19.2.8**
- **Tailwind CSS v4** (`@tailwindcss/postcss`), configuration CSS-first via `@theme` dans `src/styles/globals.css` (pas de `tailwind.config.js`).
- **Swiper** pour les carrousels mobiles (catégories).
- ESLint via `eslint-config-next/core-web-vitals`.

## Structure

```
src/
  pages/              # Routing (Pages Router)
    _app.js           # Wrapper global, globals.css + polices Barlow (next/font)
    index.js, le-club.js, inscriptions.js, complexe.js, contact.js
    mentions-legales.js, politique-de-confidentialite.js, 404.js
    categories/foot-a-5.js, foot-a-8.js, foot-a-11.js  # 3 lignes chacune, modèle CategoryPage
    api/contact.js    # POST du formulaire (Nodemailer → SMTP Resend du compte MF Agency, variables SMTP_* dans .env.local et chez l'hébergeur, voir .env.example)
  data/
    club.js           # Coordonnées, contacts, partenaires, navigation, saison en cours
    categories.js     # Contenu des pages Foot à 5 / 8 / 11 (équipes, horaires, éducateurs)
  components/<Nom>/layout.js  # Page (gabarit Head+Header+main+Footer), PageHero, SectionHeading, CategoryPage, ContactForm…
  images/             # logomarvivo.svg, label-fff.png, photos/ (≤2000 px), partenaires/, comite/ (portraits du bureau)
  styles/globals.css  # Thème Tailwind v4 (@theme) + utilitaires (@utility btn-gold, eyebrow, title-lg…)
```

Alias d'import : `@/*` → `src/*`.

## Conventions observées

- Le contenu (horaires, éducateurs, téléphones, partenaires) se modifie dans `src/data/`, pas dans les composants.
- Chaque page utilise `<Page title description>` puis `<PageHero>` (qui porte l'unique `<h1>`).
- Images importées statiquement depuis `src/images` et passées à `next/image`. Pas de `<img>` brut. Recompresser toute nouvelle photo (≤2000 px de large).
- Navigation interne via `next/link`.
- Couleurs uniquement via le thème : `primary`, `primary-dark`, `navy`, `secondary` (doré), `secondary-light`, `text`, `background`, `light`. Pas d'hexadécimal ad hoc.
- Titres en `font-display` (Barlow Condensed, majuscules italiques) via les utilitaires `title-xl` / `title-lg`.
- Contenu entièrement en français ; échapper les apostrophes dans le JSX (`&apos;`).

## Points d'attention spécifiques à cette version de Next.js

- **`priority` sur `next/image` est déprécié depuis Next 16** en faveur de `preload`. Utiliser `preload` (ou `preload={true}`) sur les images LCP (hero, logo), pas `priority`.
- **`images.qualities` est obligatoire dans `next.config.mjs`** dès qu'on utilise une prop `quality` différente de la valeur par défaut (`[75]`), sinon Next.js réduit silencieusement la qualité à la valeur autorisée la plus proche. Voir `next.config.mjs` (`qualities: [75, 90]`).
- Les API routes restent dans `pages/api/*` avec `NextApiRequest`/`NextApiResponse` classiques (pas de changement de ce côté dans cette version).

## Club — informations utiles pour le contenu

- Nom : Association Sportive Mar Vivo
- Ville : La Seyne-sur-Mer (83500)
- Stade / terrain d'entraînement : Stade Squillaci, Rue du Lot de l'Evescat
- Siège social (mentions légales) : Av. Henri Guillaume, 83500 La Seyne-sur-Mer
- Email : asmarvivo@orange.fr
