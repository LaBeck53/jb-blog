# 📋 SPECIFICATIONS TECHNIQUES - JB Blog

**Version**: 2.0.0  
**Status**: 🟢 Actif  
**Created**: 28 avril 2026  
**Last Updated**: 6 mai 2026  

---

## 1. SPÉCIFICATIONS GÉNÉRALES

### 1.1 Objectif du Produit
Créer une plateforme digitale pour **Julien Bechkri** (marque: **JB Product Systems**) permettant de:
- 📊 Afficher son expertise en Product Management & Agilité
- 💼 Présenter son parcours et ses compétences
- 📚 Centraliser ses publications et articles (natifs + liens externes)
- 🤝 Faciliter les contacts/opportunités business
- ⭐ Valoriser les témoignages de clients/collaborateurs

### 1.2 Public Cible
- **Recruteurs** (recherchant PM/Agile experts)
- **Entreprises** (cherchant consulting/coaching)
- **Communauté** (product/agilité)
- **Réseau professionnel** (LinkedIn, etc.)

### 1.3 Périmètre actuel (MVP+)

✅ LIVRÉ :
- 6 pages statiques + route dynamique `/blog/[slug]`
- Design system complet (brand colors, dark hero, glassmorphism)
- Blog engine natif (Astro Content Collections)
- 4 articles natifs Markdown publiés
- 11 témoignages réels intégrés
- 6 projets réels décrits
- Logo JB Product Systems dans le header
- Page /testimonials dédiée

⏳ EN COURS :
- Finalisation page /about (contenu réel)
- Page /contact

❌ HORS PÉRIMÈTRE MVP :
- User authentication
- Database
- CMS dashboard externe

---

## 2. REQUIREMENTS FONCTIONNELS

### 2.1 Page Accueil (`/`)

**Composants requis:**
- [x] **Hero Section** (dark, glassmorphism)
  - Tagline: "Transformer la complexité en impact durable."
  - Sous-titre: accompagnement IT/Produit par la valeur
  - CTA primaire: "DÉCOUVRIR MON EXPERTISE" → /about
  - CTA secondaire: "VOIR DES RÉALISATIONS" → /projects
  - Feature grid: STRUCTURE / DECIDE / DELIVER

- [x] **Section À Propos** (court)
  - 2 paragraphes vrais (15 ans expérience, agile/IA/design thinking)
  - CTA: "Lire mon parcours complet → /about"
  - Placeholder photo pro (à remplacer)

- [x] **Section Témoignages** (3 featured)
  - Display: 3 cartes featured issues de `data/testimonials.ts`
  - CTA: "Lire tous les témoignages → /testimonials"

- [x] **Section Articles**
  - Display: 3 ArticleCard (liens externes placeholder)
  - CTA: "Voir tous les articles → /blog"

- [x] **Section Projets**
  - Display: 2 ProjectCard (featured)
  - CTA: "Voir tous les projets → /projects"

- [x] **CTA Section**
  - "Vous avez un projet en tête?"
  - Bouton: "Réserver un échange" → #contact

**Acceptance Criteria:**
- ✅ Hero visible above the fold
- ✅ Témoignages sur l'accueil (crédibilité immédiate)
- ✅ Mobile responsive
- ✅ Load time < 2s

---

### 2.2 Page À Propos (`/about`)

**Status: ⏳ Contenu template — à finaliser**

**Sections requises:**
1. **Header** — Titre, subtitle, description courte
2. **Bio Section** — 2-3 paragraphes narratifs (valeur proposée, approche)
3. **Timeline Expériences** — Frise verticale, minimum 3 postes réels
4. **Compétences** — Grid 4 colonnes (Product, Agilité, Digital, Autres)
5. **Formation** — Écoles/Certifications avec dates

**Acceptance Criteria:**
- ✅ Contenu minimum 600 mots
- [ ] Vraies expériences avec dates réelles
- [ ] Photo professionnelle en place

---

### 2.3 Page Projets (`/projects`)

**Status: ✅ Complet avec vrais projets**

**Projets actuels:**
1. Transformation digitale Babilou (12 pays, marketplace BtoBtoC)
2. Programme Transformation IS&T Alten (post-fusion, M&A)
3. Digitalisation Parcours Clients (Carac, Generali, Eres)
4. Plateformes Digitales Corporate (Chanel, Randstad, Resotainer)
5. Écosystème Digital Pilotage Qualité
6. Stratégie Data & Analytics

**Acceptance Criteria:**
- ✅ Cards uniformes (rounded-[2rem], brand styles)
- ✅ Hover effects (-translate-y-1)
- ✅ Responsive grid (2 colonnes desktop, 1 mobile)
- ✅ Descriptions réelles

---

### 2.4 Page Blog (`/blog`)

