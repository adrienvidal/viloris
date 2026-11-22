# CLAUDE.md : Viloris

Site vitrine de Viloris : présente l'offre et amène les prospects à prendre contact, par une modale de contact puis un rendez-vous Calendly.

## Commands

```bash
npm run dev    # Next.js dev server
npm run build  # Production build
npm run lint   # ESLint
npm run format # Prettier
```

No tests in this project.

## Stack

Next.js 15 App Router + React 19 + TypeScript + Tailwind v4 + Framer Motion. Dark-only site.

## Dépendances

- **npm** comme gestionnaire de paquets, jamais pnpm, yarn ni bun : un seul
  lockfile (`package-lock.json`), et toute commande s'écrit `npm` / `npx`

## Key conventions

- **Path alias** — `@/*` resolves to project root, not `src/`
- **All components are `"use client"`** — Framer Motion usage throughout, no RSCs below page level
- **Tailwind v4** — configured via `@theme` in `app/globals.css`, no `tailwind.config.ts`
- **Fonts** — Inter (`font-sans`) + Space Grotesk (`font-display`) self-hosted via `next/font/local` (`app/fonts/`), not `next/font/google` (breaks Vercel builds)
- **shadcn/ui** — `npx shadcn@latest add <component>` → lands in `components/ui/`
- **All static content** (copy, URLs, data) lives in `lib/data.ts` — edit there first, never hardcode strings in components
- **`SHOW_REALISATIONS`** boolean in `lib/data.ts` controls whether the réalisations section renders

## Contact modal

CTAs open a modal form instead of linking to Calendly directly. Flow: CTA → `ContactModal` → POST `/api/contact` → nodemailer sends emails through Gmail SMTP → success shows Calendly link.

- Open modal: `useContactModal()` from `lib/contact-modal-context.tsx`, call `openModal()`
- `GMAIL_USER` and `GMAIL_APP_PASSWORD` (Gmail app password) required in `.env.local` and in the Vercel project

## Session Continuity

En début de session :

- Lire le fichier de la dernière session dans `.claude/sessions/`
- Identifier où on s'est arrêté et les blockers en cours
- Recopier son bloc « Reprise » (à défaut, le rédiger), puis finir par une seule
  question qui porte la proposition

En fin de session :

- Sauvegarder un résumé dans `.claude/sessions/[date]_[sujet].md`
- Commencer par un bloc « Reprise » juste sous le titre, puis : Réalisé, Reste à
  faire, Blockers, Décisions
- Si un fichier existe déjà pour aujourd'hui, le compléter plutôt que le remplacer,
  bloc « Reprise » compris

Gabarit du bloc « Reprise » (une ligne par rubrique, phrases courtes, échéance
datée entre parenthèses, et pour les blockers seulement qui on attend), sous un
titre `## Reprise` et dans un bloc de code pour garder l'alignement :

```
✅ Fait      Base restructurée, interface republiée, formulaire en ligne
⛔ Bloqué    Clé d'API (Juliette), accès Microsoft 365 (Alexis)
🎯 Priorité  Import du tableau de Mathilde (échéance 06/11)
```

En début de session, ajouter « J-n » à l'échéance (calculé avec `date`) et coiffer
le bloc de « Reprise · JJ/MM · sujet ». Les trois pictogrammes restent dans les
fichiers de session et le récapitulatif.

Ce bloc est aussi ce que le hook de fin de session publie dans le Cockpit (bloc
« À côté ») : une session sans bloc « Reprise » n'y apparaît pas.

Format du nom de fichier : `YYYY-MM-DD_sujet-en-kebab-case.md`
Exemple : `2026-03-10_audit-cabinet-merlin.md`

Règles :

- Toujours lire AVANT d'agir – ne pas redemander ce qui est déjà documenté
- Les blockers non résolus de la session précédente deviennent la priorité
- Quand un blocker est levé, le noter explicitement dans "Réalisé"

