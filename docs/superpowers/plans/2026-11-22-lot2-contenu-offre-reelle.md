# Lot 2 : contenu aligné sur l'offre réelle — plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remplacer le contenu du site par l'offre réelle d'Adrien (sur-mesure, évolutions en 2 à 3 jours, preuve Cabinet Serre), sans toucher au look.

**Architecture:** Presque tout passe par `lib/data.ts`. Trois composants bougent à la marge : la réalisation accepte des captures, une vidéo et un badge par projet ; les services passent à 5 cartes compactes avec prix ; la démarche passe à 4 étapes. L'ordre des sections change dans `app/page.tsx`.

**Tech Stack:** Next.js 15, React 19, Tailwind v4, Framer Motion. Pas de tests dans le projet : la vérification est `npm run lint`, `npm run build` et une relecture visuelle.

**Spec:** `docs/superpowers/specs/2026-11-22-lot2-contenu-offre-reelle-design.md`

## Global Constraints

- Tout texte vit dans `lib/data.ts`, jamais en dur dans un composant.
- « Je » partout, jamais « nous ».
- Message : « Un outil fait exactement pour votre façon de travailler. Vous demandez un changement, vous l'avez en 2 à 3 jours. »
- Aucune durée totale de projet annoncée. Jamais « pas sur devis » ni rien qui suggère des évolutions gratuites.
- Données : « hébergées dans des services conformes au RGPD, elles restent les vôtres ». Retirer « aucune plateforme américaine » et « modèles hébergés en Europe ».
- Prix : ceux du catalogue d'octobre, en « dès … € HT ».
- Ni Pyrène ni Auratio cités. Pas d'outils personnels hors une phrase dans la bio.
- Look inchangé (couleurs, typos, barre d'outils) ; formulaire et Calendly inchangés.

## Review Focus

- Captures Serre absentes : la carte Serre s'affiche proprement sans images ni vidéo (pas de cadre vide). → Task 2.
- Mobile : la carte Serre et les 5 cartes services restent lisibles à 390 px. → Tasks 2 et 3.
- Ancres du menu : chaque lien (`#realisations`, `#services`, `#processus`, `#faq`) mène à une section existante après réordonnancement. → Task 4.
- Restes de l'ancien discours : aucune occurrence de « nous », « Notion », « aucune plateforme américaine », « 3h », « 100% » dans `lib/data.ts`. → Task 1, vérifié par grep.
- Aperçu de partage LinkedIn : titre et description reflètent le nouveau message. → Task 1.

---

### Task 1: Textes dans `lib/data.ts`

**Files:**
- Modify: `lib/data.ts` (META, NAV_LINKS, HERO hors `workflow`, PAIN_SECTION, PAINS, PROCESS_SECTION, PROCESS_STEPS, FOUNDER_SECTION, FAQ_SECTION, FAQ, CTA_FINAL, CONTACT_FORM)

- [ ] **Step 1:** Réécrire META (titre et description pour le partage), HERO (badge, titre, accent, description, bouton « Prendre rendez-vous », tagline des marques comme expérience passée).
- [ ] **Step 2:** PAINS : 3 constats du catalogue (ressaisies, relances oubliées, le tableur partagé ne suffit plus / outils isolés).
- [ ] **Step 3:** PROCESS_STEPS : 4 étapes du catalogue (appel découverte 30 min gratuit ; proposition sous 48 h, périmètre et prix fermes ; réalisation par étapes avec démonstration ; suivi dans la durée, évolutions en 2 à 3 jours). `beyond_*` alignés en « je ».
- [ ] **Step 4:** FOUNDER_SECTION en « je », orienté sur-mesure, avec la phrase « je construis aussi mes propres outils ». Témoignage Delbeck conservé.
- [ ] **Step 5:** FAQ réécrite : déroulé d'une mission, prix (renvoi aux « dès »), délais (première version puis ajustements, sans durée totale), données (contrainte globale), outils, après la livraison. CTA_FINAL et CONTACT_FORM relus en « je ».
- [ ] **Step 6:** Vérifier : `grep -nE "\bnous\b|\bNous\b|Notion|plateforme américaine|hébergés en Europe" lib/data.ts` → aucune ligne.
- [ ] **Step 7:** `npm run lint && npm run build` → verts. Commit `feat: rewrite site copy around custom tools offer`.

### Task 2: Réalisation Cabinet Serre

**Files:**
- Modify: `lib/data.ts` (REALISATIONS_SECTION, PROJECTS), `components/RealisationsSection.tsx`

**Interfaces:**
- Produces: type d'un projet `{ name, badge, tags, subtitle, description, problem, solution, metric: { value, label }, images: { src: string; alt: string }[], videoUrl?: string }`.

- [ ] **Step 1:** PROJECTS ne contient plus que le Cabinet Serre : badge « Client », métrique `{ value: "2 à 3 jours", label: "pour chaque évolution demandée" }`, `images: []`, `videoUrl` absent tant qu'Adrien ne l'a pas fourni. REALISATIONS_SECTION en « je », titre de réalisation réelle.
- [ ] **Step 2:** Le composant affiche `p.badge` (au lieu de `demo_badge`), une rangée de captures si `images.length > 0` (via `next/image`), un lien « Voir la vidéo » si `videoUrl`. Rien de rendu sinon.
- [ ] **Step 3:** Vérifier en local (`npm run dev`) à 1440 px et 390 px : carte propre sans images. Ajouter temporairement une image existante de `public/` pour contrôler l'affichage avec captures, puis la retirer.
- [ ] **Step 4:** Lint + build verts. Commit `feat: show Cabinet Serre as the real case study`.

### Task 3: Services compacts avec prix

**Files:**
- Modify: `lib/data.ts` (SERVICES_SECTION, SERVICES, SERVICES_LIAISON), `components/ServicesSection.tsx`

**Interfaces:**
- Produces: `SERVICES: { icon: string; name: string; description: string; price: string }[]` (5 éléments).

- [ ] **Step 1:** SERVICES = 5 familles du catalogue hors outil sur mesure (déjà porté par la vitrine) : audit IA (dès 900 € HT), automatisations et connexions d'outils (dès 800 € HT), agents IA (dès 400 € HT), site web (dès 800 € HT), formation et suivi (dès 800 € HT). Titre de section du type « Ce que je fais aussi ». Mention « Prix et délai fixés au devis, après un appel gratuit. »
- [ ] **Step 2:** Le composant rend des cartes compactes (icône, nom, une phrase, prix) en grille `sm:grid-cols-2 lg:grid-cols-3` ; ICONS étendu aux icônes lucide choisies. Plus de badge ni de liste à puces.
- [ ] **Step 3:** Contrôle visuel 1440 et 390 px. Lint + build verts. Commit `feat: compact secondary services with entry prices`.

### Task 4: Haut de page, démarche et ordre des sections

**Files:**
- Modify: `lib/data.ts` (HERO.workflow), `components/ProcessSection.tsx`, `app/page.tsx`

- [ ] **Step 1:** HERO.workflow devient le journal d'une demande de modification (ex. lundi 09:12 demande reçue → mercredi 17:40 en ligne), `footer` et `caption` alignés (« Exemple réel de délai sur un outil client »).
- [ ] **Step 2:** ProcessSection : grille `md:grid-cols-2 lg:grid-cols-4` pour 4 étapes.
- [ ] **Step 3:** `app/page.tsx` : ordre Hero, ToolsBar, Pain, Realisations, Services, Process, Founder, FAQ, CtaFinal. NAV_LINKS dans le même ordre.
- [ ] **Step 4:** Vérifier chaque ancre du menu en local. Lint + build verts. Commit `feat: reorder sections around the case study`.

### Task 5: Relecture d'Adrien et mise en ligne

- [ ] **Step 1:** Pousser la branche, ouvrir la PR vers `dev`, envoyer à Adrien l'URL d'aperçu Vercel.
- [ ] **Step 2:** Appliquer ses corrections de textes (commits `fix:` dans la même branche).
- [ ] **Step 3:** Sur son accord : fusion dans `dev`, puis PR `dev` → `main`.
- [ ] **Step 4:** Quand captures et vidéo arrivent : `public/realisations/serre-*.webp` (via `scripts/optimize-images.mjs`) et `videoUrl` dans `lib/data.ts`, dans une petite PR à part.
