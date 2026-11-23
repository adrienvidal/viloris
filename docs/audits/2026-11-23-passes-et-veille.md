# Passes d'audit et veille pour la refonte (lot 3), 23/11/2026

Suite de `2026-11-23-audit-visuel.md`. Quatre passes supplémentaires avec des skills spécialisés
(anti-slop, Jakub Krehel `better-interface`, Vercel `web-design-guidelines`, Emil Kowalski
`improve-animations` et `find-animation-opportunities`, marketing `cro` et `copywriting`), puis
deux veilles : studios de sur-mesure et logiciels que les comptables connaissent, et références
visuelles dans des galeries de vrais sites.

## Ce que toutes les passes disent ensemble

1. **La preuve est enterrée.** Le cas Serre arrive en quatrième, sans image en ligne, sans
   vidéo (`videoUrl` vide alors que la vidéo LinkedIn a amené le seul vrai prospect), sans parole
   du client. Son grand chiffre (« 2 à 3 jours ») est la promesse commerciale, pas un résultat.
2. **Le visuel est le kit « agence IA ».** Faux terminal, halos, dégradés, pulsation, logos
   défilants, cartes identiques, sur-titres partout, flou sur quatre surfaces, six couleurs
   d'accent, une flèche sur chaque bouton.
3. **Toutes les sections ont le même gabarit.** Même sur-titre, même titre `md:text-6xl`,
   même carte arrondie : rien ne dit que le cas Serre est le moment fort.
4. **Le bouton ne tient pas sa promesse.** Quatre à six libellés, « Prendre rendez-vous » ouvre
   un formulaire, et l'écran de succès dit « je reviens vers vous sous 24 h » juste à côté du
   lien Calendly.
5. **La bonne nouvelle : le texte est solide.** Première personne, chiffres réels, prix affichés,
   pas de tirets cadratins. Ce sont surtout des slogans répétés qu'il faut retirer.

## Objections du visiteur (passe conversion)

| # | Objection | Réponse sur le site |
|---|---|---|
| 1 | Est-ce pour moi ? Que fait-il exactement ? | Partielle : le titre ne nomme pas « le tableur partagé » |
| 2 | L'a-t-il fait pour une entreprise comme la mienne ? | Faible : Serre trop bas, ni vidéo ni citation |
| 3 | Est-ce sérieux, qui est-il ? | Oui mais mauvaise preuve : logos de grandes marques en haut, témoignage d'un collègue Chanel |
| 4 | Combien ? | Seulement dans la FAQ (dès 3 500 € HT) ; « Agents IA dès 400 € » ancre un prix trop bas |
| 5 | Il est seul : et s'il n'est plus disponible ? | **Non traitée** : le plus gros manque |
| 6 | Mon équipe va-t-elle s'en servir ? | Oui |
| 7 | Après la livraison, les changements sont-ils gratuits ? | Oui dans la FAQ |
| 8 | Combien de temps avant de l'utiliser ? | Volontairement flou (décision du 22/11). Risque : le titre de page « ajustés en 2 à 3 jours » se lit comme une durée totale dans l'aperçu LinkedIn |

## Ordre de page proposé

1. Haut de page : nommer le problème (le tableur partagé), montrer un vrai écran Serre, Adrien
   visible, un seul bouton.
2. Cas Serre juste après, avec la vidéo intégrée, l'avant servant de section « problème ».
3. Comment on travaille (4 étapes), puis l'après-livraison : changements chiffrés, en ligne en
   2 à 3 jours, suivi dès 140 €, prix de départ 3 500 € HT.
4. Qui je suis : photo, parcours (les logos Chanel, Fnac… descendent ici), citation Serre.
5. FAQ, avec « Et si vous n'êtes plus disponible ? ».
6. Dernier appel.

À couper ou réduire : la barre de logos d'outils, la section « Ce que je fais aussi » (une ligne
ou une page à part), les logos de marques dans le haut de page, les blocs d'appel aux libellés
différents.

## Preuve à aller chercher

- Captures (faites) et vidéo LinkedIn (lien à fournir).
- Un compte tiré de tes propres données : « X évolutions livrées depuis le lancement ».
- À demander à Clément Serre : deux phrases avant/après signées (nom, rôle, photo), l'accord pour
  le logo du cabinet, un résultat qu'il assume (temps gagné sur les relances, échéances plus
  ratées), et s'il accepte un appel de référence avec un prospect sérieux.

