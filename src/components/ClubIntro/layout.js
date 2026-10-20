import React from "react";
import Image from "next/image";
import Link from "next/link";

import labelFFF from "@/images/label-fff.png";
import { photos, valeurs } from "@/data/club.js";
import SectionHeading from "@/components/SectionHeading/layout.js";

export default function ClubIntro() {
    return (
        <section id="club" className="section scroll-mt-20">
            <div className="container-custom grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <div data-reveal="left" className="relative">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[5/4] lg:aspect-[4/5]">
                        <Image
                            src={photos.six}
                            alt="Les jeunes de l'école de football de l'AS Mar Vivo et leurs éducateurs"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-8 -right-4 flex items-center gap-4 rounded-2xl bg-white p-4 pr-6 shadow-xl md:-right-8">
                        <Image src={labelFFF} alt="Label Jeunes de la Fédération Française de Football" className="h-16 w-auto" />
                        <p className="text-sm leading-snug">
                            <span className="block font-bold text-primary">Club labellisé FFF</span>
                            <span className="text-text/60">depuis octobre 2012</span>
                        </p>
                    </div>
                    <div className="absolute -top-4 -left-4 -z-10 h-32 w-32 rounded-3xl bg-secondary" aria-hidden="true" />
                </div>

                <div>
                    <SectionHeading
                        surtitre="Le club"
                        titre="Plus qu'un club, une famille"
                        texte="Depuis 1980, l'AS Mar Vivo fait vivre le football au cœur de La Seyne-sur-Mer. Éducateurs bénévoles, joueurs, parents et partenaires partagent une même ambition : former des joueurs, mais surtout des personnes."
                    />

                    <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                        {valeurs.map((v, i) => (
                            <li key={v.titre} data-reveal style={{ "--reveal-delay": `${i * 100}ms` }} className="rounded-2xl border border-primary/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
                                <span className="font-display text-sm font-bold text-secondary">0{i + 1}</span>
                                <h3 className="mt-1 text-xl font-bold uppercase italic text-primary">{v.titre}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-text/65">{v.texte}</p>
                            </li>
                        ))}
                    </ul>

                    <Link href="/le-club" className="btn-blue mt-10">
                        Découvrir le club
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