**Status: ✅ Blog engine actif**

**Architecture:**
- Articles natifs lus via `getCollection('blog')` depuis `src/content/blog/`
- Articles externes affichés via ArticleCard avec `external={true}`
- Tri par date décroissante
- Grid 3 colonnes desktop, 1 mobile

**Articles natifs actuels (4):**
- Établir une roadmap produit en 10 étapes
- Qu'est-ce qu'un MVP ? Définition et principes clés
- Rôles et interactions dans une organisation Produit
- Product Management & IA : Stratégie (non commité)

**Articles externes (6, URLs placeholder):**
- Les 5 principes clés de la gestion agile
- Product Management : Vision vs Exécution
- Transformation digitale : Au-delà de la technologie
- Métriques produit : Au-delà des vanity metrics
- Conduire le changement sans consulter personne
- User Research : Aller au-delà des hypothèses

**Acceptance Criteria:**
- ✅ Liens externes ouvrent dans nouveau tab
- ✅ Dates formatées en français
- ✅ Gradient covers auto-générés (cohérents par titre)
- ✅ Badge "↗" pour externe

---

### 2.5 Page Article Individuel (`/blog/[slug]`)

**Status: ✅ Complet**

**Features:**
- Layout 4 colonnes (1 TOC sidebar + 3 contenu)
- TOC sticky avec highlighting actif (IntersectionObserver)
- Hero gradient bleu-orange avec titre, date, tags
- Article rendu avec `@tailwindcss/typography` (prose lg)
- Author card dans sidebar
- Boutons partage (Twitter/LinkedIn, UI seulement)
- Navigation "Retour au blog"

---

### 2.6 Page Témoignages (`/testimonials`)

**Status: ✅ Complet**

**Sections:**
- Hero dark (cohérent avec les autres pages)
- **Recommandations Principales** — 4 featured en grid 2 colonnes
- **Stats** — Témoignages / Années d'expérience / Projets livrés / Entreprises
- **Autres Recommandations** — 7 en grid 3 colonnes
- **CTA** — dark, lien vers email

**Données:** `src/data/testimonials.ts` — interface TypeScript + 11 vrais témoignages LinkedIn

---

### 2.7 Page 404

**Spécifications:**
- Message humanisé
- Lien retour à l'accueil
- Design cohérent

---

## 3. REQUIREMENTS NON-FONCTIONNELS

### 3.1 Performance
- Pages < 1.5s de charge initial
- CSS purgé par Tailwind (small bundle)
- Minimal JS (seulement IntersectionObserver sur articles)
- Images optimisées (< 200KB)

### 3.2 SEO
- Meta tags (title, description) ✅ via BaseLayout props
- Open Graph tags ⏳ (à ajouter)
- Canonical URLs ⏳
- Mobile responsive ✅

### 3.3 Accessibilité
- WCAG 2.1 AA minimum
- Semantic HTML (`<article>`, `<aside>`, `<nav>`, `<main>`)
- Keyboard navigation

### 3.4 Responsivité
**Breakpoints Tailwind:**
- Mobile: < 768px (1 colonne)
- Tablet: 768px+ (md:)
- Desktop: 1024px+ (lg:) / 1280px+ (xl:)

---

## 4. DESIGN SYSTEM

### 4.1 Palette Couleur (tailwind.config.cjs)

```
Brand (Principal - Bleu):
  brand-50:  #eef3ff
  brand-100: #e0e7ff
  brand-200: #c7d2fe
  brand-500: #2563eb
  brand-600: #1d4ed8  ← CTA boutons, liens actifs
  brand-700: #1e40af  ← hover
  brand-900: #0f172a

Neutral (Slate):
  neutral-50:  #f8fafc
  neutral-400: #94a3b8  ← texte secondaire
  neutral-500: #64748b
  neutral-700: #334155
  neutral-900: #0f172a

Accent (Cyan):
  accent-500: #38bdf8
  accent-600: #0ea5e9
  accent-700: #0284c7

Highlight (Vert):
  highlight-500: #22c55e
  highlight-600: #16a34a

Backgrounds:
  Sections dark: bg-slate-950 (#0f172a)
  Cards: bg-white
  Sections claires: bg-brand-50 ou bg-slate-50
```

### 4.2 Typography

```
Font-family: Inter (sans-serif) / Georgia (serif)
Plugin: @tailwindcss/typography pour articles (classe prose)

Scale responsive:
  H1: text-4xl md:text-5xl xl:text-6xl font-semibold
  H2: text-3xl font-bold (ou font-semibold)
  H3: text-2xl font-semibold
  Body: text-base leading-relaxed text-slate-600

Tracking spéciaux:
  Labels/badges: tracking-[0.28em] uppercase text-xs/sm
  Nav items: tracking-[0.02em]
```

