// Contenu des pages Foot à 5 / Foot à 8 / Foot à 11.
// Toutes les pages catégories utilisent le même modèle
// (src/components/CategoryPage/layout.js) alimenté par ces données.

import { photos, club, anneeNaissance } from "@/data/club.js";

const nesEn = (...u) => `Enfants nés en ${u.map(anneeNaissance).sort().join(" et ")}`;

const classement = (code) =>
  `https://epreuves.fff.fr/competition/club/533107-av-s-mar-vivo/equipe/${code}/classement`;

export const pagesCategories = {
  "foot-a-5": {
    titre: "Foot à 5",
    ages: "U6 à U9",
    metaTitle: "Foot à 5 (U6-U9) | AS Mar Vivo",
    metaDescription:
      "École de football de l'AS Mar Vivo à La Seyne-sur-Mer : catégories U6 à U9, horaires d'entraînement, éducateurs et informations utiles.",
    photo: photos.sept,
    accroche:
      "Les premiers pas sur le terrain : découvrir le ballon, apprendre en s'amusant et grandir ensemble.",
    intro: {
      titre: "L'école de football",
      paragraphes: [
        "De U6 à U9, les enfants découvrent le football dans un cadre bienveillant. Les séances sont pensées sous forme de jeux pour développer la motricité, la coordination et le goût de l'effort.",
        "Le week-end, les plus jeunes participent à des plateaux organisés par le District du Var : pas de classement, beaucoup de matchs courts, et tout le monde joue.",
      ],
      points: [
        "Séances ludiques adaptées à chaque âge",
        "Éducateurs encadrant chaque groupe",
        "Plateaux le samedi avec d'autres clubs du Var",
        "Club labellisé par la FFF depuis 2012",
      ],
    },
    equipes: [
      {
        nom: "U6 · U7",
        sousTitre: nesEn(7, 6),
        photo: photos.sept,
        description:
          "Les plus jeunes découvrent le football et développent leurs premières qualités motrices et techniques.",
        responsable: { nom: "Jérôme Jeanney", telephone: "06 65 37 98 00" },
        encadrants: ["Adnane Ibounou", "Jérémie Pentagrossa", "Serge"],
        entrainements: [
          { jour: "Mercredi", horaire: "13h45 – 15h30" },
          { jour: "Vendredi", horaire: "17h30 – 19h00", note: "U7 uniquement" },
        ],
      },
      {
        nom: "U8",
        sousTitre: nesEn(8),
        photo: photos.neuf,
        description:
          "Les joueurs poursuivent leur progression technique et commencent à développer le jeu collectif.",
        responsable: { nom: "Jérôme Jeanney", telephone: "06 65 37 98 00" },
        entrainements: [
          { jour: "Mercredi", horaire: "13h45 – 15h30" },
          { jour: "Vendredi", horaire: "17h30 – 19h00" },
        ],
      },
      {
        nom: "U9",
        sousTitre: nesEn(9),
        photo: photos.neuf,
        description:
          "Une nouvelle étape avec davantage de travail technique et collectif, avant le passage au foot à 8.",
        responsable: { nom: "Cédric Derby", telephone: "06 87 27 03 00" },
        entrainements: [
          { jour: "Mercredi", horaire: "17h00 – 18h45" },
          { jour: "Vendredi", horaire: "17h30 – 19h00" },
        ],
      },
    ],
    ressources: [
      {
        titre: "Calendrier des plateaux",
        texte: "Les dates prévisionnelles des plateaux de la saison.",
        href: "https://asmarvivo.fr/images/stories/Saison_2025_2026/planning_foot_educatif/Planning_Foot_Educatif_Previsionnel_2025_2026.pdf",
      },
      {
        titre: "Lois du jeu à 5",
        texte: "Les règles du football à 5 pour les catégories U8 et U9.",
        href: "https://var.fff.fr/wp-content/uploads/sites/66/2023/02/FFF_Affiche-lois-du-jeu_2022-2023_A4_05.png",
      },
      {
        titre: "Guide du football U6-U7",
        texte: "Le guide interactif de la FFF pour les plus jeunes.",
        href: "https://media.fff.fr/uploads/document/560cf5cbf13e03fd0acc9ee310ec623d.pdf",
      },
    ],
  },

  "foot-a-8": {
    titre: "Foot à 8",
    ages: "U10 à U13",
    metaTitle: "Foot à 8 (U10-U13) | AS Mar Vivo",
    metaDescription:
      "Les équipes Foot à 8 de l'AS Mar Vivo (U10 à U13) : horaires d'entraînement, éducateurs et compétitions.",
    photo: photos.douze,
    accroche:
      "Grandir, progresser et jouer ensemble : le foot à 8, c'est l'apprentissage du jeu collectif et de la compétition.",
    intro: {
      titre: "Grandir, progresser, jouer ensemble",
      paragraphes: [
        "Du U10 au U13, nos joueurs poursuivent leur formation avec des entraînements adaptés à leur âge et à leur niveau. L'objectif : développer les qualités techniques et collectives tout en gardant le plaisir du jeu.",
        "Les équipes participent aux compétitions du District du Var. Chaque match est l'occasion de mettre en pratique ce qui a été travaillé à l'entraînement.",
      ],
      points: [
        "Deux séances par semaine pour chaque catégorie",
        "Travail technique, tactique et collectif",
        "Championnats et coupes du District du Var",
        "Un éducateur référent par équipe",
      ],
    },
    equipes: [
      {
        nom: "U10",
        sousTitre: nesEn(10),
        responsable: { nom: "Robert C.", telephone: "06 99 89 70 69" },
        entrainements: [
          { jour: "Mardi", horaire: "17h30 – 19h00" },
          { jour: "Jeudi", horaire: "17h30 – 19h00" },
        ],
      },
      {
        nom: "U11",
        sousTitre: nesEn(11),
        responsable: { nom: "Florent G.", telephone: "06 56 85 96 27" },
        entrainements: [
          { jour: "Mardi", horaire: "17h30 – 19h00" },
          { jour: "Vendredi", horaire: "17h30 – 19h00" },
        ],
      },
      {
        nom: "U12",
        sousTitre: nesEn(12),
        responsable: { nom: "Vincent E.", telephone: "06 79 80 42 44" },
        entrainements: [
          { jour: "Mercredi", horaire: "15h30 – 17h00" },
          { jour: "Vendredi", horaire: "17h30 – 19h00" },
        ],
      },
      {
        nom: "U13",
        sousTitre: nesEn(13),
        responsable: { nom: "Guillaume B.", telephone: "06 95 16 26 37" },
        entrainements: [
          { jour: "Lundi", horaire: "17h30 – 19h00" },
          { jour: "Jeudi", horaire: "17h30 – 19h00" },
        ],
      },
    ],
    ressources: [
      {
        titre: "Résultats et classements",
        texte: "Tous les résultats des équipes du club sur le site de la FFF.",
        href: club.fffClub,
      },
    ],
  },

  "foot-a-11": {
    titre: "Foot à 11",
    ages: "U14 à Vétérans",
    metaTitle: "Foot à 11 (U14-Seniors) | AS Mar Vivo",
    metaDescription:
      "Les équipes Foot à 11 de l'AS Mar Vivo, de U14 aux Seniors, Loisirs et Vétérans : horaires d'entraînement, éducateurs et classements.",
    photo: photos.hero,
    accroche:
      "De la formation à la compétition : les équipes à 11 portent les couleurs de Mar Vivo chaque week-end.",
    intro: {
      titre: "De la formation à la compétition",
      paragraphes: [
        "À partir des U14, les joueurs passent au football à 11 et poursuivent leur formation au sein du club, jusqu'aux équipes seniors.",
        "Les séances travaillent les aspects techniques, tactiques et physiques, sans oublier les valeurs de l'AS Mar Vivo : plaisir, respect, engagement et esprit d'équipe.",
      ],
      points: [
        "Équipes jeunes U14 à U17",
        "Deux équipes seniors en compétition",
        "Une section Loisirs et une équipe Vétérans",
        "Classements en direct sur le site de la FFF",
      ],
    },
    equipes: [
      {
        nom: "U14 · U15 (2)",
        sousTitre: "U14 - U15",
        description:
          "Une catégorie tournée vers la progression, le collectif et la découverte du football à 11.",
        responsable: { nom: "David C.", telephone: "06 72 75 22 29" },
        entrainements: [
          { jour: "Mardi", horaire: "19h00 – 20h30" },
          { jour: "Jeudi", horaire: "19h00 – 20h30" },
        ],
      },
      {
        nom: "U15",
        sousTitre: "U15",
        description:
          "Développer les qualités techniques et tactiques tout en renforçant l'esprit collectif.",
        responsable: { nom: "David C.", telephone: "06 72 75 22 29" },
        entrainements: [
          { jour: "Mercredi", horaire: "19h00 – 20h30" },
          { jour: "Vendredi", horaire: "19h00 – 20h30" },
        ],
      },
      {
        nom: "U16 · U17",
        sousTitre: "U16 - U17",
        description:
          "Une étape importante dans la formation du joueur, avec davantage d'exigence et de compétition.",
        responsable: { nom: "Mohammed M.", telephone: "06 95 05 15 26" },
        entrainements: [
          { jour: "Lundi", horaire: "19h00 – 20h30" },
          { jour: "Mercredi", horaire: "19h00 – 20h30" },
          { jour: "Vendredi", horaire: "19h00 – 20h30" },
        ],
        classementUrl: classement("2026_15354_U17_3"),
      },
      {
        nom: "Seniors 1",
        sousTitre: "Équipe première",
        description:
          "L'équipe première évolue dans un cadre compétitif avec l'ambition de représenter fièrement Mar Vivo.",
        responsable: { nom: "Jérôme M.", telephone: "06 95 55 25 57" },
        entrainements: [
          { jour: "Mardi", horaire: "19h30 – 21h30" },
          { jour: "Jeudi", horaire: "19h30 – 21h30" },
        ],
        classementUrl: classement("2026_15354_SEM_1"),
      },
      {
        nom: "Seniors 2",
        sousTitre: "Seniors",
        description:
          "Poursuivre la pratique du football à 11 dans un esprit collectif et compétitif.",
        responsable: { nom: "Jérôme M.", telephone: "06 95 55 25 57" },
        entrainements: [
          { jour: "Mardi", horaire: "20h30 – 22h15" },
          { jour: "Jeudi", horaire: "20h30 – 22h15" },
        ],
      },
      {
        nom: "Loisirs",
        sousTitre: "Football loisir",
        description:
          "Jouer, se dépenser et partager un bon moment dans une ambiance conviviale, sans pression du résultat.",
        responsable: { nom: "Vincent E.", telephone: "06 79 80 42 44" },
        entrainements: [
          { jour: "Lundi", horaire: "20h30 – 22h15" },
          { jour: "Mercredi", horaire: "20h30 – 22h15" },
        ],
      },
      {
        nom: "Vétérans",
        sousTitre: "Football vétérans",
        description:
          "Pour les anciens et les passionnés qui veulent continuer à jouer ensemble. Contactez le responsable pour les horaires.",
        responsable: { nom: "Yves E.", telephone: "07 83 11 59 72" },
      },
    ],
    ressources: [
      {
        titre: "Résultats et classements",
        texte: "Tous les résultats des équipes du club sur le site de la FFF.",
        href: club.fffClub,
      },
    ],
  },
};
