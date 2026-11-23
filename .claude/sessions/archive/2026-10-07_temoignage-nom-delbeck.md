# 2026-10-07 — Nom du témoignage

## Réalisé
- Témoignage : auteur renommé « Marine Benoit-Jannin » → « Marine Delbeck » (`lib/data.ts`)

## Reste à faire
- Rien

## Blockers
- Aucun

## Décisions
- Graphie « Delbeck » (capitalisation standard, cohérente avec le prénom)

## Complément — build Vercel cassé
- Réalisé : blocker levé — `next/font/google` plantait (Google Fonts renvoie parfois des URLs `/l/font?kit=` sans extension → `TypeError ... reading '1'` dans loader.js). Pas corrigé dans Next 15.5.27.
- Fix : polices auto-hébergées via `next/font/local` (`app/fonts/*.woff2`, latin, variables). Build local OK, poussé (b3b6e2a). CLAUDE.md mis à jour.
- Déploiement Vercel confirmé OK par Adrien.
