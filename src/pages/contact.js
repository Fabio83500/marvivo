import Page from "@/components/Page/layout.js";
import PageHero from "@/components/PageHero/layout.js";
import SectionHeading from "@/components/SectionHeading/layout.js";
import ContactForm from "@/components/ContactForm/layout.js";
import Localisation from "@/components/Localisation/layout.js";
import { club, photos, directionSportive, responsables, educateurs } from "@/data/club.js";

const tel = (numero) => `tel:${numero.replace(/\s/g, "")}`;

function Annuaire({ titre, personnes, cle }) {
  return (
    <div>
      <h3 className="text-3xl font-extrabold uppercase italic text-primary">{titre}</h3>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {personnes.map((p, i) => (
          <li key={p[cle] + p.nom} data-reveal style={{ "--reveal-delay": `${(i % 4) * 80}ms` }} className="flex items-center justify-between gap-3 rounded-2xl bg-white p-5 ring-1 ring-primary/10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-secondary">{p.fonction || p.categorie}</p>
              <p className="mt-1 font-semibold text-text">{p.nom}</p>
              {p.telephone && <p className="text-sm text-text/60">{p.telephone}</p>}
            </div>
            {p.telephone && (
              <a
                href={tel(p.telephone)}
                aria-label={`Appeler ${p.nom}`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition hover:bg-secondary hover:text-primary-dark"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Contact() {
  return (
    <Page
      title="Contact | AS Mar Vivo"
      description="Contactez l'AS Mar Vivo : formulaire de contact, coordonnées du club, direction sportive, responsables de catégories et éducateurs."
    >
      <PageHero
        surtitre="Une question ?"
        titre="Contact"
        texte="Inscriptions, entraînements, partenariats : écrivez-nous ou appelez directement l'éducateur de la catégorie."
        image={photos.treize}
      >
        <a href="#formulaire" className="btn-gold">
          Nous écrire
        </a>
        <a href="#contacts" className="btn-ghost">
          Les éducateurs
        </a>
      </PageHero>

      <section id="formulaire" className="section scroll-mt-20">
        <div className="container-custom grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading
              surtitre="Nous joindre"
              titre="Le club"
              texte="Pour toute question générale, utilisez le formulaire : votre message arrive directement dans la boîte du club."
            />
            <dl data-reveal className="mt-10 space-y-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${club.email}`} className="text-lg font-semibold text-primary hover:underline">
                    {club.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Téléphone</dt>
                <dd className="mt-1">
                  <a href={tel(club.telephone)} className="text-lg font-semibold text-primary hover:underline">
                    {club.telephone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Stade</dt>
                <dd className="mt-1 text-text/80">
                  {club.stade}, {club.stadeAdresse}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Siège social</dt>
                <dd className="mt-1 text-text/80">{club.siege}</dd>
              </div>
            </dl>
          </div>

          <div data-reveal="right">
            <ContactForm />
          </div>
        </div>
      </section>

      <section id="contacts" className="section scroll-mt-20 bg-white">
        <div className="container-custom space-y-16">
          <SectionHeading
            surtitre="L'annuaire du club"
            titre="Qui contacter ?"
            texte="Pour une séance d'essai ou une question sur une équipe, l'éducateur de la catégorie est votre meilleur interlocuteur."
          />
          <Annuaire titre="Direction sportive" personnes={directionSportive} cle="fonction" />
          <Annuaire titre="Responsables de pratique" personnes={responsables} cle="categorie" />
          <Annuaire titre="Éducateurs" personnes={educateurs} cle="categorie" />
        </div>
      </section>

      <Localisation />
    </Page>
  );
}
