export const SITE_URL = "https://www.viloris.io";

export const SHOW_REALISATIONS = true;
export const SHOW_UPCOMING_PROJECT = false;
export const CALENDLY_URL = "https://calendly.com/contact-viloris/30min";
export const CONTACT_EMAIL = "contact@viloris.io";

export const META = {
  title: "Viloris · Outils sur mesure pour PME, ajustés en 2 à 3 jours",
  description:
    "Je construis l'outil fait pour votre façon de travailler : suivi des clients, relances, tableaux de bord. Vous demandez un changement, vous l'avez en 2 à 3 jours. Premier appel gratuit.",
  og: {
    title: "Viloris · Un outil fait pour votre façon de travailler",
    description:
      "Outils sur mesure pour PME. Vous demandez un changement, vous l'avez en 2 à 3 jours.",
  },
};

export const NAV = {
  cta: "Prendre rendez-vous",
};

export const OG_IMAGE = {
  headline: "Un outil fait pour",
  headline_accent: "votre façon de travailler.",
  subtitle: "Vous demandez un changement, vous l'avez en 2 à 3 jours.",
  role: "Développeur d'outils sur mesure · Viloris",
  badge: "Premier appel gratuit · 30 min",
};

export const NAV_LINKS = [
  { label: "Réalisation", href: "#realisations" },
  { label: "Services", href: "#services" },
  { label: "Démarche", href: "#processus" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  badge: "Outils sur mesure pour PME",
  headline: "Un outil fait pour",
  headline_accent: "votre façon de travailler.",
  description:
    "Je construis l'outil dont votre équipe a besoin pour suivre ses clients, ses dossiers et ses relances. Une fois en service, il évolue avec vous : un changement demandé est en ligne en 2 à 3 jours.",
  cta_primary: "Prendre rendez-vous",
  cta_secondary: "Voir un outil livré",
  gdpr: "Premier appel gratuit · 30 minutes · sans engagement",
  workflow: {
    filename: "demande_evolution",
    steps: [
      { label: "Demande : un statut « À relancer »", time: "Lun 09:12" },
      { label: "Besoin précisé avec vous", time: "Lun 09:40" },
      { label: "Développement et tests", time: "Mar 10:05" },
      { label: "Démonstration envoyée", time: "Mar 16:20" },
      { label: "Validé de votre côté", time: "Mer 11:30" },
      { label: "En ligne pour toute l'équipe", time: "Mer 17:40" },
    ],
    footer: "De la demande à la mise en ligne : 2 jours",
    caption: "Exemple du rythme d'une évolution, une fois l'outil en service",
  },
  clients_tagline:
    "Avant Viloris, 12 ans de développement pour de grandes marques. Le même niveau d'exigence, appliqué à l'outil de votre PME.",
  clients: [
    { name: "Chanel", logo: "/clients/chanel.webp" },
    { name: "Fnac-Darty", logo: "/clients/fnacdarty.webp" },
    { name: "Prisma Media", logo: "/clients/prismamedia.webp" },
    { name: "Yves Rocher", logo: "/clients/yvesrocher.webp" },
  ],
};

export const TOOLS_BAR = {
  label: "Les outils que j'utilise au quotidien",
};

export const TOOLS: { label: string; icon?: string }[] = [
  { label: "N8n", icon: "SiN8n" },
  { label: "Make", icon: "SiMake" },
  { label: "Zapier", icon: "SiZapier" },
  { label: "LangChain", icon: "SiLangchain" },
  { label: "Hugging Face", icon: "SiHuggingface" },
  { label: "Python", icon: "SiPython" },
  { label: "Anthropic", icon: "SiAnthropic" },
  { label: "Next.js", icon: "SiNextdotjs" },
  { label: "Supabase", icon: "SiSupabase" },
  { label: "PostgreSQL", icon: "SiPostgresql" },
  { label: "Stripe", icon: "SiStripe" },
  { label: "Airtable", icon: "SiAirtable" },
  { label: "Notion", icon: "SiNotion" },
  { label: "Linear", icon: "SiLinear" },
  { label: "Vercel", icon: "SiVercel" },
  { label: "GitHub", icon: "SiGithub" },
  { label: "Tailwind", icon: "SiTailwindcss" },
];

export const PAIN_SECTION = {
  label: "Le constat",
  title: "Le tableur partagé ne suffit plus.",
  subtitle: "Et les logiciels du marché vous demandent de travailler à leur façon.",
  cta: "En parler avec moi",
};

export const PAINS = [
  {
    title: "Des ressaisies",
    body: "La même information tapée dans le tableur, l'agenda et le logiciel métier. Le temps perdu s'accumule, et un jour une échéance passe à la trappe.",
  },
  {
    title: "Des relances oubliées",
    body: "Un devis sans réponse, un document qui manque, un dossier en attente. Personne ne relance, parce que rien ne vous le rappelle.",
  },
  {
    title: "Un logiciel qui ne vous ressemble pas",
    body: "Des dizaines de champs inutiles, et il manque celui dont vous avez besoin. Vous le signalez à l'éditeur, puis vous attendez des mois.",
  },
];

export const SERVICES_SECTION = {
  label: "Services",
  title: "Ce que je fais aussi",
  intro:
    "L'outil sur mesure est le cœur de mon travail. Je peux aussi prendre en charge ces besoins, seuls ou autour de votre outil.",
};

export const SERVICES: { icon: string; name: string; description: string; price: string }[] = [
  {
    icon: "ClipboardCheck",
    name: "Audit IA",
    description:
      "Avant d'investir, savoir où l'IA et l'automatisation vous feront gagner du temps, avec des priorités classées.",
    price: "Dès 900 € HT",
  },
  {
    icon: "Workflow",
    name: "Automatisations et connexions",
    description:
      "Relances, tri des emails, outils qui se parlent : une information saisie une fois, disponible partout.",
    price: "Dès 800 € HT",
  },
  {
    icon: "Bot",
    name: "Agents IA",
    description:
      "Une réceptionniste qui répond à vos appels, un agent d'accueil sur votre site, un assistant qui connaît vos documents.",
    price: "Dès 400 € HT",
  },
  {
    icon: "Globe",
    name: "Site web",
    description:
      "Un site rapide et clair, pensé pour la prise de contact, avec des formulaires reliés à vos outils.",
    price: "Dès 800 € HT",
  },
  {
    icon: "GraduationCap",
    name: "Formation et suivi",
    description:
      "Des formations sur vos propres cas, et un suivi mensuel pour que vos outils continuent d'évoluer avec vous.",
    price: "Formation dès 800 € HT · suivi dès 140 € HT/mois",
  },
];

export const SERVICES_LIAISON =
  "Prix indicatifs hors taxes. Le prix et le délai définitifs sont fixés dans la proposition, après un appel gratuit.";

export const REALISATIONS_SECTION = {
  label: "Réalisation",
  title: "Un outil livré, utilisé tous les jours",
  subtitle:
    "Un cabinet d'expertise comptable a remplacé son fichier Excel partagé par un outil construit pour ses 20 collaborateurs.",
  note: "Votre métier est différent ? Tant mieux : je pars de vos étapes, de vos mots et de vos habitudes.",
  cta: "Prendre rendez-vous",
  problem_label: "Avant",
  solution_label: "Avec l'outil",
  video_cta: "Voir l'outil en vidéo",
  details_show: "Voir l'avant et l'après",
  details_hide: "Masquer le détail",
};

export type Project = {
  name: string;
  badge: string;
  tags: string[];
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  metric: { value: string; label: string };
  images: { src: string; alt: string }[];
  videoUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Cabinet Serre",
    badge: "Client",
    tags: ["Outil sur mesure", "Expertise comptable", "20 collaborateurs"],
    subtitle: "CRM de gestion des clients et de suivi fiscal",
    description:
      "500 dossiers clients et leur suivi fiscal, réunis dans un seul outil. Les relances partent toutes seules avant chaque échéance.",
    problem:
      "Les 500 clients et leurs échéances fiscales vivaient dans un fichier Excel partagé par 20 collaborateurs. Un code couleur pour savoir qui avait validé quoi, des modifications qui s'écrasaient, des relances faites de mémoire.",
    solution:
      "Le cabinet paramètre lui-même ses fiches clients et ses types d'impôts. Chacun voit ce que son profil autorise, et chaque validation est tracée. Les relances partent à 60, 30 et 15 jours de chaque échéance. L'outil et les données appartiennent au cabinet.",
    metric: { value: "2 à 3 jours", label: "pour chaque évolution demandée" },
    images: [
      {
        src: "/realisations/serre-dossiers.png",
        alt: "Liste des dossiers clients du cabinet, avec régime de TVA et lettre de mission (données fictives)",
      },
      {
        src: "/realisations/serre-matrice-tva.png",
        alt: "Matrice des déclarations de TVA de l'année, mois par mois et dossier par dossier (données fictives)",
      },
      {
        src: "/realisations/serre-fiche-dossier.png",
        alt: "Fiche d'un dossier client avec ses prochaines échéances et l'historique des modifications (données fictives)",
      },
    ],
  },
];

