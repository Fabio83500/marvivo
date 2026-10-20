// Données du club, centralisées ici pour être modifiées facilement
// sans toucher aux composants.

import photoHero from "@/images/photos/hero.jpg";
import photoSix from "@/images/photos/six.jpg";
import photoSept from "@/images/photos/sept.jpg";
import photoNeuf from "@/images/photos/neuf.jpg";
import photoDouze from "@/images/photos/douze.jpg";
import photoDouzeB from "@/images/photos/douze-b.jpg";
import photoTreize from "@/images/photos/treize.jpg";
import photoQuatorze from "@/images/photos/quatorze.jpg";
import photoQuinze from "@/images/photos/quinze.jpg";
import photoComplexe from "@/images/photos/complexe.jpg";
import photoComplexeTerrain from "@/images/photos/complexe-terrain.jpg";

import mfAgency from "@/images/partenaires/mf-agency.png";
import garden from "@/images/partenaires/garden.png";
import adi from "@/images/partenaires/adi.png";
import abcDom from "@/images/partenaires/abc-dom.png";
import funnyland from "@/images/partenaires/funnyland.png";
import immoSelect from "@/images/partenaires/immo-select.png";
import intermarche from "@/images/partenaires/intermarche.png";
import intersport from "@/images/partenaires/intersport.png";
import laPiazza from "@/images/partenaires/la-piazza.png";
import mcdonalds from "@/images/partenaires/mcdonalds.png";

import vincentEutrope from "@/images/comite/vincent-eutrope.jpg";
import yvesEutrope from "@/images/comite/yves-eutrope.jpg";
import sabrinaMenouche from "@/images/comite/sabrina-menouche.jpg";
import mohammedMellouki from "@/images/comite/mohammed-mellouki.jpg";
import jeromeJeanney from "@/images/comite/jerome-jeanney.jpg";

export const photos = {
  hero: photoHero,
  six: photoSix,
  sept: photoSept,
  neuf: photoNeuf,
  douze: photoDouze,
  douzeB: photoDouzeB,
  treize: photoTreize,
  quatorze: photoQuatorze,
  quinze: photoQuinze,
  complexe: photoComplexe,
  // Même photo recadrée sur le terrain, pour les formats plus hauts (4:3)
  complexeTerrain: photoComplexeTerrain,
};

// Saison sportive en cours : elle bascule au 1er juillet.
// Calculée au moment de la génération du site (build).
const aujourdHui = new Date();
const finSaison = aujourdHui.getFullYear() + (aujourdHui.getMonth() >= 6 ? 1 : 0);

export const saison = {
  libelle: `${finSaison - 1}-${finSaison}`,
  fin: finSaison,
};

// Année de naissance d'une catégorie « U » pour la saison en cours (U10 → nés en fin de saison - 10).
export const anneeNaissance = (u) => saison.fin - u;

export const club = {
  nom: "AS Mar Vivo",
  nomComplet: "Association Sportive Mar Vivo",
  creation: 1980,
  labelFFF: "octobre 2012",
  email: "asmarvivo@orange.fr",
  telephone: "06 79 80 42 44",
  telephoneLien: "0679804244",
  siege: "Avenue Henri Guillaume, 83500 La Seyne-sur-Mer",
  stade: "Stade Squillaci",
  stadeAdresse: "Avenue Henri Guillaume, 83500 La Seyne-sur-Mer",
  fffClub: "https://epreuves.fff.fr/competition/club/533107-av-s-mar-vivo/club",
  mapsEmbed:
    "https://www.google.com/maps?q=Stade+Squillaci,+Avenue+Henri+Guillaume,+83500+La+Seyne-sur-Mer&output=embed",
  mapsLien:
    "https://www.google.com/maps/search/?api=1&query=Stade+Squillaci+La+Seyne-sur-Mer",
};

export const valeurs = [
  {
    titre: "Plaisir",
    texte:
      "Le jeu avant tout. Chaque séance doit donner envie de revenir la semaine suivante.",
  },
  {
    titre: "Respect",
    texte:
      "Des partenaires, des adversaires, des arbitres, des éducateurs et des installations.",
  },
  {
    titre: "Engagement",
    texte:
      "Être présent, à l'heure, et donner le meilleur de soi pour le collectif.",
  },
  {
    titre: "Esprit d'équipe",
    texte:
      "On gagne ensemble, on perd ensemble, et on progresse toujours ensemble.",
  },
];

