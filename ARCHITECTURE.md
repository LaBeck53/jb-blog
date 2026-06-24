# 🏗️ ARCHITECTURE - JB Blog

**Last Updated**: 24 juin 2026  
**Architect**: Julien Bechkri

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
│  │ • Astro Content Collections (blog Markdown)           │  │
│  │ • Intégration Tailwind CSS + @tailwindcss/typography  │
  │ • (React retiré — non utilisé dans le projet)         │  │
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
        │ • blog/[slug]/index.html         │
        │ • testimonials/index.html        │
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
    ├─→ Astro Content Collections
    │   ├─ Parse src/content/blog/*.md
    │   ├─ Valide contre schema (config.ts)
    │   └─ Génère routes /blog/[slug]
    │
    ├─→ Astro Compiler
    │   ├─ Parse .astro files
    │   ├─ Process TypeScript
    │   └─ Resolve imports
    │
    ├─→ Tailwind CSS Processor
    │   ├─ Scan components
    │   ├─ Generate CSS (utility + typography plugin)
    │   └─ Minify
    │
    └─→ Asset Pipeline
        ├─ Copy public/ to dist/
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

```
BaseLayout.astro  → Wrapper HTML universel (Header + Footer + <slot>)
BlogLayout.astro  → Layout alternatif pour articles (non utilisé activement)
```

```astro
{/* BaseLayout.astro */}
<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.svg" />
  </head>
  <body class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1"><slot /></main>
    <Footer />
  </body>
</html>
```

### `src/components/`

```
Header.astro          → Navigation sticky, logo JB Product Systems, CTA "ÉCHANGEONS"
Footer.astro          → Contact, liens, copyright, logo h-32, email via bouton JS (adresse masquée au survol)
Hero.astro            → Section hero dark slate-950, 2 colonnes, 3 piliers
ArticleCard.astro     → Card article avec gradient cover coloré (auto-généré depuis titre)
ProjectCard.astro     → Card projet avec bordure top gradient
TestimonialCard.astro → Card témoignage, variante featured ou standard
```

**Hiérarchie d'utilisation:**
```
index.astro
  ├─ Hero (dark, STRUCTURE/DECIDE/DELIVER)
  ├─ Section "À Propos" (texte + CTA)
  ├─ Section "Ce qui fait ma singularité" (4 cartes valeurs brand/slate)
  ├─ ProjectCard ×2 (featured projects)
  ├─ ArticleCard ×3 (featured articles)
  ├─ Section Formations (aperçu 4 thèmes)
  └─ TestimonialCard ×3 (featured testimonials)

blog.astro
  └─ ArticleCard ×N (natifs via Content Collections + liens externes)

blog/[slug].astro
  └─ <Content /> (article Markdown rendu avec prose classes)
  └─ TOC sidebar (headings extraits du HTML)

projects.astro
  └─ ProjectCard ×6

testimonials.astro
  └─ TestimonialCard ×4 (featured) + ×7 (autres)
```

### `src/pages/`

```
index.astro           → /
about.astro           → /about
projects.astro        → /projects
blog.astro            → /blog
blog/[slug].astro     → /blog/:slug  (route dynamique SSG)
testimonials.astro    → /testimonials
formations.astro      → /formations
mentions-legales.astro → /mentions-legales
404.astro             → /404
```

### `src/content/`

```
config.ts             → Définit la collection "blog" avec schéma Zod
blog/
  ├─ etablir-une-roadmap-produit-en-10-etapes.md
  ├─ quest-ce-quun-mvp-definition-et-principes-cles.md
  ├─ roles-et-interactions-dans-une-organisation-produit.md
  └─ product-management-ia-strategie.md
```

**Schéma article (config.ts):**
```typescript
z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  updatedDate: z.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()),
  draft: z.boolean().default(false),
})
```

### `src/data/`

```
testimonials.ts  → 11 témoignages réels (interface Testimonial, tableau exporté)
```

**Interface:**
```typescript
interface Testimonial {
  name: string;
  title: string;
  company: string;
  text: string;
  date?: string;
  featured?: boolean;  // true = affiché en page d'accueil + section "Recommandations Principales"
}
```

### `src/styles/`

```
global.css  → @tailwind base/components/utilities + custom overrides
```

### `public/`

```
favicon.svg
favicon-32x32.png
images/
  └─ JB_PRODUCT_SYSTEMS_transparent.png   (logo header)
```

---

## Component Communication Flow

### Page → Component Props

```
index.astro
    ├─→ <Hero title="..." subtitle="..." ctaPrimary={} ctaSecondary={} />
    ├─→ <TestimonialCard testimonial={t} featured={true} />
    ├─→ <ArticleCard title="..." date="..." tags={[]} external={true} url="..." />
    └─→ <ProjectCard title="..." description="..." tags={[]} />