## Bouton

- Un seul libellé partout : **« Réserver un appel de 30 min »**, avec « Gratuit · sans engagement »
  dessous.
- Recommandation : ouvrir Calendly directement, avec une question « Votre situation en deux
  lignes ». **Revient sur la décision du 22/11** (formulaire puis Calendly) : à trancher par Adrien.
- Si le formulaire reste : nom, mail, une phrase ; plus de choix de services ; Calendly intégré à
  l'écran de succès ; retirer « je reviens vers vous sous 24 h ».

## Textes proposés (à valider, rien n'est appliqué)

| Où | Actuel | Proposé |
|---|---|---|
| Titre | Un outil fait pour votre façon de travailler. | Je remplace votre tableur partagé par un outil fait pour votre équipe. |
| Sous-titre | (générique) | Le Cabinet Serre suivait 500 dossiers dans un Excel partagé à 20. Je lui ai construit son outil. Quand il veut un changement, je le chiffre, et il est en ligne en 2 à 3 jours. |
| Cas Serre, chiffre | 2 à 3 jours pour chaque évolution | 500 dossiers · suivis par 20 collaborateurs dans un seul outil |
| Titre de page | Outils sur mesure pour PME, ajustés en 2 à 3 jours | Votre outil sur mesure, et chaque changement en ligne en 2 à 3 jours |
| Démarche | Du premier appel au suivi, quatre étapes. | Comment on travaille ensemble |
| FAQ | Vos questions, mes réponses | Ce qu'on me demande avant de commencer |
| Faux terminal | De la demande à la mise en ligne : 2 jours | (supprimé ; contredit les « 2 à 3 jours ») |
| Dernier appel | …Parlons-en. | Racontez-moi comment vous suivez vos dossiers aujourd'hui. En 30 minutes, je vous dis ce que je ferais à votre place. |
| Nouvelle FAQ | — | Vous travaillez seul. Et si vous n'êtes plus disponible ? L'outil et les données sont à vous, le code vous est remis avec sa documentation : un autre développeur peut le reprendre. **À vérifier : le code est-il bien remis au client ?** |

« 2 à 3 jours » apparaît 8 fois dans `lib/data.ts` : le garder à deux endroits au plus.
« Conforme RGPD » est une affirmation sans justificatif.

## Accessibilité et formulaire (à corriger quel que soit le look)

- Texte blanc sur les boutons bleus : 2,4 à 2,6:1, il faut 4,5:1. Tous les boutons sont touchés.
- Formulaire : champs sans étiquette liée, choix montrés par la couleur seule, un clic hors de la
  fenêtre efface le message, pas de piège de focus ni de retour du focus, erreurs non annoncées,
  aucun contour de focus visible sur le site.
- Animations : aucun réglage global « mouvement réduit » (`MotionConfig reducedMotion="user"`),
  boucles sans fin sans pause (terminal, point LIVE, curseur, défilé de logos).
- Mobile : cibles tactiles sous 44 px (menu, liens, fermeture de la modale), la barre de bouton
  collante masque le bas de page, haut de page de 1 470 px, page de 14 écrans de haut.
- Contrastes : aucune transparence sur les couleurs de texte, bordures de champ à 3:1 minimum.
- Menu mobile sans `aria-expanded`, pas de lien d'évitement, en-tête et pied dans `<main>`.

## Principes de mouvement pour la refonte (Emil Kowalski)

- Garder : ressort de la modale, fondu de fond 200 ms, accordéon FAQ 300 ms, barre collante 300 ms,
  pression `scale(0.97)` 160 ms, au plus un fondu d'apparition par titre de section (≤ 400 ms,
  12 px).
- Retirer : pulsation, reflet, agrandissement au survol, toutes les boucles, apparitions sur les
  cartes et le texte, décalages uniformes de 100 ms.
- Règles : une seule courbe `cubic-bezier(0.23, 1, 0.32, 1)`, interface sous 300 ms, rien qui bouge
  seul plus de 5 s, survol seulement sur souris, contenu visible même sans JavaScript.
- Verdict : le site a besoin de **moins** de mouvement, pas de plus.

## Veille 1 : studios de sur-mesure et logiciels connus des comptables

Sites regardés : Mapletree Studio (indépendant anglais), Fenxi (studio français, deux
fondateurs), Scroll et Lonestone (agences françaises), Pennylane, Tiime, Qonto, Axonaut,
Sellsy, folk.

