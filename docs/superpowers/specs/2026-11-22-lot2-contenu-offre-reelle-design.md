# Lot 2 : contenu du site aligné sur l'offre réelle

Date : 22/11/2026 · Statut : validé par Adrien le 22/11/2026

## Pourquoi

Le site raconte l'offre d'il y a six mois : trois services, trois cas inventés aux chiffres
inventés, une promesse fausse sur les données (« aucune plateforme américaine »), « je » et
« nous » mélangés, un processus en 6 étapes qui n'est plus le bon. Le seul vrai prospect
(Auratio) est venu après une vidéo LinkedIn montrant le CRM du Cabinet Serre, et voulait la
même chose.

## Pour qui, pour quoi

- Visiteurs : viennent de LinkedIn ou du bouche-à-oreille, connaissent déjà un peu Adrien.
  Ils vérifient que c'est sérieux et que ça les concerne.
- But unique : qu'ils prennent rendez-vous.

## Le message

> Un outil fait exactement pour votre façon de travailler. Vous demandez un changement,
> vous l'avez en 2 à 3 jours.

- Sur mesure, poussé dans le détail, réactif. Pas de durée totale annoncée (environ 3 mois
  pour Serre, surtout à cause des retours et de la recette côté client).
- Jamais « pas sur devis » ni rien qui laisse entendre que les évolutions sont gratuites.
- Preuve : le CRM du Cabinet Serre, cité nommément, montré avec des données fictives.

## Approches envisagées

- **A. Réécrire le contenu dans la page actuelle** — retenue. Retire vite le faux, montre le
  vrai, rien à jeter au lot 3.
- B. Contenu et look en même temps : cohérent, mais long, maquettes nécessaires, et le faux
  reste en ligne pendant ce temps.
- C. Page dédiée au cas Serre en plus de l'accueil : utile pour les liens LinkedIn, reportée.

## La page, section par section

| # | Section | Contenu |
|---|---|---|
| 1 | Haut de page | Titre sur l'outil fait pour votre façon de travailler, accent sur « changement en 2 à 3 jours ». Bouton « Prendre rendez-vous ». La carte animée de droite devient le journal d'une demande de modification (demande lundi → en ligne mercredi). Logos des grandes marques gardés, présentés comme expérience passée. |
| 2 | Barre d'outils | Inchangée (lot 3). |
| 3 | Constat | Les 3 constats repris du catalogue : ressaisies, relances oubliées, outils isolés / le tableur partagé ne suffit plus. |
| 4 | Réalisation | Un seul cas, réel : Cabinet Serre. Problème, solution, chiffre « 2 à 3 jours par évolution », captures avec données fictives, lien vers la vidéo LinkedIn. Badge « Client » au lieu de « Cas d'usage ». |
| 5 | Ce que je fais aussi | Les autres familles du catalogue en court, avec prix d'entrée HT : audit IA, automatisations et connexions, agents IA, site web, formation et suivi. |
| 6 | Démarche | Les 4 étapes du catalogue : appel découverte gratuit, proposition sous 48 h, réalisation par étapes avec démonstration, suivi dans la durée. |
| 7 | Fondateur | Bio en « je », alignée sur le sur-mesure. Témoignage Delbeck gardé tant qu'il n'y a pas de citation client. |
| 8 | FAQ | Réécrite : délais (première version puis ajustements), prix, données (hébergées dans des services conformes RGPD, restent celles du client), outils. |
| 9 | Appel final | Rendez-vous, inchangé dans la forme. |

Aussi : titre et description de la page (partage LinkedIn), liens du menu, textes du
formulaire en « je », mail de confirmation inchangé.

## Hors périmètre (no-gos)

- Le look, les couleurs, la barre d'outils : lot 3.
- Le parcours formulaire puis Calendly : réparé le 22/11, on n'y touche pas.
- Référencement Google, pages légales, page dédiée au cas Serre.
- Pyrène et Auratio cités : pas sans leur accord explicite. Pyrène devient la deuxième carte
  de réalisation dès son accord et une fois Onyx stable (simple ajout dans `lib/data.ts`).
- Les outils personnels d'Adrien (Cockpit, Studio, Job-finder, Goal-master…) : pas sur
  l'accueil, ils ne parlent pas du problème du visiteur. Une phrase dans la bio suffit
  (« je construis aussi mes propres outils »). Une page « labo » éventuelle, plus tard.

## Fondrières

- Les captures Serre n'arrivent pas : la section part avec un emplacement prêt et le texte
  seul, les images s'ajoutent ensuite sans toucher au code.
- La réécriture des textes dérive en refonte : on reste dans les composants existants,
  seul `lib/data.ts` et les ajustements minimes de composants bougent.

## À fournir par Adrien

- Captures de l'outil Serre avec données fictives (2 ou 3).
- Lien de la vidéo LinkedIn.
- Optionnel : une phrase de Clément Serre pour remplacer le témoignage actuel.

## Laissé au constructeur

Formulations exactes (relues par Adrien avant mise en ligne), ordre fin des sous-éléments,
adaptation des composants existants au nouveau contenu.