blog/[slug].astro
    └─→ <Content />    (composant Astro généré par Content Collections)
```

### Props Flow - ArticleCard

```astro
interface Props {
  title: string;
  description: string;
  date: string;
  slug?: string;          // pour articles natifs
  tags?: string[];
  external?: boolean;     // ouvre dans _blank
  url?: string;           // URL externe OU générée depuis slug
  category?: string;      // badge visible dans le cover
  eyecatchImage?: string; // image custom si fournie
}
```

Le gradient du cover est **auto-généré** depuis un hash du titre :
```typescript
const seed = Math.abs(hashCode(title));
const palette = palettes[seed % palettes.length]; // 6 palettes disponibles
```

---

## Tailwind CSS Architecture

### Design System réel (tailwind.config.cjs)

```
brand    → Bleu principal (#2563eb / #1d4ed8)
neutral  → Tons slate (#94a3b8 → #0f172a)
accent   → Cyan (#38bdf8 / #0ea5e9)
highlight → Vert (#22c55e / #16a34a)
```

### Patterns visuels récurrents

```
Cards:
  rounded-[2rem]
  border border-slate-200
  shadow-[0_18px_60px_-35px_rgba(15,23,42,0.45)]
  hover:-translate-y-1
  hover:shadow-[0_24px_80px_-38px_...]

Hero sections (pages):
  bg-slate-950 text-white
  radial-gradient overlays
  linear-gradient(180deg, rgba(15,23,42,0.95), ...)

Boutons CTA:
  rounded-full
  bg-brand-600 hover:bg-brand-700
  shadow-lg shadow-brand-600/20

Badges/pills:
  rounded-full
  bg-white/90 (sur dark) ou bg-slate-100 (sur light)
  text-[11px] uppercase tracking-[0.28em]
```

---

## Astro Content Collections

### Fonctionnement

```
1. src/content/config.ts  → définit schéma Zod de la collection "blog"
2. src/content/blog/*.md  → articles avec frontmatter validé
3. blog.astro             → getCollection('blog') → liste triée par date
4. blog/[slug].astro      → getStaticPaths() + entry.render() → HTML
```

### Route dynamique `/blog/[slug]`

```astro
export async function getStaticPaths() {
  const blogEntries = await getCollection('blog');
  return blogEntries.map(entry => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}
```

**Features de la page article:**
- Layout 4 colonnes (1 sidebar + 3 contenu)
- TOC (table of contents) collé en sticky, headings extraits via JS
- Author card dans sidebar (nom, titre, bio courte)
- `@tailwindcss/typography` (classe `prose`) pour le rendu du Markdown
- Boutons partage Twitter/LinkedIn (non fonctionnels, UI seulement)
- Active highlighting du TOC via IntersectionObserver

---

## Static Site Generation (SSG)

### Notre approche: SSG 100%

```
Why SSG?
✅ Très rapide (zéro serveur)
✅ Parfait pour blogs/vitrines
✅ Sécurisé (pas de serveur à attaquer)
✅ Facile à déployer (CDN global)
✅ SEO-friendly
✅ Pas de base de données
```

| Aspect | SSG (Notre approche) | SSR | CMS Dynamique |
|--------|----------------------|-----|---------------|
| Build | Compile une fois | À chaque requête | Runtime |
| Perfs | Très rapide | Moyen | Lent |
| Coût | Cheap (CDN static) | Moyen (serveur) | Cher |
| SEO | Parfait | Bon | Bon |
| Articles | Markdown files | DB | CMS Dashboard |

---

## Performance Optimizations

### Current
- ✅ Static HTML (instant load)
- ✅ Tailwind purged CSS (small bundle)
- ✅ Minimal JavaScript (seulement IntersectionObserver sur pages article)
- ✅ Images optimisées (public/)

### Future (if needed)
- [ ] Image lazy-loading (astro:assets)
- [ ] Open Graph images automatiques
- [ ] Service Worker (offline mode)
- [ ] Sitemap automatique (astro/sitemap)

---

## Deployment Architecture

### Option recommandée : Netlify

```
GitHub Repo → Push Code
    ↓
→ Netlify detects push
    ↓
→ `npm run build`
    ↓
→ Deploy `dist/` to CDN
    ↓
→ Live 🎉
```

---

## Extension Points

### Ajouter un article natif
```
1. Créer src/content/blog/mon-article.md
2. Ajouter frontmatter (title, description, pubDate, tags)
3. Écrire le contenu en Markdown
4. `npm run dev` → visible sur /blog et /blog/mon-article
```

### Ajouter une fonctionnalité (composant)
```
1. Créer src/components/MonComposant.astro
2. Définir interface Props
3. Importer dans la page concernée
4. Passer les props
```
