# 🏗️ ARCHITECTURE - JB Blog

## Vue d'ensemble système

```
┌─────────────────────────────────────────────────────────────┐
│                      NAVIGATEUR UTILISATEUR                  │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTP Request
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              ASTRO BUILD (Static Site Generator)             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ • Compilation des .astro files                        │  │
│  │ • Intégration Tailwind CSS                            │  │
│  │ • TypeScript processing                               │  │
│  │ • Génération pages statiques (.html)                  │  │
│  └───────────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   ┌─────────┐      ┌───────────┐   ┌─────────┐
   │ Pages   │      │Components │   │ Styles  │
   │ (.html) │      │ (Reusable)│   │(.css)   │
   └─────────┘      └───────────┘   └─────────┘
        │                │                │
        └────────────────┼────────────────┘
                         │
                         ▼
        ┌─────────────────────────────────┐
        │   DIST/ (Production Build)       │
        │ • index.html                     │
        │ • about/index.html               │
        │ • projects/index.html            │
        │ • blog/index.html                │
        │ • _astro/* (CSS/JS minifiés)    │
        └──────────┬──────────────────────┘
                   │
      ┌────────────┴────────────┐
      ▼                         ▼
  ┌────────────┐         ┌──────────────┐
  │  Netlify   │   OU    │   Vercel     │
  │  CDN/Serve │         │  CDN/Serve   │
  └────────────┘         └──────────────┘
```

---

## Flux de données

### Build Time (NPM Run Build)

```
Source Files (src/)
    │
    ├─→ Astro Compiler
    │   ├─ Parse .astro files
    │   ├─ Process TypeScript
    │   └─ Resolve imports
    │
    ├─→ Tailwind CSS Processor
    │   ├─ Scan components
    │   ├─ Generate CSS
    │   └─ Minify
    │
    └─→ Asset Pipeline
        ├─ Optimize images
        ├─ Bundle JS/CSS
        └─ Generate HTML

    ▼
dist/ folder (Static files ready to deploy)
```

### Runtime (Visiteur accède au site)

```
User Request → CDN → fetch .html → Browser renders → ✅ Visible instantly
(No build needed, pure static files)
```

---

## Structure des Fichiers Détaillée

### `src/layouts/`
**Responsabilité**: Fournir les **wrappers HTML** réutilisables

```astro
{/* BaseLayout.astro */}
<!DOCTYPE html>
<html>
  <head>...</head>
  <body>
    <Header />
    <main>
      {/* Le contenu des pages s'injecte ici via slot */}
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

**Utilisation:**
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Ma Page">
  {/* Contenu spécifique à la page */}
</BaseLayout>
```

### `src/components/`
**Responsabilité**: Composants **reutilisables** (Header, Footer, Cards, etc.)

**Hiérarchie:**
```
Header.astro (navigation, branding)
  └─ contient les liens vers les pages

ArticleCard.astro (affiche 1 article)
  └─ réutilisé sur: index.astro, blog.astro

ProjectCard.astro (affiche 1 projet)
  └─ réutilisé sur: index.astro, projects.astro

Footer.astro (contact, liens, copyright)
  └─ apparaît sur toutes les pages
```

### `src/pages/`
**Dynamique**: 1 fichier `.astro` = 1 route HTTP

```
pages/
├─ index.astro      → http://localhost:4321/
├─ about.astro      → http://localhost:4321/about
├─ projects.astro   → http://localhost:4321/projects
├─ blog.astro       → http://localhost:4321/blog
└─ 404.astro        → http://localhost:4321/404 (pour routes inconnues)
```

**Astro file routing conventions:**
- `pages/index.astro` → `/`
- `pages/about.astro` → `/about`
- `pages/blog/index.astro` → `/blog`
- `pages/blog/[...slug].astro` → `/blog/my-article` (dynamic)

### `src/styles/`
**CSS global** pour tout le site

```css
/* global.css */
@tailwind base;        /* Reset CSS Tailwind */
@tailwind components;  /* Composants Tailwind pr-définis */
@tailwind utilities;   /* Classes utilitaires (p-, m-, etc.) */

/* Custom styles */
body { font-smoothing... }
a { custom link styles... }
code { custom code block styles... }
```

---

## Component Communication Flow

### Page → Component Props

