# 2026-11-08 — Formulaire de contact : mot de passe Gmail refusé

Note laissée depuis le projet viloris-studio.

## Constat
- Le mot de passe d'application de `GMAIL_APP_PASSWORD` (`.env.local`) est refusé par Gmail
  (`535-5.7.8 Username and Password not accepted`), testé le 08/11. Il n'existe plus dans la liste
  des mots de passe d'application de contact@viloris.io : révoqué.
- Conséquence probable : `/api/contact` échoue, le formulaire du site n'envoie plus rien
  (non vérifié en production).

## Reste à faire
- [x] Remplacer `GMAIL_APP_PASSWORD` par le mot de passe d'application « viloris-smtp » créé le 08/11
  (valeur : `SMTP_PASS` dans `viloris-studio/app/.env.local`, à écrire sans espaces) :
  - dans `.env.local` ;
  - dans le projet Vercel du site (Production), puis redéployer.
- [x] Envoyer un message de test par le formulaire en production et vérifier sa réception sur
  contact@viloris.io.

## Décisions
- Un seul mot de passe d'application, « viloris-smtp », pour le site et le portail viloris-studio
  (même boîte d'envoi). Le révoquer coupe les deux.