export const UPCOMING_PROJECT = {
  title: "Réceptionniste Vocal IA",
  status: "En développement",
  description: "Agent téléphonique 24/7 · en cours de build",
};

export const PROCESS_SECTION = {
  label: "Ma démarche",
  title: "Du premier appel au suivi, quatre étapes.",
  beyond_title: "Et une fois l'outil en place ?",
  beyond_description:
    "Avec le suivi mensuel, je surveille que tout fonctionne et je fais évoluer l'outil à mesure que votre activité change. Dès 140 € HT par mois.",
  cta: "Parler de mon projet",
};

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Appel découverte, gratuit",
    body: "30 minutes pour comprendre votre activité et ce qui vous ralentit. Je pose des questions, vous ne vous engagez à rien.",
  },
  {
    n: "02",
    title: "Proposition sous 48 h",
    body: "Ce que je construis, le prix ferme et le calendrier, écrits noir sur blanc avant de commencer.",
  },
  {
    n: "03",
    title: "Réalisation par étapes",
    body: "Je vous montre l'outil à chaque étape et vous l'essayez sur vos vrais dossiers. J'intègre vos retours au fur et à mesure, puis je forme votre équipe.",
  },
  {
    n: "04",
    title: "Suivi dans la durée",
    body: "Une fois l'outil en service, vous me demandez un changement et il est en ligne en 2 à 3 jours.",
  },
];

