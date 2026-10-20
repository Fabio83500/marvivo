import React from "react";
import Image from "next/image";
import Link from "next/link";

import { photos, club } from "@/data/club.js";
import SectionHeading from "@/components/SectionHeading/layout.js";

const atouts = [
    { titre: "Terrain synthétique", texte: "Un terrain praticable toute l'année, quelle que soit la météo." },
    { titre: "Vestiaires", texte: "Des vestiaires pour accueillir nos équipes et nos adversaires." },
    { titre: "Buvette", texte: "Un espace convivial pour se retrouver avant et après les matchs." },
];

export default function Complexe() {
    return (
        <section id="complexe" className="section scroll-mt-20">
            <div className="container-custom grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
                <div className="order-2 lg:order-1">
                    <SectionHeading
                        surtitre="Notre complexe"
                        titre={`Le ${club.stade}`}
                        texte="Plus qu'un terrain, un lieu de vie. C'est ici que nos équipes s'entraînent chaque semaine, reçoivent leurs adversaires et que joueurs, éducateurs et familles se retrouvent."
                    />
                    <ul className="mt-8 space-y-4">
                        {atouts.map((a) => (
                            <li key={a.titre} className="flex gap-4">
                                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-primary-dark" aria-hidden="true">
                                    ✓
                                </span>
                                <p>
                                    <span className="font-bold text-primary">{a.titre}.</span>{" "}
                                    <span className="text-text/70">{a.texte}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                    <Link href="/complexe" className="btn-blue mt-10">
                        Découvrir le complexe
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="relative order-1 lg:order-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                        <Image
                            src={photos.quinze}
                            alt={`Une équipe de l'AS Mar Vivo sur le terrain du ${club.stade}`}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 left-6 rounded-2xl bg-primary px-6 py-4 text-white shadow-xl">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Adresse</p>
                        <p className="mt-1 font-semibold">{club.stadeAdresse}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
