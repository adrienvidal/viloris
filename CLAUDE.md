# CLAUDE.md

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

## Key conventions

- **Path alias** — `@/*` resolves to project root, not `src/`
- **All components are `"use client"`** — Framer Motion usage throughout, no RSCs below page level
- **Tailwind v4** — configured via `@theme` in `app/globals.css`, no `tailwind.config.ts`
- **Fonts** — Inter (`font-sans`) + Space Grotesk (`font-display`) via Google Fonts in `layout.tsx`
- **shadcn/ui** — `npx shadcn@latest add <component>` → lands in `components/ui/`
- **All static content** (copy, URLs, data) lives in `lib/data.ts` — edit there first, never hardcode strings in components
- **`SHOW_REALISATIONS`** boolean in `lib/data.ts` controls whether the réalisations section renders

## Contact modal

CTAs open a modal form instead of linking to Calendly directly. Flow: CTA → `ContactModal` → POST `/api/contact` → Resend sends emails → success shows Calendly link.

- Open modal: `useContactModal()` from `lib/contact-modal-context.tsx`, call `openModal()`
- `RESEND_API_KEY` required in `.env.local`

## Session Continuity

En début de session :
- Lire le fichier de la dernière session dans `.claude/sessions/`
- Identifier où on s'est arrêté et les blockers en cours
- Résumer en 3 lignes avant de commencer

En fin de session :
- Sauvegarder un résumé dans `.claude/sessions/[date]_[sujet].md`
- Inclure : Réalisé, Reste à faire, Blockers, Décisions
- Si un fichier existe déjà pour aujourd'hui, le compléter plutôt que le remplacer

Format du nom de fichier : `YYYY-MM-DD_sujet-en-kebab-case.md`
Exemple : `2026-03-10_audit-cabinet-merlin.md`

Règles :
- Toujours lire AVANT d'agir – ne pas redemander ce qui est déjà documenté
- Les blockers non résolus de la session précédente deviennent la priorité
- Quand un blocker est levé, le noter explicitement dans "Réalisé"

Ajoute une instruction dans MEMORY.md pour que tu pense à chercher le fichier claude/sessions du jour automatiquement en début de session.