export const FOUNDER_SECTION = {
  label: "Qui je suis",
  name: "Adrien Vidal",
  company: "Fondateur · VILORIS.IO",
  role: "Développeur d'outils sur mesure",
  bio: [
    "J'ai passé 12 ans à développer pour Chanel, Darty ou la Fnac, avec des exigences fortes de qualité et de délais. Aujourd'hui, je mets cette rigueur au service des PME.",
    "Je travaille seul : vous parlez directement à celui qui construit votre outil. C'est ce qui me permet de comprendre votre métier dans le détail et de livrer vos changements en quelques jours. Je construis aussi mes propres outils, pour piloter mon activité.",
  ],
  testimonial: {
    quote:
      "Il est intervenu sur des projets de A à Z, dans un contexte exigeant, avec des contraintes fortes de performance.",
    author: "Marine Delbeck",
    role: "Lead développeur front-end · Chanel",
  },
};

export const CLIENTS = ["Chanel", "Fnac", "Darty", "Prisma Media", "Yves Rocher"];

export const FAQ_SECTION = {
  label: "FAQ",
  title: "Vos questions, mes réponses",
};

export const FAQ = [
  {
    q: "Comment se passe un projet concrètement ?",
    a: `Tout commence par un appel de 30 minutes, gratuit et sans engagement. Je cherche à comprendre votre activité : qui fait quoi, avec quels outils, et où se perd le temps.

Si je peux vous aider, vous recevez sous 48 h une proposition écrite : ce que je construis, le prix ferme et le calendrier.

Ensuite, je construis par étapes. À chaque étape, je vous montre l'outil et vous l'essayez sur vos vrais cas. Rien n'est figé avant que vous l'ayez validé.`,
  },
  {
    q: "Combien ça coûte ?",
    a: `Un outil sur mesure démarre à 3 500 € HT pour une version prête à l'emploi, et à 6 000 € HT pour une application dédiée. Une automatisation seule démarre à 800 € HT.

Le prix définitif est fixé dans la proposition, après l'appel découverte. Il ne bouge plus ensuite, sauf si vous décidez d'élargir le périmètre.

Pour faire évoluer l'outil dans la durée, le suivi mensuel démarre à 140 € HT par mois.`,
  },
  {
    q: "Combien de temps avant d'utiliser l'outil ?",
    a: `Le rythme dépend surtout du temps que votre équipe peut consacrer aux essais et aux retours.

Je travaille donc par étapes : vous avez une première version entre les mains tôt, et on l'ajuste ensemble jusqu'à la mise en service.

Une fois l'outil en service, une demande de changement est en ligne en 2 à 3 jours.`,
  },
  {
    q: "Ai-je besoin de compétences techniques ?",
    a: `Aucune. L'outil est pensé pour votre équipe, avec vos mots et vos étapes.

Je forme les personnes qui vont s'en servir, et chaque outil est livré avec sa documentation. Pour une évolution, il suffit de me la décrire : je vous indique le délai et le prix avant de m'y mettre.`,
  },
  {
    q: "Que deviennent mes données ?",
    a: `Elles restent les vôtres. La base de données peut être ouverte à votre nom : le Cabinet Serre est propriétaire de la sienne. Les services utilisés sont conformes au RGPD, et vous gardez un accès complet à vos données.

Le choix de l'hébergement se fait avec vous, selon la sensibilité de vos informations. Si vous avez une contrainte particulière, on en parle dès le premier appel.`,
  },
  {
    q: "Et si j'ai déjà des outils ?",
    a: `On part de ce que vous avez. Si votre agenda, votre logiciel de facturation ou votre site doivent rester, je relie le nouvel outil à eux pour que l'information ne soit saisie qu'une fois.

Je vérifie avant de m'engager que ces connexions sont possibles avec vos logiciels.`,
  },
];

