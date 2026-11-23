# 2026-11-23 — Audits du look, maquettes, et retour de l'ancien contenu en production

## Reprise

```
✅ Fait      Ancien contenu remis en prod, audits et veille faits, 4 maquettes et 25 références sur le canvas
⛔ Bloqué    Choix des références qui plaisent (Adrien)
🎯 Priorité  Refaire 2 maquettes ambitieuses à partir des références choisies
```

## Réalisé

- **Captures Serre** prises sur la base de test du CRM (30 dossiers fictifs, compte de démo Clark
  Kent), avec masquage à l'écran du bandeau « Données de test », du nom d'une collaboratrice réelle,
  d'une adresse et d'un téléphone. PR #14 fusionnée dans `dev`, puis retirée avec le lot 2 (voir plus
  bas). Les fichiers restent dans l'historique git (commit `ea1d595`).
- **Audit visuel** (skill `impeccable` critique, deux analyses indépendantes) : 22/32, look « agence
  IA » générique. Rapport : `docs/audits/2026-11-23-audit-visuel.md`.
- **Bug trouvé** : la police des titres Space Grotesk ne se charge jamais (`@theme inline` écrit le
  nom littéral, `next/font/local` déclare un nom interne). Les titres s'affichent dans la police du
  système. Non corrigé.
- **18 skills installés** (globaux) après vérification des sources : Jakub Krehel (better-*,
  interface-review), Emil Kowalski (emil-design-eng, improve-animations, find-animation-opportunities,
  choreograph, animation-vocabulary), anti-slop (4), Vercel web-design-guidelines.
- **Quatre passes d'audit supplémentaires** (anti-cliché, interface et animations, conversion et
  texte) et **deux veilles** (studios de sur-mesure et logiciels pour comptables ; références
  visuelles). Synthèse : `docs/audits/2026-11-23-passes-et-veille.md`.
- **Canvas de maquettes** (privé) : https://claude.ai/artifact/8tZgHh82B1Av6FJRGGCpE3 . Quatre pistes
  (carnet d'atelier, plan technique clair, plan technique sombre, lettre ouverte), jugées « moches et
  peu inspirées » par Adrien. Planche de 25 références numérotées ajoutée en dessous.
- **Retour de l'ancien contenu en production** à la demande d'Adrien : PR #15 (annule le lot 2 #11
  et les captures #14, garde le lot 1, les docs de cadrage et le `.gitignore`) puis #16 vers `main`.
  Contenu vérifié identique à l'état d'après le lot 1, déploiement Vercel prêt, ancien texte visible
  sur www.viloris.io, correction du formulaire (#6) toujours en place.
- Archivée : 2026-10-07_temoignage-nom-delbeck (close, rien à reporter).

## Reste à faire

- [ ] Adrien : donner les numéros des références qui lui plaisent (planche « Références » du canvas).
- [ ] Refaire 2 maquettes plus ambitieuses (vraie direction artistique, logo conservé) à partir de
  ces références. Mobile ensuite sur la piste retenue.
- [ ] Ne plus toucher aux textes ni aux sections sans validation d'Adrien, texte par texte.
- [ ] Corriger la police des titres (bug Space Grotesk), indépendamment du look.
- [ ] Accessibilité à corriger quel que soit le look : contraste du texte blanc sur les boutons bleus,
  étiquettes du formulaire, focus de la modale, mouvement réduit, cibles tactiles mobiles.
- [ ] Captures Serre : à remettre plus tard si Adrien le souhaite (commit `ea1d595`).
- [ ] Lien de la vidéo LinkedIn du CRM Serre, si on veut l'afficher.
- [ ] Pyrène en deuxième cas de réalisation, après accord de l'école et une fois Onyx stable.
- [ ] Optionnel : une phrase de Clément Serre pour remplacer le témoignage Delbeck.
- [ ] Plus tard : passer à Next 16 (2 alertes PostCSS restantes, sans risque réel) et retirer
  `runtime = "edge"` de `app/og/route.tsx`.
- [ ] Optionnel : alerte téléphone en cas d'échec du formulaire (ntfy, hors Gmail).
- [ ] Si les aperçus de `dev` doivent envoyer des mails : ajouter les variables Gmail pour Preview.
- [ ] Optionnel : activer les alertes Dependabot sur le dépôt GitHub (désactivées aujourd'hui).

## Blockers

- Choix des références qui plaisent (Adrien).

## Décisions

- **Le contenu du lot 2 est retiré** : Adrien ne veut pas des nouveaux textes ni des nouvelles
  sections. Le site est revenu à l'identique d'avant le lot 2, y compris les 3 anciens cas clients et
  la phrase « aucune plateforme américaine », que l'audit du 22/11 jugeait inexacts. Choix d'Adrien.
- Lot 3 = refonte complète du look en gardant son identité (le logo au minimum). Maquette d'abord.
- Offres IA et barre de logos : « on avisera au fur et à mesure ».
- Les maquettes sobres ne conviennent pas : la prochaine série part des références qu'Adrien aime et
  vise une direction artistique forte, deux pistes poussées plutôt que quatre esquisses.
- Le logo SVG pour fond clair du site (`public/logo-viloris-light.svg`) porte un ancien violet
  `#5A62E5` ; le bleu actuel est autour de `#5FA8D8`. À harmoniser lors de la refonte.
- Captures d'un outil client : toujours prises sur la base de test fictive, avec les noms des vrais
  salariés masqués.
