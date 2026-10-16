# AS Mar Vivo

Site vitrine du club de football AS Mar Vivo (La Seyne-sur-Mer), construit avec [Next.js](https://nextjs.org) (Pages Router).

## Prérequis

- Node.js 20 ou plus récent
- npm

## Installation

```bash
npm install
```

Copiez ensuite le fichier d'exemple des variables d'environnement et renseignez vos propres valeurs :

```bash
cp .env.example .env.local
```

## Lancer le projet en développement

```bash
npm run dev
```

Le site est alors accessible sur [http://localhost:3000](http://localhost:3000).

## Vérifier le code (lint)

```bash
npm run lint
```

## Builder pour la production

```bash
npm run build
```

Pour lancer le build en local (après `npm run build`) :

```bash
npm run start
```

## Déploiement

Le projet est un site Next.js standard et peut être déployé sur n'importe quelle plateforme supportant Next.js (Vercel, un serveur Node.js, etc.).

1. Configurer les variables d'environnement (voir ci-dessous) sur la plateforme de déploiement.
2. Builder le projet : `npm run build`.
3. Démarrer le serveur de production : `npm run start` (ou laisser la plateforme le faire automatiquement, par exemple sur Vercel).

## Variables d'environnement

Voir `.env.example` pour la liste complète. Elles sont nécessaires au bon fonctionnement du formulaire de contact (`/contact`), qui envoie un email via SMTP depuis l'API route `src/pages/api/contact.js`.

| Variable            | Description                                                        |
| ------------------- | -------------------------------------------------------------------- |
| `SMTP_HOST`         | Adresse du serveur SMTP utilisé pour l'envoi d'emails.               |
| `SMTP_PORT`         | Port du serveur SMTP (587 pour STARTTLS, 465 pour SSL).              |
| `SMTP_USER`         | Identifiant de connexion au serveur SMTP.                            |
| `SMTP_PASSWORD`     | Mot de passe (ou mot de passe d'application) du compte SMTP.          |
| `CONTACT_EMAIL_TO`  | Adresse email du club qui doit recevoir les messages du formulaire.   |

Sans ces variables, le formulaire de contact reste fonctionnel côté validation mais renvoie une erreur côté utilisateur lors de l'envoi (message informant que le service est momentanément indisponible).

## Structure du projet

Voir [CLAUDE.md](./CLAUDE.md) pour le détail de la structure du code, des conventions utilisées et des points d'attention spécifiques à cette version de Next.js.
