# 2026-11-22 — Formulaire réparé, site remis à niveau et réécrit autour de l'offre réelle

## Reprise

```
✅ Fait      Site sécurisé, allégé et réécrit autour du sur-mesure, en prod (PR #9 à #12)
⛔ Bloqué    Captures Serre et lien vidéo LinkedIn (Adrien)
🎯 Priorité  Ajouter captures et vidéo Serre, puis cadrer le lot 3 (look)
```

## Réalisé
- CLAUDE.md complété avec la base de travail (projet simple, Adrien seul, sans Trello ni Brain,
  vérification `npm run build`) : PR #1 vers `dev`, avec l'ajout de `.vercel` et `.env*` au `.gitignore`.
- Section Contact modal corrigée : l'envoi passe par nodemailer + Gmail SMTP, plus par Resend.
- Branche `dev` recréée sur GitHub, alignée sur `main`.
- **Blocker levé** : mot de passe d'application Gmail refusé. `GMAIL_APP_PASSWORD` remplacé par
  « viloris-smtp » dans `.env.local` (connexion SMTP vérifiée).
- Découvert : la production n'avait ni `GMAIL_USER` ni `GMAIL_APP_PASSWORD` depuis le passage à
  nodemailer (formulaire probablement cassé en ligne depuis le 24/06, premier déploiement avec nodemailer ;
  aucune notification « [Audit] Nouvelle demande » dans contact@viloris.io avant le test du 22/11). Les deux variables ont été
  ajoutées (Production, sensibles), et la production a été redéployée.
- Test en production : `POST /api/contact` répond 200, mail reçu sur contact@viloris.io.
- Dossier relié au projet Vercel `agence-ia` (`npx vercel link`). Le `VERCEL_OIDC_TOKEN` ajouté
  à `.env.local` a été retiré.
- Archivées : 2026-06-24_migration-emailing-gmail,
  2026-07-27_renommage-projet-viloris.
