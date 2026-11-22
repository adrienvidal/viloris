# 2026-11-22 — CLAUDE.md à jour, formulaire de contact réparé en production

## Reprise

```
✅ Fait      CLAUDE.md aligné sur la base (PR #1), formulaire de contact réparé en prod
⛔ Bloqué    Rien
🎯 Priorité  Relire et fusionner la PR #1
```

## Réalisé
- CLAUDE.md complété avec la base de travail (projet simple, Adrien seul, sans Trello ni Brain,
  vérification `npm run build`) : PR #1 vers `dev`, avec l'ajout de `.vercel` et `.env*` au `.gitignore`.
- Section Contact modal corrigée : l'envoi passe par nodemailer + Gmail SMTP, plus par Resend.
- Branche `dev` recréée sur GitHub, alignée sur `main`.
- **Blocker levé** : mot de passe d'application Gmail refusé. `GMAIL_APP_PASSWORD` remplacé par
  « viloris-smtp » dans `.env.local` (connexion SMTP vérifiée).
- Découvert : la production n'avait ni `GMAIL_USER` ni `GMAIL_APP_PASSWORD` depuis le passage à
  nodemailer (formulaire probablement cassé en ligne depuis le 07/10). Les deux variables ont été
  ajoutées (Production, sensibles), et la production a été redéployée.
- Test en production : `POST /api/contact` répond 200, mail reçu sur contact@viloris.io.
- Dossier relié au projet Vercel `agence-ia` (`npx vercel link`). Le `VERCEL_OIDC_TOKEN` ajouté
  à `.env.local` a été retiré.
- Archivées (simple `mv` : `.claude/` est ignoré par git ici) : 2026-06-24_migration-emailing-gmail,
  2026-07-27_renommage-projet-viloris.

## Reste à faire
- [ ] Relire et fusionner la PR #1 (CLAUDE.md, .gitignore, sessions désormais suivies par git).
- [ ] Si les aperçus de `dev` doivent envoyer des mails : ajouter les variables Gmail pour Preview.

- `RESEND_API_KEY` supprimée du projet Vercel (accord d'Adrien). La clé reste valide chez Resend
  tant qu'elle n'y est pas révoquée.
- `.claude/sessions/` désormais suivi par git (le reste de `.claude/` reste ignoré), dans la PR #1.

## Blockers
- Aucun.

## Décisions
- Les notes de session sont versionnées dans git, comme le prévoit le CLAUDE.md.
- Accès Vercel par `npx vercel` (CLI déjà connectée au compte), comme dans les autres projets.
  Le site est le projet Vercel `agence-ia` (www.viloris.io).