```
index.astro (parent)
    │
    ├─→ <Hero 
    │       title="Julien Bechkri"
    │       subtitle="Product Manager"
    │       cta={{ text: "Découvrir", href: "#featured" }}
    │   />
    │
    ├─→ <ArticleCard 
    │       title="Les 5 principes..."
    │       date="2026-04-15"
    │       tags={["Agilité", "Management"]}
    │   />
    │
    └─→ <ProjectCard 
            title="Refonte Produit"
            description="..."
            tags={["Product", "Transformation"]}
        />

Hero, ArticleCard, ProjectCard (children)
    │
    └─→ Interface Props{} déclarée en frontmatter
            ├─ title: string
            ├─ subtitle?: string
            └─ cta?: CTA object
```

### Props Flow Pattern

```astro
{/* ArticleCard.astro */}
---
interface Props {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  external?: boolean;
  url?: string;
}

const { title, description, date, tags = [], external = false, url } = Astro.props;
---

<article>
  <h3>{title}</h3>
  <p>{description}</p>
  {tags.map(tag => <span>{tag}</span>)}
</article>
```

---

## Tailwind CSS Architecture

### Utility Classes

**Les 3 couches de Tailwind dans notre projet:**

```css
@tailwind base;      /* Normalization CSS */
  ↓
  Reset HTML, définit des defaults

@tailwind components;
  ↓
  Classes pré-built: mx-auto, container, etc.

@tailwind utilities;
  ↓
  Classes générées: p-4, m-8, text-xl, bg-blue-500, etc.
```

### Exemple d'utilisation

```astro
{/* Before Tailwind */}
<div style="padding: 1rem; display: flex; justify-content: center; background: blue; color: white;">
  Hello
</div>

{/* After Tailwind */}
<div class="p-4 flex justify-center bg-blue-500 text-white">
  Hello
</div>
```

**Config personnalisée (tailwind.config.cjs):**
```js
theme: {
  colors: {
    primary: { 500: '#0ea5e9', 600: '#0284c7' },  // Custom colors
    accent: { 500: '#f97316' }
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif']    // Custom fonts
  }
}
```

---

## TypeScript Integration

### Type Safety en Astro

```astro
---
// Props avec types stricts
interface Props {
  title: string;
  date: string;
  tags?: string[];  // Optional
}

const { title, date, tags = [] } = Astro.props;
// TypeScript erreur si tu passes "title: 123" (pas string)
---
```

### Astro.props vs React Props

```
Astro (Server-side):
  Props → compilées à la build
  Pas de client-side reactivity par défaut
  Parfait pour pages statiques

React (dans Astro - optional):
  Props + State
  Client-side interactive
  Plus lourd, à utiliser sparingly
```

---

## Static Site Generation (SSG) vs SSR

### Notre approche: SSG 100%

```
Why SSG?
✅ Très rapide (zéro serveur)
✅ Parfait pour blogs/vitrines
✅ Sécurisé (pas serveur à hacker)
✅ Facile à déployer (CDN global)
✅ SEO-friendly
✅ Pas de base de données nécessaire

Build once → Deploy everywhere
```

**Comparaison:**

| Aspect | SSG (Notre approche) | SSR | CMS Dynamique |
|--------|----------------------|-----|---------------|
| Build | Compile une fois | À chaque requête | Runtime |
| Perfs | Très rapide | Moyen | Lent |
| Coût | Cheap (CDN static) | Moyen (serveur) | Cher |
| SEO | Parfait | Bon | Bon |
| Flexibilité | Basse (re-build) | Haute | Très haute |
| Articles | Markdown files | DB | CMS Dashboard |

---

## Performance Optimizations

### Current
- ✅ Static HTML (instant load)
- ✅ Tailwind purged CSS (small bundle)
- ✅ Minimal JavaScript
- ✅ Image optimization (with Astro)

### Future (if needed)
- [ ] Image lazy-loading
- [ ] Code splitting
- [ ] Service Worker (offline mode)
- [ ] WebP format support

---

## Deployment Architecture

### Option 1: Netlify (Recommandée)

```
GitHub Repo → Push Code
    ↓
→ Netlify detects (netlify.toml)
    ↓
→ `npm run build`
    ↓
→ Deploy `dist/` to CDN
    ↓
→ Live 🎉
```

### Option 2: Vercel

```
Same flow, slightly different UI
```

---

## Extension Points

### Pour ajouter une fonctionnalité

```
1. Ajouter fichier dans src/components/
2. Importer dans src/pages/
3. Passer les props nécessaires
4. Définir l'interface Props<>
5. npm run dev pour tester
6. Commit & deploy
```

**Exemple: Ajouter une newsletter**
```
1. Créer NewsletterForm.astro
2. Ajouter dans Footer.astro
3. Connecter Formspree ou Mailchimp
4. Test → Deploy
```

---

**Last Updated**: 28 avril 2026  
**Architect**: Claude Copilot