### 4.3 Spacing

```
Max-width containers:
  Pages: max-w-6xl ou max-w-7xl mx-auto px-4
  Articles: max-w-7xl mx-auto px-4

Section padding:
  py-16 à py-20 (sections standards)
  p-8 à p-12 (cards internes)
```

### 4.4 Components

#### Cards (pattern unifié)
```css
rounded-[2rem]
border border-slate-200
bg-white
shadow-[0_18px_60px_-35px_rgba(15,23,42,0.45)]
transition hover:-translate-y-1
hover:shadow-[0_24px_80px_-38px_rgba(15,23,42,0.45)]
```

#### Boutons CTA principaux
```css
rounded-full
bg-brand-600 hover:bg-brand-700
px-8 py-4 text-sm font-semibold text-white
shadow-lg shadow-brand-600/20
```

#### Boutons secondaires (outline sur dark)
```css
rounded-full
border border-white/20 bg-white/5
hover:bg-white/10 hover:border-white/40
text-white
```

#### Hero sections (pages intérieures)
```css
bg-slate-950 text-white
relative overflow-hidden
px-6 py-16 md:px-12 md:py-20
+ overlay radial-gradient
+ overlay linear-gradient
```

#### Navigation Header
```
Sticky, bg-white/90 backdrop-blur-xl
Logo: img JB Product Systems (h-24)
Nav items: text-sm font-medium tracking-[0.02em]
Active: border-b-2 border-brand-600
CTA: rounded-full bg-brand-600 "ÉCHANGEONS" → /contact
```

---

## 5. CONTENU - ÉTAT ACTUEL

### 5.1 ✅ Complété

**Articles (4 natifs + 6 externes):** ✅  
**Projets (6 réels):** ✅  
**Témoignages (11 réels):** ✅  
**Bio courte (accueil):** ✅  
**Logo JB Product Systems:** ✅  

### 5.2 ⏳ À Compléter

**Page /about (template):**
- [ ] Vraies expériences avec dates (timeline)
- [ ] Vraies compétences listées
- [ ] Formation/certifications réelles

**Accueil:**
- [ ] Photo professionnelle (placeholder présent)

**Articles externes:**
- [ ] Remplacer URLs `blog-entreprise.com` par vraies URLs

**À créer:**
- [ ] Page /contact (bouton header pointe déjà vers /contact)

---

## 6. TECHNICAL STACK

### 6.1 Frontend
```
Framework: Astro 5.x
Language: TypeScript 5.x
Styling: Tailwind CSS 3.x + @tailwindcss/typography
Content: Astro Content Collections (Markdown + Zod schema)
Components: Astro components (no React)
Icons: SVG inline (no icon library)
```

### 6.2 Data
```
Testimonials: src/data/testimonials.ts (TypeScript hardcodé)
Articles: src/content/blog/*.md (Markdown avec frontmatter)
Projects: hardcodé dans pages/projects.astro
```

### 6.3 Build & Deploy
```
Build tool: Astro CLI (npm run build)
Output: Static HTML/CSS/JS dans dist/
Target CDN: Netlify ou Vercel
DNS: Custom domain (à configurer)
SSL: Automatique (Netlify/Vercel)
```

---

## 7. CHECKLIST FINALISATION

### Pre-Launch
- [ ] Page /about avec vraie timeline expériences
- [ ] Photo professionnelle en place
- [ ] Page /contact créée
- [ ] Liens articles externes remplacés par vraies URLs
- [ ] Open Graph meta tags ajoutés (partage réseaux sociaux)
- [ ] Sitemap (astro/sitemap integration)
- [ ] Mobile responsive validée
- [ ] Pas d'erreurs console
- [ ] Performances testées (< 2s)

### Lancement
- [ ] Domain name acheté
- [ ] Déployé sur Netlify/Vercel
- [ ] DNS configuré
- [ ] Analytics setup (Plausible)
- [ ] Partage réseau professionnel

### Post-Launch
- [ ] Monitoring erreurs
- [ ] Feedback utilisateurs
- [ ] Nouveaux articles réguliers

---

## 8. CRITÈRES D'ACCEPTATION GLOBAUX

✅ **Accueil:** Visuellement attractif + témoignages en confiance + appel à action clair  
✅ **Témoignages:** 11 recommandations réelles affichées, triées par pertinence  
✅ **Projets:** 6 cas d'usage réels et impressionnants  
✅ **Blog:** Articles natifs accessibles + engine prêt pour nouveaux contenus  
⏳ **À Propos:** Crédibilité établie en 2 min de lecture (contenu à finaliser)  
⏳ **Contact:** Page /contact à créer  
✅ **Performance:** Chargement rapide (< 1.5s)  
✅ **Mobile:** Responsive sur téléphone  
