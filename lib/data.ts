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

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Réalisation", href: "#realisations" },
  { label: "Démarche", href: "#processus" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  badge: "Outils sur mesure pour PME",
  headline: "Un outil fait pour",
  headline_accent: "votre façon de travailler.",
  description:
    "Suivi des clients, relances, tableaux de bord : je construis l'outil dont votre équipe a besoin, pas un logiciel de plus auquel s'adapter. Vous demandez un changement, vous l'avez en 2 à 3 jours.",
  cta_primary: "Prendre rendez-vous",
  cta_secondary: "Voir un outil livré",
  gdpr: "Conforme RGPD · vos données restent les vôtres",
  workflow: {
    filename: "lead_qualification",
    steps: [
      { label: "Lead reçu via formulaire", time: "09:42:01" },
      { label: "Agent IA analyse le profil", time: "09:42:02" },
      { label: "Score de qualification : 87/100", time: "09:42:03" },
      { label: "CRM mis à jour automatiquement", time: "09:42:04" },
      { label: "Email de bienvenue envoyé", time: "09:42:04" },
      { label: "Notification Slack → vous", time: "09:42:05" },
    ],
    footer: "6 actions · 0 intervention humaine",
    caption: "Exemple d'automatisation déployée en 2 semaines",
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
  subtitle: "Et les logiciels du marché vous obligent à changer votre façon de travailler.",
  cta: "En parler avec moi",
};

export const PAINS = [
  {
    title: "Des ressaisies",
    body: "La même information tapée dans le tableur, l'agenda et le logiciel métier. Du temps perdu, et des erreurs qui finissent par coûter cher.",
  },
  {
    title: "Des relances oubliées",
    body: "Un devis sans réponse, un document qui manque, un dossier en attente. Personne ne relance, parce que rien ne vous le rappelle.",
  },
  {
    title: "Un logiciel qui ne vous ressemble pas",
    body: "Trop de cases inutiles, pas celles dont vous avez besoin. Chaque demande de changement prend des mois, quand elle est acceptée.",
  },
];

export const SERVICES_SECTION = {
  label: "Services",
  title: "Ce que je fais pour vous",
  intro:
    "Je conçois des systèmes digitaux complets : site haute performance, agents IA et automatisations, pour que votre business attire, qualifie et convertit en automatique.",
};

export const SERVICES = [
  {
    badge: "Par où commencer",
    icon: "Bot",
    name: "Agents IA & Automatisations",
    description:
      "Vos leads qualifiés, vos emails traités, vos outils synchronisés. Sans que vous leviez le petit doigt.",
    items: [
      "Agent IA de qualification de leads",
      "Agent IA support client / FAQ",
      "Automatisations métier sur-mesure (N8n)",
      "Audit & cartographie de vos flux automatisables",
    ],
  },
  {
    badge: "L'étape suivante",
    icon: "Globe",
    name: "Site Web Haute Performance",
    description:
      "Un site qui travaille pour vous 24h/24. Chaque page est conçue pour transformer un visiteur en prospect qualifié.",
    items: [
      "Site vitrine premium orienté conversion",
      "Landing page campagne",
      "Refonte de site existant",
      "Intégration d'un agent IA directement dans votre site",
    ],
  },
  {
    badge: "Pour durer et scaler",
    icon: "Wrench",
    name: "Maintenance & Évolution Continue",
    description:
      "Votre système évolue avec vous chaque mois. Zéro bug non traité, zéro automatisation qui décroche.",
    items: [
      "Maintenance site (sécurité, performances, mises à jour)",
      "Suivi & évolution de vos agents IA",
      "Gestion continue de vos automatisations N8n",
      "Accompagnement stratégique mensuel",
    ],
  },
];

export const SERVICES_LIAISON =
  "La plupart des clients commencent par un agent IA. Le reste suit naturellement.";

export const REALISATIONS_SECTION = {
  label: "Réalisation",
  title: "Un outil livré, utilisé tous les jours",
  subtitle:
    "Un cabinet d'expertise comptable a remplacé son fichier Excel partagé par un outil construit autour de sa façon de travailler.",
  note: "Votre métier est différent ? C'est tout le principe : l'outil part de votre façon de travailler.",
  cta: "Prendre rendez-vous",
  problem_label: "Avant",
  solution_label: "Avec l'outil",
  video_cta: "Voir l'outil en vidéo",
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
      "500 dossiers clients, le suivi fiscal de chacun et les relances avant chaque échéance, réunis dans un seul outil, accessible depuis un ordinateur ou un téléphone.",
    problem:
      "Les 500 clients et leurs échéances fiscales vivaient dans un fichier Excel partagé par 20 collaborateurs. Un code couleur pour savoir qui avait validé quoi, des modifications qui s'écrasaient, des relances faites de mémoire.",
    solution:
      "Des fiches clients et des types d'impôts que le cabinet paramètre lui-même, des droits par profil, l'historique de chaque validation, et des relances automatiques à 60, 30 et 15 jours de chaque échéance. L'outil et les données appartiennent au cabinet.",
    metric: { value: "2 à 3 jours", label: "pour chaque évolution demandée" },
    images: [],
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
    "Votre activité change, votre outil aussi. Avec le suivi mensuel, vous me demandez une évolution et vous l'avez en 2 à 3 jours. Maintenance et accompagnement dès 140 € HT par mois.",
  cta: "Parler de mon projet",
};

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Appel découverte, gratuit",
    body: "30 minutes pour comprendre votre activité et ce qui vous ralentit. Des questions, pas de démonstration commerciale, aucun engagement.",
  },
  {
    n: "02",
    title: "Proposition sous 48 h",
    body: "Un périmètre précis, un prix ferme et un calendrier. Vous savez exactement ce que vous achetez.",
  },
  {
    n: "03",
    title: "Réalisation par étapes",
    body: "Je vous montre l'outil à chaque étape et vous l'essayez sur vos vrais cas. Vos retours sont pris en compte au fil de l'eau, et votre équipe est formée.",
  },
  {
    n: "04",
    title: "Suivi dans la durée",
    body: "Votre outil continue de fonctionner et évolue avec vous. Une demande de changement, et elle est en ligne en 2 à 3 jours.",
  },
];

