# Audit visuel du site www.viloris.io (23/11/2026)

Base du lot 3 (le look). Deux analyses indépendantes : une revue design à l'œil (ordinateur 1440 px
et mobile 390 px) et un détecteur automatique (code et page en ligne).

## Verdict

Le texte est précis et humain. L'habillage visuel est le kit standard des « agences IA », et il
cache ce texte. Environ 60 % de la page pourrait servir telle quelle à n'importe quelle agence
d'automatisation IA.

Note d'usage (heuristiques de Nielsen, 8 retenues sur 10) : **22/32, passable** (69 %).

| # | Critère | Note | Constat |
|---|---|---|---|
| 1 | Retour sur ce qui se passe | 3 | États de la modale clairs |
| 2 | Langage du visiteur | 3 | Le texte parle gérant, les visuels (terminal, « LIVE », logos) parlent développeur |
| 3 | Liberté de sortir | 3 | Modale qui se ferme, FAQ repliable |
| 4 | Cohérence | 2 | Six libellés pour un seul bouton ; police des titres différente selon l'ordinateur |
| 5 | Prévention des erreurs | 3 | Repli mail / Calendly si l'envoi échoue |
| 6 | Tout est visible | 3 | Menu clair, bouton collant sur mobile |
| 7 | Raccourcis | n/a | Page à but unique |
| 8 | Sobriété | 2 | Halos, animations, défilé de logos, cinq offres « aussi » qui diluent l'offre principale |
| 9 | Sortie d'erreur | 3 | Message d'échec avec mail et Calendly |
| 10 | Aide | n/a | La FAQ suffit |

## Les clichés « agence IA » relevés

- Halos flous et grain en fond : `components/Hero.tsx:147-155`, `components/CtaFinal.tsx:12-15`, `.grain` dans `app/globals.css:129`
- Dégradé diagonal noir vers gris du hero : `.banner-bg`, `app/globals.css:178`
- Mots en dégradé bleu dans les titres : `.gradient-text`, `app/globals.css:172`, utilisé `Hero.tsx:171` et `CtaFinal.tsx:25`
- Bouton en pilule lumineuse, reflet qui passe et pulsation sans fin : `app/globals.css:136-171`
- Petit sur-titre en capitales au-dessus de chaque titre de section (5 fois), pastille au-dessus du h1
- **Faux terminal macOS avec « LIVE », curseur et roues de chargement** : `Hero.tsx:55-138`. L'élément le plus « agence IA » de la page.
- Icône dans un carré arrondi au-dessus de chaque carte (3 cartes constat, 5 cartes services)
- Gros numéros pâles « 01-04 » dans la démarche
- Défilé de 17 logos sans légende (LangChain, Hugging Face, Anthropic, Zapier…) : `components/ToolsBar.tsx:56-59`
- Gros chiffre « 2 à 3 jours » dans une boîte lumineuse
- Toutes les sections avec la même carte arrondie et le même titre en `md:text-6xl` : rien ne signale que le cas Serre est le moment fort

## Bugs trouvés au passage

- **La police des titres ne se charge jamais.** `@theme inline` (`app/globals.css:7`) écrit le nom
  littéral « Space Grotesk », alors que `next/font/local` déclare la police sous un nom interne
  (`app/layout.tsx:17`). Les titres tombent sur la police du système (SF Pro sur Mac, Segoe ou
  Roboto ailleurs). Inter marche par chance. Vérifié dans le code.
- **Le libellé de la barre d'outils n'est jamais affiché** : `TOOLS_BAR.label` existe dans
  `lib/data.ts:70` mais `ToolsBar.tsx` ne le rend pas.
