# 📋 SPECIFICATIONS TECHNIQUES - JB Blog

**Version**: 1.0.0  
**Status**: 🟢 Actif  
**Last Updated**: 28 avril 2026  

---

## 1. SPÉCIFICATIONS GÉNÉRALES

### 1.1 Objectif du Produit
Créer une plateforme digitale pour **Julien Bechkri** permettant de:
- 📊 Afficher son expertise en Product Management & Agilité
- 💼 Présenter son parcours et ses compétences
- 📚 Centraliser ses publications et articles
- 🤝 Faciliter les contacts/opportunités business

### 1.2 Public Cible
- **Recruteurs** (recherchant PM/Agile experts)
- **Entreprises** (cherchant consulting/coaching)
- **Communauté** (product/agilité)
- **Réseau professionnel** (LinkedIn, etc.)

### 1.3 Périmètre MVP
✅ 5 pages statiques  
✅ Design responsive  
✅ Pas de CMS backend  
✅ Liens vers articles externes  
✅ Déploiement simple  

❌ HORS PÉRIMÈTRE:
- Contact form avancée
- Blog engine complet
- User authentication
- Database

---

## 2. REQUIREMENTS FONCTIONNELS

### 2.1 Page Accueil (`/`)

**Composants requis:**
- [ ] **Hero Section**
  - Nom: "Julien Bechkri"
  - Tagline: "Product Manager • Transformateur Digital • Agiliste"
  - CTA button: "Découvrir mon travail"
  - Image/illustration (optionnel)

- [ ] **Section À Propos** (court)
  - 2-3 paragraphes max
  - Photo professionnelle
  - CTA: "Lire plus → /about"

- [ ] **Featured Articles**
  - Display: 3 articles max
  - Composant: ArticleCard
  - Champs: Titre, Description, Date, Tags, Lien externe
  - CTA: "Voir tous → /blog"

- [ ] **Featured Projects**
  - Display: 2 projets max
  - Composant: ProjectCard
  - Champs: Titre, Description, Tags
  - CTA: "Voir tous → /projects"

- [ ] **CTA Section**
  - "Vous avez un projet?"
  - Bouton: "Prenons contact"

**Acceptance Criteria:**
- ✅ Hero visible above the fold
- ✅ All sections scroll smoothly
- ✅ Mobile responsive (< 480px)
- ✅ Load time < 2s

---

### 2.2 Page À Propos (`/about`)

**Sections requises:**

1. **Header**
   - Titre: "Julien Bechkri"
   - Subtitle: "Product Manager & Expert en Transformation Digitale"
   - Description courte

2. **Bio Section**
   - 2-3 paragraphes narratifs
   - Focus sur: Valeur proposée, Approche

3. **Timeline Expériences**
   - Format: Frise chronologique verticale
   - Minimum 3 postes
   - Champs: Titre, Entreprise, Dates, Description
   - Visual: Bordure gauche colorée

4. **Compétences** (Grid 4 colonnes)
   - Product Management
   - Agilité & Leadership
   - Digital & Technologie
   - Autres
   - Format: Liste avec checkmarks (✓)

5. **Formation**
   - Écoles/Certifications
   - Dates
   - Minimum 1 ligne

**Acceptance Criteria:**
- ✅ Contenu minimum 600 mots
- ✅ Facile à scanner (sections claires)
- ✅ Pas d'overload d'info
- ✅ Téléphone friendly

---

### 2.3 Page Projets (`/projects`)

**Spécifications:**

- **Display**: Grille 2 colonnes (1 sur mobile)
- **Nombre**: Minimum 4 projets, max 8
- **Par projet:**
  - Titre
  - Description (100-150 mots)
  - Tags (2-3 max)
  - Optionnel: Image, lien externe

- **Composant**: ProjectCard réutilisable
- **CTA finale**: "Vous avez un projet similaire?"

**Acceptance Criteria:**
- ✅ Cards uniformes
- ✅ Hover effects
- ✅ Responsive grid
- ✅ Descriptions claires

---

### 2.4 Page Blog (`/blog`)

**Spécifications:**

- **Display**: Grid 3 colonnes sur desktop, 1 sur mobile
- **Articles**: 6-12 par page (future pagination)
- **Composant**: ArticleCard