export const FOUNDER_SECTION = {
  label: "Le mot du fondateur",
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
    role: "Lead développeur front-end — Chanel",
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

Si je peux vous aider, vous recevez sous 48 h une proposition avec un périmètre précis, un prix ferme et un calendrier.

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
    a: `Le développement va vite. Ce qui fixe le rythme, c'est surtout le temps que vous pouvez consacrer aux essais et aux retours.

C'est pour ça que je travaille par étapes : vous avez une première version entre les mains tôt, et on l'ajuste ensemble à votre rythme jusqu'à la mise en service.

Une fois l'outil en service, une demande de changement est en ligne en 2 à 3 jours.`,
  },
  {
    q: "Ai-je besoin de compétences techniques ?",
    a: `Aucune. L'outil est pensé pour votre équipe, avec vos mots et vos étapes.

Je forme les personnes qui vont s'en servir, et chaque outil est livré avec sa documentation. Pour une évolution, il suffit de me la décrire.`,
  },
  {
    q: "Que deviennent mes données ?",
    a: `Elles restent les vôtres. L'outil s'appuie sur des services reconnus et conformes au RGPD, et vous gardez un accès complet à vos données à tout moment.

Le choix de l'hébergement se fait avec vous, selon la sensibilité de vos informations. Si vous avez une contrainte particulière, on en parle dès le premier appel.`,
  },
  {
    q: "Et si j'ai déjà des outils ?",
    a: `On part de ce que vous avez. Si votre agenda, votre logiciel de facturation ou votre site doivent rester, je relie le nouvel outil à eux pour que l'information ne soit saisie qu'une fois.

Je vérifie avant de m'engager que ces connexions sont possibles avec vos logiciels.`,
  },
];

export const CTA_FINAL = {
  headline: "Votre façon de travailler mérite",
  headline_accent: "un outil à sa mesure.",
  description:
    "Parlons-en 30 minutes. Vous repartez avec une idée claire de ce qui est possible, même si on ne travaille pas ensemble.",
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
    text: "© Tous droits réservés — Site réalisé par ",
    linkLabel: "Viloris.io",
    linkHref: SITE_URL,
  },
};