- Les captures Serre ne sont pas encore en ligne (sur `dev` seulement, PR #14).

## Problèmes prioritaires

1. **[P0] La preuve ne se voit pas.** Pas de captures en ligne, et une fois en ligne ce sont trois
   vignettes sans agrandissement. Voir un vrai écran de CRM est ce qui convainc le plus un
   expert-comptable méfiant, et c'est la seule chose qu'un modèle d'agence ne peut pas imiter.
   → Mettre `dev` en production. Une grande capture en tête du cas Serre, les deux autres en
   vignettes cliquables qui s'agrandissent. Envisager un vrai écran à la place du terminal.
2. **[P1] Le visuel du hero dit « agence d'automatisation IA ».** Terminal, « LIVE », halos, texte en
   dégradé, pulsation. → Le remplacer par un écran Serre recadré (statut « À relancer ») ou une frise
   calme et statique. Retirer pulsation, halos et dégradé de texte ; l'accent en une couleur unie.
3. **[P1] Police des titres cassée.** → Brancher la variable de `next/font`, puis décider si on garde
   Space Grotesk, très « start-up tech ». Une police à empattements ou humaniste distinguerait
   Viloris et parlerait mieux aux comptables.
4. **[P2] Barre d'outils et grille services jouent contre le positionnement.** 17 logos muets ;
   cinq cartes égales avec une dernière rangée bancale, « Audit IA » et « Agents IA » en premier.
   → Supprimer la barre ou en faire une phrase. Services en liste compacte sur deux colonnes, sous
   « Et aussi », sans icônes, l'IA en dernier.
5. **[P2] Le bouton promet autre chose que ce qu'il fait.** Six libellés pour une seule action ;
   « Prendre rendez-vous » ouvre un formulaire de cinq champs, Calendly n'arrive qu'après.
   → Un seul libellé partout, honnête (« Décrire ma situation · réponse sous 24 h »), ou ouvrir
   Calendly directement avec un message facultatif.

## Charge mentale : 4 critères sur 8 en échec

Attention partagée dans le hero (terminal qui tourne en boucle), trop d'éléments par groupe
(5 services, 6 questions, 17 logos), hiérarchie plate (toutes les sections se ressemblent),
5 choix dans la modale dont « Un agent IA ».

## Parcours émotionnel

- Ouverture : titre fort, affaibli par le jargon du terminal et les logos anonymes.
- Sommet : on se reconnaît dans le problème (« Le tableur partagé ne suffit plus »).
- Preuve : du texte et un chiffre, sans image de l'outil. Le sommet attendu ne vient pas.
- Creux : « Ce que je fais aussi » ramène le doute « agence IA » juste après la confiance gagnée,
  puis une longue suite de cartes sombres identiques.
- Réassurance : un seul témoignage, d'un collègue de Chanel, aucun client PME, Serre jamais cité.
- Fin : bonne phrase (« même si on ne travaille pas ensemble »), mais le bouton ne tient pas sa
  promesse de rendez-vous.

## Ce qui marche

1. Le texte : à la première personne, chiffres réels (500 dossiers, 20 collaborateurs, relances à
   60/30/15 jours), prix affichés, prix ferme sous 48 h.
2. L'ordre : le problème d'abord, la réalisation avant les services, la carte avant/après.
3. Le mobile : pas de débordement, bouton collant, avant/après repliable, animations réduites
   respectées.

## Le regard des visiteurs types

- **Gérant de PME ou expert-comptable venu de LinkedIn, méfiant envers l'IA** : voit « LIVE », des
  journaux en police machine, les logos LangChain et Anthropic, puis « Audit IA » et « Agents IA »
  en tête des services. Aucune parole de Serre. La photo fait posée. Les logos Chanel, Fnac,
  Yves Rocher peuvent faire « grosse agence » plutôt que « pair ».
- **Première visite** : ne comprend pas si le terminal est une démo ou un produit (légende en 12 px,
  peu contrastée, `Hero.tsx:228`). Ne sait pas ce que sont les 17 icônes. « CRM » non expliqué.
- **Mobile** : environ 1 350 px de hero avant la moindre preuve, terminal presque vide pendant
  l'animation, services en 1 500 px de cartes empilées, mention RGPD sous la ligne de flottaison
  dans la modale.

## Relevé du détecteur automatique

- Code : 1 alerte, texte en dégradé (`app/globals.css:174`).
- Page en ligne : 61 alertes sur 12 règles. Texte trop petit (12, surtout la déco du terminal et
  les numéros d'étapes en 10 px), contraste trop faible (10, dont le texte blanc sur le bouton bleu
  à 2,6:1 côté clair du dégradé et des gris sur noir à 2,1-3,3:1), icône au-dessus du titre (8),
  mot seul en fin de ligne (7), halo lumineux sur les boutons (7), texte 11 px (6), sur-titres (5),
  texte en dégradé (2), pastille au-dessus du h1, Inter trop répandue, défilé de logos, carte dans
  une carte.
- Faux positifs probables : la taille du texte dans le faux terminal (décor), les mots seuls (dépendent
  de la largeur d'écran).

## Petits points

- Texte de liaison des services à environ 3,3:1, sous le seuil d'accessibilité (`ServicesSection.tsx:66`).
- Badge « Client » ambré, seule touche d'ambre du site, inutile.
- Logo du pied de page : carré noir sur fond presque noir.
- « Condition générale d'utilisation » à mettre au pluriel (`lib/data.ts:395`).
- Le défilé de logos est dupliqué sans `aria-hidden` : un lecteur d'écran annonce 34 infobulles.

## Questions ouvertes

1. Si l'expert-comptable ne voyait en haut de page qu'un écran Serre et la phrase « Votre Excel
   partagé, remplacé », lui faudrait-il autre chose ?
2. Pourquoi un studio d'une personne, dont l'atout est « vous parlez à celui qui construit », ne
   montre ni Adrien en haut de page ni la voix d'un client ?
3. « Agents IA dès 400 € » : amène-t-il le mauvais client et fait-il fuir le bon ?