**Par article:**
- Titre
- Description (100-150 mots)
- Date (format FR: "15 avril 2026")
- Tags (2-3 max)
- Lien (externe POUR L'INSTANT)
- Badge "↗" pour externe

**Fonctionnalites futures:**
- [ ] Filtre par tag
- [ ] Recherche articles
- [ ] Articles en Markdown natifs
- [ ] Pagination

**Acceptance Criteria:**
- ✅ Liens externes s'ouvrent en nouveau tab
- ✅ Dates formatées en français
- ✅ Cards harmonieuses

---

### 2.5 Page 404

**Spécifications:**
- Message humanisé
- Lien retour à l'accueil
- Design cohérent

---

## 3. REQUIREMENTS NON-FONCTIONNELS

### 3.1 Performance
- Pages < 1.5s de charge initial
- CSS < 50KB (minifié)
- Pas de CMS backend (SSG)
- Images optimisées (< 200KB chaque)

### 3.2 SEO
- Meta tags (title, description)
- Open Graph tags (social sharing)
- Canonical URLs
- Mobile responsive (Mobile-first design)

### 3.3 Accessibilité
- WCAG 2.1 AA minimum
- Contraste texte/fond ≥ 4.5:1
- Semantic HTML
- Keyboard navigation

### 3.4 Responsivité
**Breakpoints:**
- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Desktop: 769px+

### 3.5 Navigateur Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### 3.6 Compatibilité
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile
- ✅ Light/Dark mode (optionnel)

---

## 4. DESIGN SYSTEM

### 4.1 Palette Couleur

```
Primary (Confiance):
  - #0ea5e9 (Bleu ciel) - Default
  - #0284c7 (Bleu foncé) - Hover
  - #082f49 (Bleu très foncé) - Active

Accent (Énergie):
  - #f97316 (Orange) - CTAs

Neutrals:
  - #ffffff (Blanc) - BG
  - #f9fafb (Gris très clair) - Secondary BG
  - #1f2937 (Gris foncé) - Texte
  - #6b7280 (Gris neutre) - Secondary texte

Status:
  - Erreur: #dc2626 (Red)
  - Succès: #16a34a (Green)
  - Warning: #ca8a04 (Yellow)
```

### 4.2 Typography

```
Font-family: Inter (sans-serif)
Font-fallback: system-ui, sans-serif

Scale:
  H1: 3rem (mobile) / 3.75rem (desktop)
  H2: 1.875rem / 2.25rem
  H3: 1.5rem / 1.875rem
  Body: 1rem
  Small: 0.875rem

Line-height:
  Headings: 1.2
  Body: 1.6
  Compact: 1.4

Font-weight:
  Regular: 400
  Semibold: 600
  Bold: 700
```

### 4.3 Spacing (Tailwind Scale)

```
unit = 0.25rem (4px)

- p-4 = 1rem (16px)
- p-6 = 1.5rem (24px)
- p-8 = 2rem (32px)
- p-16 = 4rem (64px)

Section padding:
- Mobile: p-4 / py-8
- Desktop: p-16 / py-20
```

### 4.4 Components

#### Buttons
```
Primary CTA:
  - bg-primary-600 hover:bg-primary-700
  - text-white
  - py-3 px-8
  - rounded-lg
  - transition-colors

Secondary:
  - border-2 border-primary-600
  - text-primary-600
  - hover:bg-primary-50
```

#### Cards
```
Base:
  - border border-gray-200
  - rounded-lg
  - p-6
  - transition-all

Hover:
  - border-primary-300 (or primary-500)
  - shadow-lg
```

#### Navigation
```
Desktop: Horizontal menu
Mobile: Hidden (future: hamburger)

Active state:
  - text-primary-600
  - border-b-2 border-primary-600
```

---

## 5. CONTENU REQUIS

### 5.1 À Remplir

**Informations personnelles:**
- [ ] Email de contact
- [ ] LinkedIn URL
- [ ] Twitter/X URL
- [ ] Photo professionnelle
- [ ] Bio courte (2-3 phrases)

**Expériences (Minimum 3):**
- [ ] Poste actuel: Titre, Entreprise, Dates, Description
- [ ] Poste N-1: Titre, Entreprise, 20XX-20XX, Description
- [ ] Autres: Timeline complète

**Compétences:**
- [ ] Product Management (4-5 items)
- [ ] Agilité & Leadership (4-5 items)
- [ ] Digital & Tech (4-5 items)
- [ ] Autres (3-4 items)

**Projets (Minimum 4):**
- [ ] Titre du projet
- [ ] Description (3-4 phrases)
- [ ] 2-3 tags chacun

**Articles:**
- [ ] 6 articles avec titre + description + date + lien
- [ ] Tags pertinents

**Éducation:**
- [ ] Minimum 1 école/certification
- [ ] Dates

---

## 6. TECHNICAL STACK

### 6.1 Frontend
```
Framework: Astro 5.x
Language: TypeScript 5.x
Styling: Tailwind CSS 3.x
Components: Astro components (no React by default)
Graphics: SVG/CSS (no image library)
Icons: Heroicons (future)
```

### 6.2 Build & Deploy
```
Build tool: Astro CLI
Output: Static HTML/CSS/JS
CDN: Netlify or Vercel
DNS: Custom domain (future)
SSL: Automatic (Netlify/Vercel)
```

### 6.3 Dev Tools
```
Code formatting: Prettier
Linting: (optional, not configured)
Git hooks: (optional)
```

---

## 7. CHECKLIST FINALISATION

### Pre-Launch
- [ ] Toutes les infos réelles remplies
- [ ] Photo professionnelle en place
- [ ] Liens articles testés
- [ ] Mobile responsive validée
- [ ] Pas d'erreurs console
- [ ] Performances acceptables (< 2s)
- [ ] SEO metadata complété
- [ ] Testée sur navigateurs principaux

### Lancement
- [ ] Domain name acheté (optionnel)
- [ ] Deployé sur Netlify/Vercel
- [ ] DNS configuré
- [ ] Analytics setup (Plausible)
- [ ] Partage réseau professionnel

### Post-Launch
- [ ] Monitoring erreurs (Sentry optionnel)
- [ ] Feedback utilisateurs
- [ ] Mises à jour régulières

---

## 8. CRITÈRES D'ACCEPTATION GLOBAUX

✅ **Accueil:** Visuellement attrayant + Appel à action clair  
✅ **À Propos:** Crédibilité établie en 2 min de lecture  
✅ **Projets:** Cas d'usage concrets et impressionnants  
✅ **Blog:** Facile de trouver les articles pertinents  
✅ **Performance:** Chargement rapide (< 1.5s)  
✅ **Mobile:** Parfait sur téléphone  
✅ **Contact:** Email/LinkedIn clairs et accessibles  

---

**Doc Specifications créée le**: 28 avril 2026  
**Version initiale**: 1.0.0  
**Status à déploiement**: À remplir les infos réelles
