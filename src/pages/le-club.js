import Image from "next/image";
import Link from "next/link";

import Page from "@/components/Page/layout.js";
import PageHero from "@/components/PageHero/layout.js";
import SectionHeading from "@/components/SectionHeading/layout.js";
import Chiffres from "@/components/Chiffres/layout.js";
import Partenaires from "@/components/Caroussel/layout.js";
import labelFFF from "@/images/label-fff.png";
import logomarvivo from "@/images/logomarvivo.svg";
import { club, photos, valeurs, directionSportive, responsables } from "@/data/club.js";

const histoire = [
  {
    annee: "1980",
    titre: "La naissance du club",
    texte:
      "L'Association Sportive Mar Vivo voit le jour dans le quartier de Mar Vivo, à La Seyne-sur-Mer, et adopte le bleu et le doré.",
  },
  {
    annee: "2012",
    titre: "Le label FFF",
    texte:
      "En octobre 2012, la Fédération Française de Football labellise le club, reconnaissant la qualité de son projet éducatif et de l'encadrement de ses jeunes.",
  },
  {
    annee: "Aujourd'hui",
    titre: "Des U6 aux vétérans",
    texte:
      "Le club compte des équipes dans toutes les catégories, de l'école de football aux seniors, avec une section loisirs et une équipe vétérans.",
  },
];

function Contact({ personne }) {
  return (
    <li className="rounded-2xl bg-white p-6 ring-1 ring-primary/10">
      <p className="text-xs font-bold uppercase tracking-wider text-secondary">{personne.fonction || personne.categorie}</p>
      <p className="mt-2 font-display text-2xl font-bold uppercase italic text-primary">{personne.nom}</p>
      {personne.telephone && (
        <a href={`tel:${personne.telephone.replace(/\s/g, "")}`} className="mt-1 inline-block text-sm font-semibold text-text/70 hover:text-primary">
          {personne.telephone}
        </a>
      )}
    </li>
  );
}

export default function LeClub() {
  return (
    <Page
      title="Le club | AS Mar Vivo"
      description="Histoire, valeurs et encadrement de l'AS Mar Vivo, club de football de La Seyne-sur-Mer fondé en 1980 et labellisé par la FFF."
    >
      <PageHero
        surtitre={`Depuis ${club.creation}`}
        titre="Le club"
        texte="Un club de quartier porté par ses bénévoles et ses valeurs depuis plus de quarante ans."
        image={photos.sept}
      />

      <div className="pt-14">
        <Chiffres />
      </div>

      <section className="section">
        <div className="container-custom grid items-center gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="flex justify-center">
            <Image src={logomarvivo} alt="Écusson de l'AS Mar Vivo" width={420} height={420} className="w-72 md:w-96" />
          </div>
          <div>
            <SectionHeading surtitre="Notre identité" titre="Un écusson, une ville" />
            <p className="mt-6 text-lg leading-relaxed text-text/70">
              Sur notre écusson, les rochers des Deux Frères et la mer rappellent d&apos;où nous venons : Les
              Sablettes, Mar Vivo, La Seyne-sur-Mer. Le bleu et le doré sont nos couleurs depuis 1980.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text/70">
              Le club accueille chaque saison des enfants, des adolescents et des adultes, encadrés par
              des éducateurs passionnés, pour la plupart bénévoles.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading surtitre="Notre histoire" titre="Les grandes dates" />
          <ol className="relative mt-14 grid gap-8 md:grid-cols-3">
            <div className="absolute top-7 right-0 left-0 hidden h-0.5 bg-secondary/40 md:block" aria-hidden="true" />
            {histoire.map((h) => (
              <li key={h.annee} className="relative">
                <span className="relative inline-flex h-14 items-center rounded-full bg-primary px-6 font-display text-2xl font-extrabold italic text-secondary">
                  {h.annee}
                </span>
                <h3 className="mt-6 text-2xl font-bold uppercase italic text-primary">{h.titre}</h3>
                <p className="mt-3 leading-relaxed text-text/70">{h.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-0 stripes" aria-hidden="true" />
        <div className="container-custom relative">
          <SectionHeading clair centre surtitre="Ce qui nous rassemble" titre="Nos valeurs" />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valeurs.map((v, i) => (
              <li key={v.titre} className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
                <span className="font-display text-6xl font-extrabold italic text-secondary">0{i + 1}</span>
                <h3 className="mt-4 text-3xl font-extrabold uppercase italic">{v.titre}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{v.texte}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col items-center gap-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-primary/10 md:flex-row md:p-12">
            <Image src={labelFFF} alt="Label Jeunes Excellence de la Fédération Française de Football" className="h-32 w-auto shrink-0" />
            <div>
              <span className="eyebrow">Formation des jeunes</span>
              <h2 className="mt-3 font-display text-4xl font-extrabold uppercase italic text-primary">Un club labellisé par la FFF</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text/70">
                L&apos;AS Mar Vivo est labellisée par la Fédération Française de Football depuis {club.labelFFF}. Ce label
                reconnaît l&apos;engagement du club dans la formation, l&apos;accueil et l&apos;accompagnement de ses jeunes
                licenciés, ainsi que la qualification de ses éducateurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            surtitre="L'encadrement"
            titre="Direction sportive"
            texte="Une équipe de passionnés organise la vie sportive du club et accompagne les éducateurs au quotidien."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {directionSportive.map((p) => (
              <Contact key={p.nom} personne={p} />
            ))}
          </ul>

          <h3 className="mt-16 text-3xl font-extrabold uppercase italic text-primary">Responsables de pratique</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {responsables.map((p) => (
              <Contact key={p.categorie} personne={p} />
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact#contacts" className="btn-blue">
              Tous les contacts
            </Link>
            <Link href="/inscriptions" className="btn-gold">
              Rejoindre le club
            </Link>
          </div>
        </div>
      </section>

      <Partenaires />
    </Page>
  );
}
