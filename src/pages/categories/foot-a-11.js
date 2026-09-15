import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/layout.js"
import Localisation from "@/components/Localisation/layout.js"
import Footer from "@/components/Footer/layout.js"
import heroFoot11 from "@/images/quatorze.png";
// Tu peux remplacer cette image par celle que tu as réellement

export default function FootA11() {
    const equipes = [
        {
            name: "U14 / U15 (2)",
            age: "U14 - U15",
            coach: "David C.",
            description:
                "Une catégorie tournée vers la progression, le collectif et la découverte du football à 11.",
            entrainements: [
                {
                    jour: "Mardi",
                    horaire: "19h00 - 20h30",
                },
                {
                    jour: "Jeudi",
                    horaire: "19h00 - 20h30",
                },
            ],
        },

        {
            name: "U15",
            age: "U15",
            coach: "David C.",
            description:
                "Développer les qualités techniques et tactiques tout en renforçant l'esprit collectif.",
            entrainements: [
                {
                    jour: "Mercredi",
                    horaire: "19h00 - 20h30",
                },
                {
                    jour: "Vendredi",
                    horaire: "19h00 - 20h30",
                },
            ],
        },

        {
            name: "U16 - U17",
            age: "U16 - U17",
            coach: "Mohammed M.",
            description:
                "Une étape importante dans la formation du joueur avec davantage d'exigence et de compétition.",
            entrainements: [
                {
                    jour: "Lundi",
                    horaire: "19h00 - 20h30",
                },
                {
                    jour: "Mercredi",
                    horaire: "19h00 - 20h30",
                },
                {
                    jour: "Vendredi",
                    horaire: "19h00 - 20h30",
                },
            ],
            classement: true,
            classementUrl:
                "https://epreuves.fff.fr/competition/club/533107-av-s-mar-vivo/equipe/2026_15354_U17_3/classement",
        },

        {
            name: "Seniors 1",
            age: "Seniors",
            coach: "Jérôme M.",
            description:
                "L'équipe première du club évolue dans un cadre compétitif avec l'ambition de représenter fièrement Mar Vivo.",
            entrainements: [
                {
                    jour: "Mardi",
                    horaire: "19h30 - 21h30",
                },
                {
                    jour: "Jeudi",
                    horaire: "19h30 - 21h30",
                },
            ],
            classement: true,
            classementUrl:
                "https://epreuves.fff.fr/competition/club/533107-av-s-mar-vivo/equipe/2026_15354_SEM_1/classement",
        },

        {
            name: "Seniors 2",
            age: "Seniors",
            coach: "Jérôme M.",
            description:
                "Une équipe qui permet de poursuivre la pratique du football à 11 dans un esprit collectif et compétitif.",
            entrainements: [
                {
                    jour: "Mardi",
                    horaire: "20h30 - 22h15",
                },
                {
                    jour: "Jeudi",
                    horaire: "20h30 - 22h15",
                },
            ],
        },
        {
    name: "Loisirs",
    age: "Football Loisir",
    coach: "Vincent E.",
    description:
        "Une pratique du football ouverte à ceux qui souhaitent jouer, se dépenser et partager un bon moment dans une ambiance conviviale.",
    entrainements: [
        {
            jour: "Lundi",
            horaire: "20h30 - 22h15",
        },
        {
            jour: "Mercredi",
            horaire: "20h30 - 22h15",
        },
    ],
    loisir: true,
    contact: "06 79 80 42 44",
},
    ];

    return (
        <main>
            <Header />

            {/* ===================================================== */}
            {/* HERO */}
            {/* ===================================================== */}

            <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">

                <Image
                    src={heroFoot11}
                    alt="Équipe de football à 11 de Mar Vivo"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/65"></div>

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">

                    <span className="mb-5 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
                        U14 à Seniors
                    </span>

                    <h1 className="text-5xl font-black tracking-tight md:text-7xl">
                        Foot à 11
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
                        Retrouvez toutes les équipes de football à 11 de
                        l'AS Mar Vivo, leurs horaires d'entraînement et les
                        informations liées à la compétition.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

                        <a
                            href="#equipes"
                            className="rounded-full bg-[#F5B642] px-7 py-3.5 font-bold text-primary transition hover:scale-105 hover:bg-[#ffc75a]"
                        >
                            Découvrir les équipes
                        </a>

                        <Link
                            href="/contact"
                            className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-primary"
                        >
                            Rejoindre le club
                        </Link>

                    </div>

                </div>

            </section>


            <section className="bg-white py-20 md:py-28">

                <div className="mx-auto max-w-6xl px-6">

                    <div className="grid items-center gap-12 md:grid-cols-2">

                        <div>

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                                Le football à 11
                            </span>

                            <h2 className="mt-3 text-4xl font-black tracking-tight text-primary md:text-5xl">
                                De la formation à la compétition
                            </h2>

                        </div>

                        <div className="text-gray-600">

                            <p className="text-lg leading-relaxed">
                                À partir des catégories U14, les joueurs
                                évoluent dans le football à 11 et poursuivent
                                leur formation au sein du club.
                            </p>

                            <p className="mt-5 leading-relaxed">
                                Les séances permettent de travailler les
                                aspects techniques, tactiques et physiques
                                tout en conservant les valeurs essentielles
                                de l'AS Mar Vivo : plaisir, respect,
                                engagement et esprit d'équipe.
                            </p>
                            

                        </div>
                        

                    </div>

                </div>

            </section>




            {/* ===================================================== */}
            {/* EQUIPES */}
            {/* ===================================================== */}

            <section
                id="equipes"
                className="bg-slate-50 py-20 md:py-28"
            >

                <div className="mx-auto max-w-6xl px-6">

                    <div className="mx-auto mb-14 max-w-3xl text-center">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                            Nos équipes
                        </span>

                        <h2 className="mt-3 text-4xl font-black tracking-tight text-primary md:text-5xl">
                            Le Foot à 11 à Mar Vivo
                        </h2>

                        <p className="mt-5 text-lg leading-relaxed text-gray-600">
                            Retrouvez les différentes catégories,
                            leurs entraîneurs et leurs créneaux
                            d'entraînement.
                        </p>

                    </div>


                    <div className="grid gap-6 md:grid-cols-2">

                        {equipes.map((equipe, index) => (

                            <article
                                key={index}
                                className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >

                                {/* Header carte */}

                                <div className="bg-primary p-7 text-white">

                                    <div className="flex items-start justify-between gap-4">

                                        <div>

                                            <span className="text-sm font-semibold uppercase tracking-widest text-[#F5B642]">
                                                {equipe.age}
                                            </span>

                                            <h3 className="mt-1 text-3xl font-black">
                                                {equipe.name}
                                            </h3>

                                        </div>

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl">
                                            ⚽
                                        </div>

                                    </div>

                                </div>


                                {/* Contenu */}

                                <div className="p-7">

                                    <p className="leading-relaxed text-gray-600">
                                        {equipe.description}
                                    </p>


                                    {/* Entraîneur */}

                                    {equipe.coach && (
                                        <div className="mt-6 flex items-center gap-4 rounded-2xl bg-slate-50 p-4">

                                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                                                👤
                                            </div>

                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                    Éducateur responsable
                                                </p>

                                                <p className="mt-0.5 font-bold text-primary">
                                                    {equipe.coach}
                                                </p>
                                            </div>

                                        </div>
                                    )}


                                    {/* Horaires */}

                                    {equipe.entrainements && (
                                        <div className="mt-6">

                                            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
                                                Entraînements
                                            </h4>

                                            <div className="space-y-2">

                                                {equipe.entrainements.map(
                                                    (entrainement, i) => (

                                                        <div
                                                            key={i}
                                                            className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
                                                        >

                                                            <span className="font-semibold text-gray-700">
                                                                {entrainement.jour}
                                                            </span>

                                                            <span className="font-bold text-primary">
                                                                {entrainement.horaire}
                                                            </span>

                                                        </div>

                                                    )
                                                )}

                                            </div>

                                        </div>
                                    )}


                                    {/* Classement FFF */}

                                    {equipe.classement && (
                                        <div className="mt-6 rounded-2xl border border-[#F5B642]/40 bg-[#F5B642]/10 p-5">

                                            <div className="flex items-start gap-4">

                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5B642] text-xl">
                                                    🏆
                                                </div>

                                                <div className="flex-1">

                                                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                                                        Compétition
                                                    </p>

                                                    <h4 className="mt-1 font-bold text-primary">
                                                        Classement officiel
                                                    </h4>

                                                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                                                        Consultez les résultats
                                                        et le classement de
                                                        cette équipe sur le
                                                        site officiel de la FFF.
                                                    </p>

                                                    <a
                                                        href={equipe.classementUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary/90"
                                                    >
                                                        Voir le classement
                                                        <span>↗</span>
                                                    </a>

                                                </div>

                                            </div>

                                        </div>
                                    )}

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>

            <Localisation />
            <Footer />

        </main>
    );
}