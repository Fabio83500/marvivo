import React from "react";
import Link from "next/link";
import Header from "@/components/Header/layout.js"
import Localisation from "@/components/Localisation/layout.js"
import Footer from "@/components/Footer/layout.js"
export default function Contact() {
    const directionSportive = [
        {
            nom: "Mohammed Mellouki",
            fonction: "Directeur sportif",
            telephone: "06 95 05 15 26",
        },
        {
            nom: "Jérôme Jeanney",
            fonction: "Cellule de direction sportive",
            telephone: "06 65 37 98 00",
        },
        {
            nom: "Cédric Derby",
            fonction: "Cellule de direction sportive",
            telephone: null,
        },
        {
            nom: "Christophe Baroni",
            fonction: "Cellule de direction sportive",
            telephone: "06 20 91 76 06",
        },
    ];

    const responsables = [
        {
            categorie: "Foot à 5",
            nom: "Jérôme Jeanney",
            telephone: "06 65 37 98 00",
        },
        {
            categorie: "Transition Foot à 5 → Foot à 8",
            nom: "Cédric Derby",
            telephone: null,
        },
        {
            categorie: "Foot à 8",
            nom: "Christophe Baroni",
            telephone: "06 20 91 76 06",
        },
        {
            categorie: "Foot à 11",
            nom: "Mohammed Mellouki",
            telephone: "06 95 05 15 26",
        },
    ];

    const educateurs = [
        {
            categorie: "U6",
            nom: "Jérôme Jeanney",
            telephone: "06 65 37 98 00",
        },
        {
            categorie: "U7",
            nom: "Cyril E.",
            telephone: "06 58 14 41 68",
        },
        {
            categorie: "U8",
            nom: "Jérôme J.",
            telephone: "06 65 37 98 00",
        },
        {
            categorie: "U9",
            nom: "Laurent E.",
            telephone: "06 95 48 25 78",
        },
        {
            categorie: "U10",
            nom: "Robert C.",
            telephone: "06 99 89 70 69",
        },
        {
            categorie: "U11",
            nom: "Florent G.",
            telephone: "06 56 85 96 27",
        },
        {
            categorie: "U12",
            nom: "Vincent E.",
            telephone: "06 79 80 42 44",
        },
        {
            categorie: "U13",
            nom: "Guillaume B.",
            telephone: "06 95 16 26 37",
        },
        {
            categorie: "U15",
            nom: "David C.",
            telephone: "06 72 75 22 29",
        },
        {
            categorie: "U16",
            nom: "Mohammed M.",
            telephone: "06 95 05 15 26",
        },
        {
            categorie: "Seniors",
            nom: "Jérôme M.",
            telephone: "06 95 55 25 57",
        },
        {
            categorie: "Loisirs",
            nom: "Vincent",
            telephone: "06 79 80 42 44",
        },
        {
            categorie: "Vétérans",
            nom: "Yves E.",
            telephone: "07 83 11 59 72",
        },
    ];

    return (
        <main>
            <Header />

            {/* ===================================================== */}
            {/* HERO */}
            {/* ===================================================== */}

            <section className="relative overflow-hidden bg-primary">

                {/* Cercles décoratifs */}

                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F5B642]/10" />

                <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white/5" />

                <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-6xl items-center px-6 py-32 text-center">

                    <div className="mx-auto max-w-3xl text-white">

                        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642] backdrop-blur-sm">
                            AS Mar Vivo
                        </span>

                        <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
                            Contact
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
                            Une question sur les inscriptions, les entraînements
                            ou les différentes catégories ? Retrouvez ici les
                            principaux contacts du club.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

                            <a
                                href="#contacts"
                                className="rounded-full bg-[#F5B642] px-7 py-3.5 font-bold text-primary transition hover:scale-105 hover:bg-[#ffc75a]"
                            >
                                Nos contacts
                            </a>

                            <Link
                                href="/complexe"
                                className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-primary"
                            >
                                Découvrir le complexe
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* ===================================================== */}
            {/* INTRO */}
            {/* ===================================================== */}

            <section
                id="contacts"
                className="bg-white py-20 md:py-28"
            >

                <div className="mx-auto max-w-6xl px-6">

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                            L'équipe du club
                        </span>

                        <h2 className="mt-3 text-4xl font-black tracking-tight text-primary md:text-5xl">
                            Les contacts de l'AS Mar Vivo
                        </h2>

                        <p className="mt-5 text-lg leading-relaxed text-gray-600">
                            Notre équipe est disponible pour répondre à vos
                            questions et vous orienter vers le bon
                            interlocuteur.
                        </p>

                    </div>


                    {/* ================================================= */}
                    {/* DIRECTION SPORTIVE */}
                    {/* ================================================= */}

                    <div className="mt-16">

                        <div className="mb-8">

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                                Direction
                            </span>

                            <h3 className="mt-2 text-3xl font-black text-primary md:text-4xl">
                                Direction sportive
                            </h3>

                            <p className="mt-3 max-w-2xl text-gray-600">
                                La cellule de direction sportive accompagne
                                l'organisation et le développement des
                                différentes catégories du club.
                            </p>

                        </div>


                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                            {directionSportive.map((personne, index) => (

                                <div
                                    key={index}
                                    className="group rounded-3xl bg-slate-50 p-7 ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-xl"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-white transition group-hover:bg-[#F5B642] group-hover:text-primary">
                                        👤
                                    </div>

                                    <p className="mt-6 text-xs font-bold uppercase tracking-wider text-[#d99d28] group-hover:text-[#F5B642]">
                                        {personne.fonction}
                                    </p>

                                    <h4 className="mt-2 text-xl font-black text-primary group-hover:text-white">
                                        {personne.nom}
                                    </h4>

                                    {personne.telephone && (
                                        <a
                                            href={`tel:${personne.telephone.replace(
                                                /\s/g,
                                                ""
                                            )}`}
                                            className="mt-5 block text-sm font-semibold text-gray-600 transition group-hover:text-white/80"
                                        >
                                            📞 {personne.telephone}
                                        </a>
                                    )}

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* ===================================================== */}
            {/* RESPONSABLES DES CATÉGORIES */}
            {/* ===================================================== */}

            <section className="bg-slate-50 py-20 md:py-28">

                <div className="mx-auto max-w-6xl px-6">

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                            Catégories
                        </span>

                        <h2 className="mt-3 text-4xl font-black tracking-tight text-primary md:text-5xl">
                            Les responsables sportifs
                        </h2>

                        <p className="mt-5 text-lg leading-relaxed text-gray-600">
                            Pour une demande concernant une catégorie
                            spécifique, contactez directement son responsable.
                        </p>

                    </div>


                    <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">

                        {responsables.map((responsable, index) => (

                            <div
                                key={index}
                                className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:flex-row sm:items-center sm:justify-between"
                            >

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                                        ⚽
                                    </div>

                                    <div>

                                        <p className="text-xs font-bold uppercase tracking-wider text-[#d99d28]">
                                            {responsable.categorie}
                                        </p>

                                        <p className="mt-1 font-bold text-primary">
                                            {responsable.nom}
                                        </p>

                                    </div>

                                </div>


                                {responsable.telephone ? (
                                    <a
                                        href={`tel:${responsable.telephone.replace(
                                            /\s/g,
                                            ""
                                        )}`}
                                        className="w-fit rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
                                    >
                                        📞 {responsable.telephone}
                                    </a>
                                ) : (
                                    <span className="text-sm text-gray-400">
                                        Contact à préciser
                                    </span>
                                )}

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ===================================================== */}
            {/* ÉDUCATEURS */}
            {/* ===================================================== */}

            <section className="bg-white py-20 md:py-28">

                <div className="mx-auto max-w-6xl px-6">

                    <div className="mb-12">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                            Encadrement
                        </span>

                        <h2 className="mt-3 text-4xl font-black tracking-tight text-primary md:text-5xl">
                            Les éducateurs
                        </h2>

                        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
                            Retrouvez les éducateurs responsables des
                            différentes catégories du club.
                        </p>

                    </div>


                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                        {educateurs.map((educateur, index) => (

                            <div
                                key={index}
                                className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition hover:border-[#F5B642]/40 hover:shadow-md"
                            >

                                <div className="flex items-center gap-4">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                                        {educateur.categorie.replace(
                                            "Seniors",
                                            "S"
                                        ).replace(
                                            "Loisirs",
                                            "L"
                                        )}
                                    </div>

                                    <div>

                                        <p className="text-xs font-bold uppercase tracking-wider text-[#d99d28]">
                                            {educateur.categorie}
                                        </p>

                                        <p className="mt-0.5 font-bold text-primary">
                                            {educateur.nom}
                                        </p>

                                    </div>

                                </div>


                                <a
                                    href={`tel:${educateur.telephone.replace(
                                        /\s/g,
                                        ""
                                    )}`}
                                    className="shrink-0 text-sm font-semibold text-gray-500 transition hover:text-primary"
                                    title={`Appeler ${educateur.nom}`}
                                >
                                    📞
                                </a>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ===================================================== */}
            {/* CONTACT RAPIDE */}
            {/* ===================================================== */}

            <section className="bg-slate-50 py-20 md:py-28">

                <div className="mx-auto max-w-6xl px-6">

                    <div className="overflow-hidden rounded-[2rem] bg-primary shadow-xl">

                        <div className="grid md:grid-cols-2">

                            {/* Texte */}

                            <div className="p-8 md:p-12">

                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                                    Une question ?
                                </span>

                                <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                                    Parlons football.
                                </h2>

                                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                                    Vous souhaitez inscrire votre enfant,
                                    rejoindre une équipe ou obtenir des
                                    informations sur le club ? N'hésitez pas
                                    à contacter directement l'équipe de
                                    l'AS Mar Vivo.
                                </p>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                    <a
                                        href="tel:0695051526"
                                        className="inline-flex items-center justify-center rounded-full bg-[#F5B642] px-6 py-3.5 font-bold text-primary transition hover:scale-105 hover:bg-[#ffc75a]"
                                    >
                                        📞 Appeler le club
                                    </a>

                                    <Link
                                        href="/categories/foot-a-11"
                                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white hover:text-primary"
                                    >
                                        Voir les catégories
                                    </Link>

                                </div>

                            </div>


                            {/* Bloc décoratif */}

                            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#F5B642]">

                                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20" />

                                <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/10" />

                                <div className="relative z-10 text-center">

                                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary text-6xl shadow-xl">
                                        ⚽
                                    </div>

                                    <h3 className="mt-6 text-3xl font-black text-primary">
                                        AS Mar Vivo
                                    </h3>

                                    <p className="mt-2 font-medium text-primary/70">
                                        Football • Formation • Passion
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ===================================================== */}
            {/* CTA FINAL */}
            {/* ===================================================== */}

            <section className="bg-white py-20 md:py-24">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                        AS Mar Vivo
                    </span>

                    <h2 className="mt-3 text-4xl font-black text-primary md:text-5xl">
                        Prêt à rejoindre le club ?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
                        Découvrez nos différentes catégories et trouvez
                        l'équipe qui correspond à votre âge et à votre
                        pratique du football.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                        <Link
                            href="/categories/foot-a-5"
                            className="rounded-full bg-primary px-7 py-3.5 font-bold text-white transition hover:scale-105"
                        >
                            Foot à 5
                        </Link>

                        <Link
                            href="/categories/foot-a-8"
                            className="rounded-full bg-primary px-7 py-3.5 font-bold text-white transition hover:scale-105"
                        >
                            Foot à 8
                        </Link>

                        <Link
                            href="/categories/foot-a-11"
                            className="rounded-full bg-[#F5B642] px-7 py-3.5 font-bold text-primary transition hover:scale-105 hover:bg-[#ffc75a]"
                        >
                            Foot à 11
                        </Link>

                    </div>

                </div>

            </section>
            <Localisation />
            <Footer />

        </main>
    );
}