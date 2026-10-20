import React from "react";
import Image from "next/image";
import Link from "next/link";

import { categories } from "@/data/club.js";
import SectionHeading from "@/components/SectionHeading/layout.js";

export default function Categorie() {
    return (
        <section id="equipes" className="section relative scroll-mt-20 overflow-hidden bg-primary-dark text-white">
            <div className="absolute inset-0 stripes" aria-hidden="true" />
            <div className="container-custom relative">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <SectionHeading
                        clair
                        surtitre="Nos équipes"
                        titre="Une place pour chaque âge"
                        texte="Du premier ballon aux compétitions seniors, trois pratiques pour grandir avec le club."
                    />
                    <a href="https://epreuves.fff.fr/competition/club/533107-av-s-mar-vivo/club" target="_blank" rel="noopener noreferrer" className="btn-ghost shrink-0">
                        Résultats FFF ↗
                    </a>
                </div>

                <ul className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
                    {categories.map((c, i) => (
                        <li key={c.slug} data-reveal style={{ "--reveal-delay": `${i * 120}ms` }} className="w-[82%] shrink-0 snap-center md:w-auto">
                            <Link
                                href={`/categories/${c.slug}`}
                                className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl p-7 ring-1 ring-white/10"
                            >
                                <Image
                                    src={c.photo}
                                    alt=""
                                    fill
                                    sizes="(min-width: 768px) 33vw, 82vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent transition-opacity duration-500 group-hover:opacity-90" aria-hidden="true" />
                                <div className="relative">
                                    <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
                                        {c.ages}
                                    </span>
                                    <h3 className="mt-4 text-5xl font-extrabold uppercase italic">{c.titre}</h3>
                                    <p className="mt-3 text-white/80">{c.accroche}</p>
                                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary">
                                        Horaires et éducateurs
                                        <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