export const categories = [
  {
    slug: "foot-a-5",
    titre: "Foot à 5",
    ages: "U6 à U9",
    accroche: "Découvrir le football, apprendre les bases et prendre plaisir à jouer ensemble.",
    photo: photoSept,
  },
  {
    slug: "foot-a-8",
    titre: "Foot à 8",
    ages: "U10 à U13",
    accroche: "Progresser techniquement, développer le collectif et découvrir la compétition.",
    photo: photoDouze,
  },
  {
    slug: "foot-a-11",
    titre: "Foot à 11",
    ages: "U14 à Vétérans",
    accroche: "Se dépasser, jouer collectif et relever les défis de la compétition.",
    photo: photoQuinze,
  },
];

export const comite = [
  { nom: "Vincent Eutrope", fonction: "Président", photo: vincentEutrope },
  { nom: "Mohammed Mellouki", fonction: "Secrétaire", photo: mohammedMellouki },
  { nom: "Yves Eutrope", fonction: "Trésorier", photo: yvesEutrope },
  { nom: "Sabrina Menouche", fonction: "Secrétaire adjointe", photo: sabrinaMenouche },
  { nom: "Jérôme Jeanney", fonction: "Trésorier adjoint", photo: jeromeJeanney },
];

export const directionSportive = [
  { nom: "Mohammed Mellouki", fonction: "Directeur sportif", telephone: "06 95 05 15 26" },
  { nom: "Jérôme Jeanney", fonction: "Cellule de direction sportive", telephone: "06 65 37 98 00" },
  { nom: "Cédric Derby", fonction: "Cellule de direction sportive", telephone: "06 87 27 03 00" },
  { nom: "Christophe Baroni", fonction: "Cellule de direction sportive", telephone: "06 20 91 76 06" },
];

export const responsables = [
  { categorie: "Foot à 5", nom: "Jérôme Jeanney", telephone: "06 65 37 98 00" },
  { categorie: "Transition foot à 5 / foot à 8", nom: "Cédric Derby", telephone: "06 87 27 03 00" },
  { categorie: "Foot à 8", nom: "Christophe Baroni", telephone: "06 20 91 76 06" },
  { categorie: "Foot à 11", nom: "Mohammed Mellouki", telephone: "06 95 05 15 26" },
];

export const educateurs = [
  { categorie: "U6", nom: "Thomas Genisio", telephone: "06 08 28 82 18" },
  { categorie: "U7", nom: "Cyril E.", telephone: "06 58 14 41 68" },
  { categorie: "U8", nom: "Jérôme J.", telephone: "06 65 37 98 00" },
  { categorie: "U9", nom: "Laurent E.", telephone: "06 95 48 28 75" },
  { categorie: "U10", nom: "Robert C.", telephone: "06 99 89 70 69" },
  { categorie: "U11", nom: "Florent G.", telephone: "06 56 85 96 27" },
  { categorie: "U12", nom: "Vincent E.", telephone: "06 79 80 42 44" },
  { categorie: "U13", nom: "Guillaume B.", telephone: "06 95 16 28 37" },
  { categorie: "U15", nom: "David C.", telephone: "06 72 75 22 29" },
  { categorie: "U16 - U17", nom: "Mohammed M.", telephone: "06 95 05 15 26" },
  { categorie: "Seniors", nom: "Jérôme M.", telephone: "06 59 55 25 57" },
  { categorie: "Loisirs", nom: "Vincent E.", telephone: "06 79 80 42 44" },
  { categorie: "Vétérans", nom: "Yves E.", telephone: "07 83 11 59 72" },
];

export const partenaires = [
  { nom: "MF Agency", logo: mfAgency },
  { nom: "Garden", logo: garden },
  { nom: "ADI", logo: adi },
  { nom: "ABC Dom", logo: abcDom },
  { nom: "Funnyland", logo: funnyland },
  { nom: "Immo Select", logo: immoSelect },
  { nom: "Intermarché", logo: intermarche },
  { nom: "Intersport", logo: intersport },
  { nom: "La Piazza", logo: laPiazza },
  { nom: "McDonald's", logo: mcdonalds },
];

// Liens de navigation partagés par le Header et le Footer
export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Le club", href: "/le-club" },
  {
    label: "Nos équipes",
    href: "/categories/foot-a-5",
    enfants: categories.map((c) => ({
      label: c.titre,
      detail: c.ages,
      href: `/categories/${c.slug}`,
    })),
  },
  { label: "Le complexe", href: "/complexe" },
  { label: "Inscriptions", href: "/inscriptions" },
  { label: "Contact", href: "/contact" },
];
