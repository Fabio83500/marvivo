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
    _app.js           # Wrapper global, importe globals.css
    _document.js      # <Html lang="fr"> custom
    index.js          # Accueil
    contact.js        # Page Contact (coordonnées + formulaire)
    complexe.js        # Page "Le complexe"
    mentions-legales.js
    politique-de-confidentialite.js
    categories/
      foot-a-5.js, foot-a-8.js, foot-a-11.js
    api/
      contact.js      # API route POST du formulaire de contact
  components/
    <Nom>/layout.js    # Chaque composant vit dans son propre dossier, fichier `layout.js`, export default
    categories/<Nom>/layout.js  # Variantes dédiées aux pages catégories
  images/              # Images statiques, importées via `@/images/...` (import statique next/image)
  styles/globals.css   # Thème Tailwind v4 (@theme) + styles globaux
```

Alias d'import : `@/*` → `src/*` (voir `jsconfig.json`/`next.config`).

## Conventions observées

- Chaque composant est un fichier `src/components/<Nom>/layout.js` exportant un composant par défaut (souvent nommé `layout` ou le nom du composant).
- Les images proviennent de `src/images` et sont importées statiquement (`import x from "@/images/x.jpg"`) puis passées à `next/image` — le `width`/`height` est alors inféré automatiquement. Pas de balises `<img>` brutes dans le code.
- Navigation via `next/link` (`<Link href="...">`), jamais de `<a href>` pour les liens internes.
- Couleurs du thème définies dans `globals.css` (`--color-primary`, `--color-secondary`, `--color-text`, `--color-background`, `--color-light`) et utilisées via les classes Tailwind `text-primary`, `bg-primary`, `text-secondary`, etc. Le code utilise aussi parfois des couleurs ad hoc en hexadécimal (`#F5B642`, `#F0B34B`) qui correspondent approximativement à `secondary` — à harmoniser si l'occasion se présente, mais ne pas réécrire sans raison.
- Contenu entièrement en français ; attention aux apostrophes typographiques dans le JSX (`react/no-unescaped-entities` — utiliser `&apos;` ou une apostrophe simple échappée).
- Header et Footer sont des composants partagés (`@/components/Header/layout.js`, `@/components/Footer/layout.js`) inclus sur chaque page. Il existe une **copie dupliquée** du Header dans `@/components/categories/Header/layout.js` (même contenu) utilisée par `categories/foot-a-8.js` — ne pas s'étonner de la duplication, c'est existant.
- Chaque page doit avoir un unique `<h1>`, une structure sémantique `<header>` (hors de `<main>`) / `<main>` / `<section>` / `<footer>` (hors de `<main>`), et un `<Head>` (`next/head`) avec `<title>` + `<meta name="description">`.

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