### Archivage des sessions

Le dossier `.claude/sessions/` ne garde visibles à la racine que les sessions utiles à la reprise. Les autres vont dans `.claude/sessions/archive/`.

- **Garder actives** : les 3 sessions les plus récentes, plus toute session rattachée à un chantier encore ouvert.
- **Archiver, ne pas supprimer** : déplacer via `git mv` vers `archive/` (réversible, tracé dans git). Une session est archivable quand elle est close et que son contenu vit déjà ailleurs (code, CLAUDE.md, Trello, git).
- **Filet anti-oubli, impératif** : avant d'archiver une session, reporter chacun de ses « Reste à faire » encore ouverts dans `.claude/sessions/reste-a-faire.md` (le backlog vivant, jamais archivé). Ne jamais archiver une session tant qu'un item ouvert n'a pas été soit fait, soit reporté dans ce backlog. Cocher puis retirer un item du backlog quand il est fait.
- **Quand** : en fin de session, après avoir sauvegardé le résumé du jour, vérifier si d'anciennes sessions sont devenues archivables et les déplacer.
- **Archivage automatique** : le déplacement se fait sans demander, une fois le filet anti-oubli passé. En cas de doute (chantier peut-être encore ouvert), la session reste à la racine. Les sessions archivées sont listées dans « Réalisé » du résumé du jour.
- **Ne jamais toucher** au « Reste à faire » de la session active la plus récente : c'est la liste de priorités vivante.
- **Hygiène de fond** au passage : corriger une contradiction à sa source (pas seulement dans le dernier fichier), refermer un « Reste à faire » qu'une session ultérieure a accompli, signaler une info devenue fausse (par exemple un agent supprimé depuis).
- **Toute suppression se confirme avec Adrien** avant d'agir.

Rappel : les fichiers de session sont un journal de passation, pas la mémoire vivante.

## Méthode de développement

Tout travail de construction (dérouler une tâche du plan, ajouter une commande,
reprendre le fil en début de session) passe par le skill `lean-development` dès
qu'il s'applique. Il fixe la façon d'avancer sans brûler le contexte : lectures
ciblées plutôt que fichiers entiers, sous-agents seulement quand ils paient,
passes de revue non multipliées. L'invoquer au début du travail, pas une fois le
contexte déjà saturé.

## Workflow git

Un **lot** est un groupe de tâches qui livre quelque chose de vérifiable seul.
On ne travaille jamais directement sur `main` ni `dev`.

`dev` reçoit le développement, `main` la production.
On ne passe d'une branche à la suivante que par une PR.

1. Brancher depuis `dev` à jour.
2. Un commit par tâche. Écrire le test d'abord là où un bug coûte cher et où la
   logique est subtile ; ailleurs, un test ciblé après coup suffit.
3. `npm run build` au vert sur toute la suite avant d'ouvrir la PR.
4. `gh pr create --base dev`.
5. Ne jamais fusionner sans accord explicite.
   Seule exception : la PR de résumé de fin de session ouverte par Claude
   (`docs/session-*`, seuls des fichiers de `.claude/sessions/` touchés), que
   Claude fusionne lui-même dès les tests verts. Quand la fusion d'une PR clôt
   la session, le résumé s'écrit avant et se committe dans sa branche. S'il ne
   reste ensuite que des fichiers de `.claude/sessions/` à committer (résumé,
   archives, `reste-a-faire.md`), Claude enchaîne sans demander : branche
   `docs/session-*`, commit `docs: update session summary`, PR, fusion.
6. Après fusion : revenir sur `dev`, `git pull`, supprimer la branche.
7. Mettre en production : `gh pr create --base main --head dev`, sur accord
   explicite.

### Messages de commit

En anglais, à l'impératif, sans point final. Préfixe `feat:`, `fix:`, `test:`,
`docs:` ou `refactor:`.
