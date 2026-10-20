import React from "react";
import Image from "next/image";
import Link from "next/link";

import Page from "@/components/Page/layout.js";
import PageHero from "@/components/PageHero/layout.js";
import SectionHeading from "@/components/SectionHeading/layout.js";
import Localisation from "@/components/Localisation/layout.js";
import { categories } from "@/data/club.js";

function Entrainements({ entrainements }) {
    if (!entrainements?.length) {
        return (
            <p className="rounded-xl bg-background px-4 py-3 text-sm text-text/60">
                Horaires communiqués par le responsable de l&apos;équipe.
            </p>
        );
    }

    return (
        <ul className="space-y-2">
            {entrainements.map((e) => (
                <li key={e.jour + e.horaire} className="flex items-center justify-between gap-4 rounded-xl bg-background px-4 py-3">
                    <span className="font-semibold text-text">
                        {e.jour}
                        {e.note && <span className="ml-2 text-xs font-normal text-text/50">({e.note})</span>}
                    </span>
                    <span className="font-display text-lg font-bold text-primary">{e.horaire}</span>
                </li>
            ))}
        </ul>
    );
}

function CarteEquipe({ equipe }) {
    const { responsable } = equipe;

    return (
        <article className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-primary/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            {equipe.photo ? (
                <div className="relative aspect-[16/9]">
                    <Image src={equipe.photo} alt={`Équipe ${equipe.nom} de l'AS Mar Vivo`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-5 left-6 text-white">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">{equipe.sousTitre}</p>
                        <h3 className="mt-1 text-4xl font-extrabold uppercase italic">{equipe.nom}</h3>
                    </div>
                </div>
            ) : (
                <div className="relative overflow-hidden bg-primary px-6 py-6 text-white">
                    <div className="absolute inset-0 stripes" aria-hidden="true" />
                    <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-secondary">{equipe.sousTitre}</p>
                    <h3 className="relative mt-1 text-4xl font-extrabold uppercase italic">{equipe.nom}</h3>
                </div>
            )}

            <div className="flex flex-1 flex-col gap-6 p-6">
                {equipe.description && <p className="leading-relaxed text-text/70">{equipe.description}</p>}

                <div className="grid gap-4 sm:grid-cols-2">
                    {responsable && (
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-text/45">Éducateur responsable</p>
                            <p className="mt-1 font-semibold text-text">{responsable.nom}</p>
                            {responsable.telephone && (
                                <a href={`tel:${responsable.telephone.replace(/\s/g, "")}`} className="text-sm font-semibold text-primary hover:text-secondary">
                                    {responsable.telephone}
                                </a>
                            )}
                        </div>
                    )}
                    {equipe.encadrants && (
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-text/45">Encadrants</p>
                            <p className="mt-1 text-sm leading-relaxed text-text/80">{equipe.encadrants.join(", ")}</p>
                        </div>
                    )}
                </div>

                <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-text/45">Entraînements</p>
                    <Entrainements entrainements={equipe.entrainements} />
                </div>

                {equipe.classementUrl && (
                    <a
                        href={equipe.classementUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-between rounded-xl bg-secondary/15 px-4 py-3 text-sm font-bold uppercase tracking-wider text-primary-dark transition hover:bg-secondary"
                    >
                        Classement officiel FFF
                        <span aria-hidden="true">↗</span>
                    </a>
                )}
            </div>
        </article>
    );
}

// Modèle commun aux pages Foot à 5 / Foot à 8 / Foot à 11.
export default function CategoryPage({ slug, page }) {
    const autres = categories.filter((c) => c.slug !== slug);

    return (
        <Page title={page.metaTitle} description={page.metaDescription}>
            <PageHero surtitre={page.ages} titre={page.titre} texte={page.accroche} image={page.photo}>
                <a href="#equipes" className="btn-gold">
                    Horaires et éducateurs
                </a>
                <Link href="/inscriptions" className="btn-ghost">
                    S&apos;inscrire
                </Link>
            </PageHero>

            <section className="section">
                <div className="container-custom grid gap-12 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <SectionHeading surtitre="La pratique" titre={page.intro.titre} />
                        {page.intro.paragraphes.map((p) => (
                            <p key={p} className="mt-5 text-lg leading-relaxed text-text/70">
                                {p}
                            </p>
                        ))}
                    </div>
                    <ul className="grid content-center gap-4 sm:grid-cols-2">
                        {page.intro.points.map((point, i) => (
                            <li key={point} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primary/10">
                                <span className="font-display text-4xl font-extrabold italic text-secondary">0{i + 1}</span>
                                <p className="mt-2 font-semibold leading-snug text-primary">{point}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="equipes" className="section scroll-mt-20 bg-white">
                <div className="container-custom">
                    <SectionHeading
                        surtitre="Nos équipes"
                        titre="Horaires et éducateurs"
                        texte="Tous les entraînements ont lieu au Stade Squillaci. Pour une séance d'essai, contactez directement l'éducateur de la catégorie."
                    />
                    {/* 4 équipes : grille 2×2 plutôt qu'une carte seule sur la dernière ligne */}
                    <div className={`mt-12 grid gap-6 md:grid-cols-2 ${page.equipes.length === 4 ? "" : "xl:grid-cols-3"}`}>
                        {page.equipes.map((equipe) => (
                            <CarteEquipe key={equipe.nom} equipe={equipe} />
                        ))}
                    </div>
                </div>
            </section>

            {page.ressources?.length > 0 && (
                <section className="section">
                    <div className="container-custom">
                        <SectionHeading surtitre="À savoir" titre="Informations utiles" />
                        <ul className="mt-10 grid gap-5 md:grid-cols-3">
                            {page.ressources.map((r) => (
                                <li key={r.href}>
                                    <a
                                        href={r.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-primary/10 transition hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <h3 className="text-2xl font-bold uppercase italic text-primary">{r.titre}</h3>
                                        <p className="mt-2 flex-1 text-text/65">{r.texte}</p>
                                        <span className="mt-5 text-sm font-bold uppercase tracking-wider text-secondary">
                                            Consulter <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            <section className="bg-primary-dark py-14 text-white">
                <div className="container-custom flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <p className="font-display text-3xl font-extrabold uppercase italic">Les autres pratiques</p>
                    <div className="flex flex-wrap gap-3">
                        {autres.map((c) => (
                            <Link key={c.slug} href={`/categories/${c.slug}`} className="btn-ghost">
                                {c.titre} · {c.ages}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Localisation />
        </Page>
    );
}