Constat : presque aucun indépendant français n'a de site soigné. Il y a une place à prendre.

À reprendre, par ordre d'importance :
1. Montrer le vrai outil en haut de page (folk, Pennylane, Qonto). Les studios ne le font pas,
   c'est leur faiblesse.
2. Mettre le fondateur en avant : « You work directly with Jake » (Mapletree), « Noel vous répond
   sous 24 h » avec sa photo (Scroll).
3. Raconter le cas comme Fenxi : bandeau secteur et taille, « Ça marchait, mais… », ce qui a été
   construit, avant/après, 2 ou 3 résultats en unités de tous les jours, puis « Un cabinet dans
   la même situation ? ».
4. Fond clair et chaud, une seule couleur d'accent. Aucune marque de confiance du secteur n'est
   entièrement sombre.
5. Titre court sur le problème métier, sans mot « tech » ni « IA ».
6. Citations avec nom, rôle et photo.
7. Étapes qui disent ce que le client garde (le code, les accès) : répond à « et s'il disparaît ».
8. Phrase de réassurance sous le bouton.
9. Signes « français et sûr » (hébergé en France, RGPD) : seulement ce qui est vrai.
10. En option : un petit premier pas payant (Fenxi propose un diagnostic à 1 300 € HT).

À éviter : le vocabulaire « experts augmentés par IA » et les émojis, les preuves invérifiables
ou les gros chiffres qu'un indépendant ne peut pas tenir, cacher l'outil derrière des icônes ou
des illustrations.

## Veille 2 : références visuelles

14 sites retenus (galeries siteinspire et minimal.gallery, plus des sites connus) : early.works,
vogel.haus, makingsoftware.com, set.studio, hanno.co, basar.studio, basecamp.com, usefathom.com,
tuple.app, inkandswitch.com, oxide.computer, pennylane.com, are.na, demandespeciale.ca.

Points communs : fond clair et chaud, un seul accent, une police à empattements pour les titres,
de vrais écrans annotés ou légendés, le fondateur visible, presque aucun mouvement automatique.

### Trois pistes pour Viloris (le bleu du logo reste la seule couleur vive)

**A. Carnet d'atelier.** Papier chaud, un grand écran Serre réel annoté à la main en bleu
(« relances en retard ici »), démarche en lignes réglées, petit mot signé avec photo.
Titres Newsreader ou Instrument Serif, texte Inter, notes manuscrites ou police machine.
Papier `#F6F2EA`, encre `#1F2328`, bleu `#3B8FD0`. Mouvement : les annotations se tracent une
fois. Inspiré de Basecamp, early.works, vogel.haus, set.studio.

**B. Plan technique.** Un schéma au trait bleu : tableurs et mails éparpillés à gauche, des nœuds
qui se rejoignent en un outil à droite, qui reprend la forme en réseau du logo. Sections numérotées
comme des figures (« FIG. 02 · Suivi des relances »), écrans dans des cadres fins avec légendes.
Titres Geist ou Inter Display, légendes Geist Mono, fond `#FAFAF9`, encre `#18181B`, traits bleus.
Variante sombre calme possible (`#15171A`, façon Oxide). Mouvement : le schéma se trace une fois au
défilement, les écrans ne changent qu'au clic. Inspiré de makingsoftware.com, oxide.computer,
tuple.app.

**C. Lettre ouverte.** « Bonjour, je suis Adrien… » avec une petite photo, une seule colonne en
police à empattements (Source Serif 4, 20 à 22 px), liste « Viloris, c'est : a. … b. … », un seul
écran pleine largeur avec légende, prix dit simplement, signature avant le contact. Presque aucun
mouvement. La plus rassurante pour un comptable et la moins chère à construire. Inspiré de hanno.co,
usefathom.com, are.na.

Avis de la veille : B est la plus singulière et la seule qui tire parti du logo ; C est la plus sûre ;
B en variante sombre est le plus petit changement si le sombre doit rester.

## Décisions attendues d'Adrien

1. La piste visuelle : A, B, C ou un mélange.
2. Le parcours du bouton : Calendly direct, ou un formulaire réduit (revient sur la décision du 22/11).
3. Le code de l'outil est-il remis au client ? (pour la nouvelle question de FAQ)
4. Ce qu'on demande à Clément Serre (citation, logo, résultat, appel de référence).
5. Le lien de la vidéo LinkedIn.
6. Le sort des offres IA et de la barre de logos (« on avisera »).