export const CTA_FINAL = {
  headline: "Un tableur qui déborde, des relances oubliées ?",
  headline_accent: "Parlons-en.",
  description:
    "30 minutes en visio. Vous repartez avec une idée claire de ce qui est possible, même si on ne travaille pas ensemble.",
  cta: "Prendre rendez-vous",
  subtext: "Gratuit et sans engagement",
};

export const CONTACT_FORM = {
  title: "Prenons rendez-vous",
  subtitle: "Décrivez votre situation en quelques mots. Je vous réponds sous 24 h.",
  fields: {
    name: { label: "Prénom & Nom", placeholder: "Jean Dupont" },
    email: { label: "Email professionnel", placeholder: "jean@entreprise.com" },
    company: { label: "Entreprise", placeholder: "Votre société (optionnel)" },
    services: { label: "Ce qui vous intéresse" },
    message: {
      label: "Votre situation en quelques mots",
      placeholder:
        "Ex : on suit nos dossiers clients dans un tableur partagé et on oublie des relances…",
    },
  },
  services: [
    "Un outil sur mesure",
    "Automatiser des tâches",
    "Un agent IA",
    "Un site web",
    "Je ne sais pas encore",
  ],
  cta: "Envoyer ma demande",
  gdpr: "Conforme RGPD · vos données ne servent qu'à vous répondre",
  success: {
    title: "Demande reçue !",
    message:
      "Je reviens vers vous sous 24 h. En attendant, vous pouvez réserver directement un créneau dans mon agenda.",
    cta: "Réserver mon créneau maintenant",
  },
  error: {
    message:
      "L'envoi n'a pas abouti. Écrivez-moi directement ou réservez un créneau dans mon agenda.",
    emailCta: "M'écrire",
    calendlyCta: "Réserver un créneau",
    mailSubject: "Demande de rendez-vous",
  },
};

export const FOOTER = {
  address: {
    street: "4 place Auguste Métivier",
    city: "75020 Paris",
  },
  contact: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adrien-vidal-308b4864/",
      icon: "linkedin",
    },
    {
      label: "contact@viloris.io",
      href: "mailto:contact@viloris.io",
      icon: "email",
    },
  ],
  ressources: [{ label: "FAQ", href: "#faq" }],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Condition générale d'utilisation", href: "/cgu" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "Politique de cookies (UE)", href: "/cookies" },
  ],
  subfooter: {
    text: "© Tous droits réservés · Site réalisé par ",
    linkLabel: "Viloris.io",
    linkHref: SITE_URL,
  },
};
