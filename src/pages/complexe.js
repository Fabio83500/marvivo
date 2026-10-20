import Image from "next/image";
import Link from "next/link";

import Page from "@/components/Page/layout.js";
import PageHero from "@/components/PageHero/layout.js";
import SectionHeading from "@/components/SectionHeading/layout.js";
import Localisation from "@/components/Localisation/layout.js";
import { club, photos } from "@/data/club.js";

const installations = [
  {
    titre: "Le terrain",
    texte:
      "Un terrain synthétique praticable toute l'année, qui accueille les entraînements de toutes nos catégories et les matchs à domicile.",
  },
  {
    titre: "Les vestiaires",
    texte: "Des vestiaires pour nos équipes, nos adversaires et les arbitres, les jours d'entraînement comme les jours de match.",
  },
  {
    titre: "La buvette",
    texte: "Le point de rendez-vous des familles et des supporters, avant, pendant et après les rencontres.",
  },
];

const galerie = [photos.hero, photos.six, photos.quatorze, photos.neuf, photos.treize];

export default function Complexe() {
  return (
    <Page
      title="Le complexe | AS Mar Vivo"
      description="Le Stade Squillaci, complexe sportif de l'AS Mar Vivo à La Seyne-sur-Mer : terrain, vestiaires, buvette et accès."
    >
      <PageHero
        surtitre="Notre complexe"
        titre={club.stade}
        texte="Le terrain de l'AS Mar Vivo, au cœur de La Seyne-sur-Mer : là où nos équipes s'entraînent, jouent et se retrouvent."
        image={photos.complexe}
      >
        <a href={club.mapsLien} target="_blank" rel="noopener noreferrer" className="btn-gold">
          Itinéraire ↗
        </a>
      </PageHero>

      <section className="section">
        <div className="container-custom">
          <SectionHeading
            surtitre="Les installations"
            titre="Un lieu de vie pour le club"
            texte="Plus qu'un terrain : un lieu où joueurs, éducateurs, familles et supporters partagent leur passion tout au long de la saison."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {installations.map((item, i) => (
              <li key={item.titre} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-primary/10">
                <span className="font-display text-5xl font-extrabold italic text-secondary">0{i + 1}</span>
                <h3 className="mt-3 text-3xl font-extrabold uppercase italic text-primary">{item.titre}</h3>
                <p className="mt-3 leading-relaxed text-text/70">{item.texte}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom">
          <SectionHeading surtitre="En images" titre="La vie au stade" />
          <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
            {galerie.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <Image
                  src={photo}
                  alt={`Équipe de l'AS Mar Vivo au ${club.stade}`}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-primary p-8 text-white md:p-10">
            <span className="eyebrow">Venir au stade</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase italic">Accès</h2>
            <p className="mt-4 leading-relaxed text-white/80">
              {club.stade}, {club.stadeAdresse}. Merci de respecter le voisinage en vous garant sur les places prévues à cet effet.
            </p>
            <a href={club.mapsLien} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8">
              Ouvrir dans Google Maps ↗
            </a>
          </div>
          <div className="rounded-3xl bg-white p-8 ring-1 ring-primary/10 md:p-10">
            <span className="eyebrow">Au quotidien</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase italic text-primary">Horaires</h2>
            <p className="mt-4 leading-relaxed text-text/70">
              Le stade vit du lundi au vendredi en fin d&apos;après-midi et en soirée pour les entraînements, le mercredi après-midi pour
              l&apos;école de foot, et le week-end pour les matchs et plateaux.
            </p>
            <Link href="/categories/foot-a-5" className="btn-blue mt-8">
              Voir les horaires par équipe
            </Link>
          </div>
        </div>
      </section>

      <Localisation />
    </Page>
  );
}