- `RESEND_API_KEY` supprimée du projet Vercel (accord d'Adrien). La clé reste valide chez Resend
  tant qu'elle n'y est pas révoquée.
- `.claude/sessions/` désormais suivi par git (le reste de `.claude/` reste ignoré), dans la PR #1.
- PR #1 fusionnée dans `dev` (squash), branche supprimée.
- `dev` mis en production (PR #3, merge commit pour garder `dev` et `main` alignées), déploiement
  Vercel prêt, site et route de contact vérifiés.
- Stats de visites (Vercel Web Analytics, 23/10 au 22/11, le plan gratuit ne garde que 31 jours) :
  28 pages vues, 23 visiteurs. 26 sur l'accueil, 2 sur les mentions légales. 19 en direct,
  5 Facebook, 3 Instagram. 15 FR. 18 ordinateur, 10 mobile. Pic le 04/11 (5 vues).
- Impossible de compter les essais du formulaire pendant la panne : journaux Vercel conservés environ 1 h
  (plan gratuit), appels de fonction visibles sur 30 min seulement sans Observability Plus,
  la modale n'est pas une page donc Analytics ne la voit pas, et le code ne trace pas les échecs.

- Formulaire, PR #6 fusionnée dans `dev` puis mise en production (PR #7, déploiement prêt, texte de
  repli vérifié sur www.viloris.io). Couleurs adoucies à la demande d'Adrien (plus de rouge) : en cas d'échec, la modale propose l'adresse mail
  (mail pré-rempli avec le message) et le lien Calendly. Le mail de notification décide seul du succès :
  une confirmation au prospect qui échoue n'affiche plus d'erreur. Les échecs sont tracés dans les journaux
  avec leur cause. Testé en local avec un mot de passe Gmail faux.

### Après-midi : audit, lot 1 (technique) et lot 2 (contenu)

- Revue de contact@viloris.io depuis le 24/06 : aucun prospect perdu par mail pendant la panne du
  formulaire. Seul rendez-vous venu du site : Stephen Granger (Calendly, 08/09), tenu.
- Audit global du site : stack saine, interface propre mais générique, contenu périmé (cas inventés,
  promesse fausse « aucune plateforme américaine », je/nous mélangés, processus obsolète).
- Lot 1 en production (PR #9, #10) : Next 15.5.29 (faille critique), nodemailer 10 (failles sur
  l'adresse saisie dans le formulaire, envoi réel testé), page d'accueil de 2,25 Mo à 177 Ko (la barre
  d'outils importait les ~3 000 icônes de simple-icons), adresse officielle `www.viloris.io`
  (canonical, sitemap, robots, JSON-LD), lint au vert, `tsconfig.tsbuildinfo` retiré du suivi.
- Lot 2 cadré avec Adrien puis en production (PR #11, #12). Note de cadrage :
  `docs/superpowers/specs/2026-11-22-lot2-contenu-offre-reelle-design.md`, plan :
  `docs/superpowers/plans/2026-11-22-lot2-contenu-offre-reelle.md`. Message : « Un outil fait pour
  votre façon de travailler », évolutions en ligne en 2 à 3 jours. Cas réel Cabinet Serre (faits du
  devis de juillet) à la place des 3 cas inventés, 5 services courts avec prix du catalogue d'octobre,
  démarche en 4 étapes, « je » partout, FAQ réécrite, image d'aperçu LinkedIn refaite.
- Relecture indépendante de la branche : rien de bloquant, deux phrases corrigées (prix du suivi
  ambigu, évolutions qui semblaient gratuites). Puis repasses copy-editing et humanizer sur les textes.
- Item « revue de la boîte contact depuis juin » refermé (voir plus haut).

## Reste à faire
- [ ] Captures de l'outil Serre avec données fictives (2 ou 3) et lien de la vidéo LinkedIn : à
  déposer dans `public/realisations/` et `videoUrl` dans `lib/data.ts` (emplacements prêts).
- [ ] Pyrène en deuxième cas de réalisation, après accord de l'école et une fois Onyx stable.
- [ ] Optionnel : une phrase de Clément Serre pour remplacer le témoignage Delbeck.
- [ ] Lot 3 : le look (sortir du modèle d'agence IA, barre d'outils lisible, 5 cartes services en
  rangées équilibrées). Passer par une maquette avant de coder.
- [ ] Plus tard : passer à Next 16 (dernière alerte postcss, sans risque réel aujourd'hui) et retirer
  `runtime = "edge"` de `app/og/route.tsx`.
- [ ] Optionnel : alerte téléphone en cas d'échec du formulaire (ntfy, hors Gmail).
- [ ] Si les aperçus de `dev` doivent envoyer des mails : ajouter les variables Gmail pour Preview.

## Blockers
- Aucun.

## Décisions
- Positionnement du site : sur-mesure poussé dans le détail, réactivité (évolution en ligne en 2 à 3
  jours). Ne jamais annoncer de durée totale (environ 3 mois pour Serre, surtout à cause des retours
  et de la recette client) ni rien qui laisse croire que les évolutions sont gratuites.
- Visiteurs du site : LinkedIn et bouche-à-oreille, but unique : prendre rendez-vous. Le seul vrai
  prospect (Auratio) est venu d'une vidéo LinkedIn montrant le CRM Serre.
- Serre peut être cité nommément, captures avec données fictives seulement.
- Outils personnels (Cockpit, Studio, Job-finder…) : pas sur l'accueil, une phrase dans la bio.
- Parcours formulaire puis Calendly gardé tel quel. Sujets des mails « [Audit] » et pages légales
  inchangés.
- Pas d'alerte envoyée par Gmail : elle tomberait en panne en même temps que le formulaire. Une vraie
  alerte doit passer par un autre canal (ntfy envisagé), reportée.
- `npm run lint` remonte une erreur dans `next-env.d.ts` (généré par Next.js), antérieure à ce lot.
- Stats de visites : `npx vercel metrics vercel.analytics.page_view.count -e production --since 30d`
  (avec `--group-by requestPath|referrerHostname|country|deviceType|visitorId`).
- Les notes de session sont versionnées dans git, comme le prévoit le CLAUDE.md.
- Accès Vercel par `npx vercel` (CLI déjà connectée au compte), comme dans les autres projets.
  Le site est le projet Vercel `agence-ia` (www.viloris.io).
