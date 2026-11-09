# Portfolio — Esso-wazam Godson PATAM

Portfolio personnel de **Godson PATAM**, développeur full-stack à Lomé (Togo).

Design éditorial et chaleureux : papier, encre, terracotta, grande typographie, animations
au scroll, curseur personnalisé, grain, badges flottants et cartes projets avec de vrais
aperçus. Le site est **100 % responsive** (testé de 320 px à 1440 px).

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Framer Motion 14
- lucide-react

## Lancer le projet

Prérequis : [Node.js](https://nodejs.org/) 20 ou plus récent.

```bash
cd "C:/Users/Godson/Documents/New OpenCode Project/portfolio-godson"
npm install
npm run dev
```

Puis ouvrir **http://localhost:5173** dans le navigateur.

> Si le port 5173 est déjà utilisé : `npm run dev -- --port 5174`

## Construire la version de production

```bash
npm run build
npm run preview
```

Le dossier `dist/` contient le site prêt à être hébergé.

## Où modifier le contenu

Tout le contenu personnel est centralisé dans un seul fichier :

`src/data/profile.ts`

- `profile` : nom, rôle, bio, téléphone, email, localisation, disponibilité, stats.
- `socials` : LinkedIn, GitHub, YouTube, Facebook, Instagram, TikTok.
- `projects` : projets, descriptions, tags, liens et captures.
- `services` : les 4 blocs de services.
- `skillGroups` : compétences par catégorie.
- `experience` : expériences professionnelles et formation.
- `certifications` : diplômes et certifications.
- `marqueeTech` : technologies du bandeau défilant.

### Remplacer les images

| Fichier | Usage |
| --- | --- |
| `public/photo-godson.jpg` | Portrait (section d'accueil) |
| `public/projects/*.jpg` | Aperçus des projets (format 1200 × 800 conseillé) |
| `public/CV_Esso-wazam_Godson_PATAM.pdf` | CV téléchargeable |

Pour un nouveau projet : ajouter la capture dans `public/projects/`, puis une entrée dans
`projects` avec `image: '/projects/mon-image.jpg'`.

## Structure du projet

```text
portfolio-godson/
├─ public/
│  ├─ photo-godson.jpg
│  ├─ CV_Esso-wazam_Godson_PATAM.pdf
│  ├─ favicon.svg
│  └─ projects/            # captures des projets
├─ src/
│  ├─ components/          # navbar, curseur, loader, animations, icônes…
│  ├─ data/profile.ts      # tout le contenu
│  ├─ lib/motion.ts        # courbes d'animation
│  ├─ sections/            # Hero, About, Projects, Services, Skills, Experience, Contact
│  ├─ App.tsx
│  ├─ index.css            # thème Tailwind, textures, animations
│  └─ main.tsx
├─ previews/               # captures de contrôle du rendu
├─ index.html
└─ vite.config.ts
```

## Déploiement

### Netlify

- Build command : `npm run build`
- Publish directory : `dist`

### Vercel

Importer le dossier sur Vercel : Vite est détecté automatiquement
(build `npm run build`, output `dist`).

## Accessibilité & performances

- Navigation clavier et `:focus-visible` soignés.
- Respect de `prefers-reduced-motion`.
- Images optimisées (poids total des aperçus projets < 500 Ko).
- Aucun débordement horizontal de 320 px à 1440 px.
- Textes alternatifs sur les images et libellés ARIA sur les liens sociaux.

---

© 2026 Esso-wazam Godson PATAM — Lomé, Togo.
