# PRD — Remorquage 40 Est (Landing Page)

## Problem statement (original)
Site web pour une compagnie de remorquage. Local et longue distance, MTL / Laval / Rive-Sud / Rive-Nord. Landing page pas trop grosse. Page pour achat/revente de voitures et scrap (ferraille). Service 24h de remorquage. Gros bouton appeler 438-402-4080. Logo fourni. Prise de contact sans backend — renvoie à l'app SMS. Belles animations au défilement.

## Choix utilisateur
- Style : foncé et audacieux noir/rouge, look « route de nuit »
- Contact : ouvre l'app SMS avec message pré-rempli vers 438-402-4080 (aucun backend)
- Langue : bilingue FR / EN (toggle instantané)
- Animations : spectaculaires (framer-motion + lenis, hero cinétique, marquee, parallaxe)

## Architecture
- Frontend React (CRA + craco), Tailwind, framer-motion, lenis — site 100 % statique, AUCUN backend utilisé.
- Fichiers clés : `src/App.js` (contexte langue + Lenis), `src/i18n.js` (dictionnaire FR/EN), `src/components/` (Header, Hero, Marquee, Services, Zones, ContactSms, Footer, StickyBar), logo dans `public/assets/logo.png`.
- Téléphone : tel:+14384024080 / sms:+14384024080?&body=...

## Sections implémentées (2026-07)
1. Header glass fixe : logo, badge DISPO 24/7, toggle FR/EN, bouton appel
2. Hero cinétique : reveal ligne-par-ligne masqué, logo flottant avec parallaxe, gros bouton APPELER 438-402-4080 pulsant, bouton texto, chips zones, ETA 15–30 min
3. Marquee éditoriale rouge inclinée (slogans défilants)
4. Services 01–04 : remorquage local/urgence 24-7, longue distance, achat & revente, scrap & ferraille (cartes bento, image au survol)
5. Zones : Montréal / Laval / Rive-Sud / Rive-Nord avec temps d'arrivée estimés
6. Contact SMS : choix du besoin + lieu + véhicule, aperçu du texto en direct, ouvre l'app SMS pré-remplie
7. Barre d'action collante (apparaît après défilement) : Appeler 24/7 + Texto
8. Footer : numéro géant cliquable, zones, mentions

## Mises à jour
- 2026-07 : nouveau logo rond (noir/rouge, fleur de lys) remplace l'ancien ; promo « 3e remorquage GRATUIT / 3rd tow FREE » ajoutée au hero (badge ambré) et au bandeau défilant
- 2026-07 : section promo plein écran entre Zones et Contact — texte géant avec reveal masqué, fond filigrane défilant, lueur rouge liée au défilement, bouton « J'en profite » (tel:)
- 2026-07 : vraies photos de la flotte ajoutées — photo remorqueuse rouge en fond du hero (parallaxe), section « Nos remorqueuses, en action » avec les 2 photos en grand, photos dans les cartes services 01/02 ; correction du masquage des fonds (z-index)

## Vérifications faites
- curl : site 200, logo 200 (1,4 Mo)
- Screenshots : hero FR/EN, services, zones, contact ; formulaire SMS testé (aperçu correct) ; toggle EN vérifié

## Personas
- Automobiliste en panne (urgence, mobile, veut appeler vite)
- Propriétaire d'épave (veut du comptant pour scrap)
- Acheteur/vendeur de véhicule usagé

## Backlog
- P0 : —
- P1 : photos réelles de la flotte, avis clients
- P2 : formulaire courriel avec vrai backend si désiré, page SEO par ville, suivi Google Analytics
