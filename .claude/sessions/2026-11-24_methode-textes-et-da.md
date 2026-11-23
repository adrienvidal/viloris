# 2026-11-24 — Méthode pour les textes du site et ordre texte / DA

## Reprise

```
✅ Fait      Outils de rédaction repérés (déjà installés), méthode proposée : texte d'abord, DA ensuite
⛔ Bloqué    Feu vert pour lancer la structure de page, choix des références (Adrien)
🎯 Priorité  Structure de la page + une accroche par section, à valider par Adrien
```

## Réalisé

- **Recherche de skills de rédaction** (« textes vendeurs qui donnent envie de prendre rendez-vous ») :
  rien à installer. Le skill de référence de l'écosystème (`coreyhaines31/marketingskills@copywriting`,
  265 000 installations) est déjà présent via `marketing-skills`. Combinaison retenue :
  `marketing-skills:copywriting` (rédaction), `marketing-skills:cro` (chaque section pousse vers le
  rendez-vous), `marketing-skills:marketing-psychology` (leviers), `antislop-copywriting` + `humanizer`
  (passe anti-IA).
- **Question d'Adrien : DA d'abord (faux contenu) ou contenu d'abord (maquette basique) ?**
  Recommandation donnée : contenu d'abord, en trois temps (voir Décisions). Adrien a reporté la
  décision à la prochaine session.
- Archivée : 2026-11-08_formulaire-contact-smtp (close, tous ses items faits).

## Reste à faire

- [ ] Adrien : valider la méthode en trois temps (ou choisir une autre voie).
- [ ] Adrien : dire en une phrase ce qui lui avait déplu dans les textes du lot 2, pour ne pas refaire
  la même erreur.
- [ ] Étape 1 : structure de la page (ordre et rôle des sections) + titre et phrase clé de chaque
  section + bouton de rendez-vous, sur maquette nue (gris, une police). Validation d'Adrien.
- [ ] Étape 2 : 2 pistes de DA ambitieuses posées sur ce squelette réel, à partir des références
  choisies sur la planche du canvas (https://claude.ai/artifact/8tZgHh82B1Av6FJRGGCpE3).
- [ ] Étape 3 : textes complets section par section, dans la DA retenue, validés un par un.
- [ ] Adrien : donner les numéros des références qui lui plaisent (peut se faire en parallèle de
  l'étape 1).
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

- Feu vert d'Adrien sur la méthode, et ce qui n'allait pas dans les textes du lot 2 (Adrien).
- Choix des références visuelles (Adrien), nécessaire seulement à l'étape 2.

## Décisions

- Aucun skill à installer pour la rédaction : les skills `marketing-skills` déjà en place suffisent.
- Méthode proposée (à confirmer par Adrien) : texte avant DA. Les maquettes du 23/11, faites sans
  message arrêté, ont été jugées peu inspirées ; une DA forte a besoin de savoir ce qu'elle exprime, et
  une DA dessinée sur du faux texte casse quand le vrai texte arrive. On ne finit pas tout le texte
  avant la DA : la structure et les accroches suffisent pour lancer les 2 pistes.
- Règle maintenue : aucun texte du site ne change sans validation d'Adrien, texte par texte.
