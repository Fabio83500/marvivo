import Link from "next/link";

import Page from "@/components/Page/layout.js";
import PageHero from "@/components/PageHero/layout.js";
import SectionHeading from "@/components/SectionHeading/layout.js";
import { etapes } from "@/components/Rejoindre/layout.js";
import { club, photos, saison, anneeNaissance } from "@/data/club.js";

const tranches = [
  { pratique: "Foot à 5", slug: "foot-a-5", categories: [6, 7, 8, 9] },
  { pratique: "Foot à 8", slug: "foot-a-8", categories: [10, 11, 12, 13] },
  { pratique: "Foot à 11", slug: "foot-a-11", categories: [14, 15, 16, 17] },
];

const documents = [
  {
    titre: "Demande de licence FFF",
    texte: "Remplie en ligne : le club vous envoie le lien par email après votre premier contact.",
  },
  {
    titre: "Certificat médical ou questionnaire de santé",
    texte: "Pour les mineurs, un questionnaire de santé suffit en général. Pour les majeurs, un certificat médical peut être demandé.",
  },
  {
    titre: "Photo d'identité",
    texte: "Une photo récente, de face, pour la licence.",
  },
  {
    titre: "Pièce d'identité",
    texte: "Du joueur, ou livret de famille pour les plus jeunes.",
  },
  {
    titre: "Cotisation annuelle",
    texte: "Son montant varie selon la catégorie. Le club vous le communique lors de l'inscription.",
  },
];

const questions = [
  {
    q: "Peut-on faire un essai avant de s'inscrire ?",
    r: "Oui. Contactez l'éducateur de la catégorie pour convenir d'une ou deux séances d'essai au Stade Squillaci.",
  },
  {
    q: "Mon enfant n'a jamais joué au football, est-ce un problème ?",
    r: "Pas du tout. Chaque catégorie accueille des débutants et les séances sont adaptées au niveau de chacun.",
  },
  {
    q: "Les filles peuvent-elles s'inscrire ?",
    r: "Bien sûr. Les filles sont les bienvenues dans nos catégories jeunes.",
  },
  {
    q: "Peut-on s'inscrire en cours de saison ?",
    r: "Oui, les inscriptions restent ouvertes toute la saison, dans la limite des places disponibles dans chaque catégorie.",
  },
  {
    q: "Le club accepte-t-il le Pass'Sport ?",
    r: "Renseignez-vous auprès du club au moment de l'inscription sur les aides disponibles (Pass'Sport, aides de la ville ou du CE).",
  },
];

export default function Inscriptions() {
  return (
    <Page
      title={`Inscriptions ${saison.libelle} | AS Mar Vivo`}
      description="Comment s'inscrire à l'AS Mar Vivo : catégories par année de naissance, documents à fournir, séance d'essai et contacts des éducateurs."
    >
      <PageHero
        surtitre={`Saison ${saison.libelle}`}
        titre="Inscriptions"
        texte="Débutant ou confirmé, de 5 ans à plus de 40 ans : il y a une place pour vous à l'AS Mar Vivo."
        image={photos.neuf}
      >
        <a href="#categories" className="btn-gold">
          Trouver ma catégorie
        </a>
        <Link href="/contact?sujet=Inscription" className="btn-ghost">
          Nous écrire
        </Link>
      </PageHero>

      <section className="section">
        <div className="container-custom">
          <SectionHeading surtitre="Étape par étape" titre="Comment s'inscrire" />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {etapes.map((e, i) => (
              <li key={e.titre} className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-primary/10">
                <span className="absolute -top-4 -right-2 font-display text-[9rem] leading-none font-extrabold italic text-primary/5" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-display text-2xl font-extrabold text-primary-dark">
                  {i + 1}
                </span>
                <h3 className="relative mt-5 text-2xl font-bold uppercase italic text-primary">{e.titre}</h3>
                <p className="relative mt-2 leading-relaxed text-text/70">{e.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="categories" className="section scroll-mt-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            surtitre={`Saison ${saison.libelle}`}
            titre="Quelle catégorie ?"
            texte="La catégorie dépend de l'année de naissance. Cliquez sur une pratique pour voir les horaires et les éducateurs."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tranches.map((t) => (
              <Link
                key={t.slug}
                href={`/categories/${t.slug}`}
                className="group overflow-hidden rounded-3xl bg-background ring-1 ring-primary/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between bg-primary px-6 py-5 text-white">
                  <h3 className="text-3xl font-extrabold uppercase italic">{t.pratique}</h3>
                  <span className="text-secondary transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </div>
                <ul className="divide-y divide-primary/10 px-6 py-2">
                  {t.categories.map((u) => (
                    <li key={u} className="flex items-center justify-between py-3">
                      <span className="font-display text-xl font-bold text-primary">U{u}</span>
                      <span className="text-text/70">nés en {anneeNaissance(u)}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
          <p className="mt-8 rounded-2xl bg-secondary/15 px-6 py-4 text-text/80">
            <strong className="text-primary-dark">Adultes :</strong> nés en {anneeNaissance(18)} et avant, rejoignez nos équipes
            Seniors, notre section Loisirs ou nos Vétérans. Voir la page{" "}
            <Link href="/categories/foot-a-11" className="font-semibold text-primary underline">
              Foot à 11
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              surtitre="Le dossier"
              titre="Documents à fournir"
              texte="Préparez ces éléments pour aller plus vite. Le club vous accompagne pour chaque étape."
            />
            <ul className="mt-10 space-y-4">
              {documents.map((d) => (
                <li key={d.titre} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-primary/10">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-secondary" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-primary">{d.titre}</h3>
                    <p className="mt-1 text-text/70">{d.texte}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading surtitre="Questions fréquentes" titre="Bon à savoir" />
            <div className="mt-10 space-y-3">
              {questions.map((item) => (
                <details key={item.q} className="group rounded-2xl bg-white p-5 ring-1 ring-primary/10 open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-primary">
                    {item.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background text-xl transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-text/70">{item.r}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-dark py-20 text-white">
        <div className="absolute inset-0 stripes" aria-hidden="true" />
        <div className="container-custom relative text-center">
          <h2 className="title-lg">
            Une question ? <span className="text-secondary">On vous répond.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
            Écrivez-nous ou appelez le {club.telephone}. Vous pouvez aussi joindre directement l&apos;éducateur de la catégorie.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact?sujet=Inscription" className="btn-gold">
              Contacter le club
            </Link>
            <Link href="/contact#contacts" className="btn-ghost">
              Voir les éducateurs
            </Link>
          </div>
        </div>
      </section>
    </Page>
  );
}
