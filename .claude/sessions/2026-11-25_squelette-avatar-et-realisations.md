# 2026-11-25 — Squelette de la page, avatar et réalisations

## Reprise

```
✅ Fait      Squelette validé : avatar en guide, 3 cas clients, section « L'atelier »
⛔ Bloqué    Chiffres Demeteria, accords Serre et Pyrène (Adrien)
🎯 Priorité  Plan d'inspiration, étape 1 : fixer avec Adrien les critères d'une DA « parfaite »
```

## Réalisé

- Méthode en trois temps confirmée (« on reprend ») : squelette d'abord, DA ensuite, textes complets
  enfin.
- **Avatar d'Adrien** (créé dans viloris-studio, poses dans `marques/perso/sources/avatar/` et
  `app/outils/avatar-salut.png` du studio) retenu comme **guide** du site, pas comme mascotte
  partout : haut de page (coucou, à la place du faux terminal), réalisations (il pointe), fondateur
  (à côté d'une vraie photo), dernier appel (il invite). Bulles au vouvoiement.
- **Inventaire des projets** d'Adrien (dossiers de `Workspace/apps` et clients de Brain) et tri par
  pertinence pour le site.
- **Squelette validé** par Adrien :
  1. Haut de page, avec l'avatar
  2. Le constat
  3. Réalisations clients : Cabinet Serre, École Pyrène (Onyx), Demeteria (campagne d'e-mails)
  4. Services
  5. Processus
  6. L'atelier (nouveau) : Cockpit, Viloris Studio, Job Finder, Bookvox
  7. Fondateur, vraie photo + logos des grandes marques descendus ici
  8. FAQ
  9. Dernier appel, avec l'avatar
  Plus : un seul libellé de bouton (« Réserver mon audit gratuit »), barre des logos d'outils
  retirée, textes actuels inchangés.

- **Veille « solopreneurs qui vendent du sur-mesure »** : 16 sites visités en direct et capturés,
  8 retenus sur une planche numérotée R1 à R8 (https://claude.ai/artifact/191DBUtDNjgs2Er3dspG5K).
  Pas de coup de cœur d'Adrien à ce stade.
- **Plan pour trouver la référence idéale**, proposé à Adrien (non encore lancé) :
  1. Critères d'une DA « parfaite » et refus, ensemble (5 min).
  2. Ratissage d'environ 60 sites d'agences et studios (Awwwards, Godly, siteinspire, Land-book,
     vitrines Framer et Webflow), captures premier écran, deuxième écran et mobile, par le script
     Playwright de la session (à recréer : il était dans le dossier temporaire).
  3. Planche de tri ❤️ / ✗ pour Adrien (10 min), sélection enregistrée sur la page.
  4. Analyse des ❤️, puis deuxième tour de 15 sites qui partagent leurs traits.
  5. Finale à 3 sites visités ensemble, un modèle principal et 1 ou 2 emprunts.
  6. Fiche DA : ce qu'on reprend du modèle, ce qui reste à Viloris (logo, bleu, avatar).
- Archivée : 2026-11-22_claude-md-et-formulaire-prod (close, ses items ouverts sont tous repris
  ci-dessous).

## Reste à faire

- [ ] Lancer le plan d'inspiration (voir Réalisé), en commençant par les critères avec Adrien.

- [ ] Adrien : numéros des références qui lui plaisent sur la planche du canvas
  (https://claude.ai/artifact/8tZgHh82B1Av6FJRGGCpE3), en gardant en tête un personnage 3D doux sur
  fond sombre. Nouvelle planche du 25/11, sites d'indépendants qui vendent du sur-mesure, numérotés
  R1 à R8 : https://claude.ai/artifact/191DBUtDNjgs2Er3dspG5K (R1 Josh Comeau = personnage 3D dans
  le style de l'avatar).
- [ ] Étape 2 : pistes de DA sur le squelette validé, avec l'avatar, à partir du modèle retenu.
- [ ] Adrien : chiffres de la campagne Demeteria (envoyés, ouvertures, réponses, rendez-vous), à
  lire dans Emelia. Brain n'a que le catalogue : 161 contacts vérifiés, 29 adresses invalides
  retirées.
- [ ] Adrien : accord de Clément Serre et de l'École Pyrène pour être nommés (sinon cas anonymes :
  « un cabinet comptable de 20 personnes », « une école de formation »).
- [ ] Captures de l'atelier avec données fictives : Cockpit (argent et clients réels), Job Finder
  (données des amis). Bookvox et Viloris Studio à capturer aussi.
- [ ] Nouveau titre pour la section Réalisations (l'actuel « Ce que nous pouvons construire pour
  vous » ne colle plus à de vrais cas), à faire valider.
- [ ] Une vraie photo d'Adrien pour la section fondateur.
- [ ] Étape 3 : textes complets section par section, dans la DA retenue, validés un par un.
- [ ] Corriger la police des titres (bug Space Grotesk), indépendamment du look.
- [ ] Accessibilité à corriger quel que soit le look : contraste du texte blanc sur les boutons bleus,
  étiquettes du formulaire, focus de la modale, mouvement réduit, cibles tactiles mobiles.
- [ ] Lien de la vidéo LinkedIn du CRM Serre, si on veut l'afficher.
- [ ] Optionnel : une phrase de Clément Serre pour remplacer le témoignage Delbeck.
- [ ] Plus tard : passer à Next 16 (2 alertes PostCSS restantes, sans risque réel) et retirer
  `runtime = "edge"` de `app/og/route.tsx`.
- [ ] Optionnel : alerte téléphone en cas d'échec du formulaire (ntfy, hors Gmail).
- [ ] Si les aperçus de `dev` doivent envoyer des mails : ajouter les variables Gmail pour Preview.
- [ ] Optionnel : activer les alertes Dependabot sur le dépôt GitHub (désactivées aujourd'hui).

## Blockers

- Aucune référence retenue par Adrien sur les deux planches : d'où le plan d'inspiration.
- Chiffres Demeteria et accords Serre / Pyrène (Adrien), nécessaires pour la section Réalisations.

## Décisions

- L'avatar est un guide, présent à 4 endroits, pas une mascotte dans chaque section. Une vraie photo
  reste dans la section fondateur.
- Deux sections de preuve : les clients (Réalisations) et les outils d'Adrien (L'atelier).
- Écartés du site : Goal Master et l'app de fitness (vie perso, rien à vendre à une PME), Auratio
  (proposition non signée), démos et scraper non livrés.
- Bookvox (outil pour le père d'Adrien, abandonné au profit de viloris-studio) : gardé pour son
  effet visuel, présenté comme « l'outil de publication d'un écrivain », sans dire qu'il tourne.
- On s'inspire d'un site modèle sans le copier à l'identique (droit d'auteur, et Viloris doit
  garder son logo, son bleu et l'avatar).
- Les 3 cas fictifs actuels (qualification de leads, synchro CRM, suivi post-devis) seront remplacés
  par les vrais cas.
