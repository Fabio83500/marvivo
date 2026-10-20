import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header/layout.js"
import Localisation from "@/components/Localisation/layout.js"
import Footer from "@/components/Footer/layout.js"
export default function MentionsLegales() {
    return (
        <>
            <Head>
                <title>Mentions légales | AS Mar Vivo</title>
                <meta
                    name="description"
                    content="Mentions légales du site de l'AS Mar Vivo : éditeur, hébergement, conception et propriété intellectuelle."
                />
            </Head>

            <Header />

            <main className="min-h-screen bg-slate-50">

            <section className="relative overflow-hidden bg-primary px-6 py-32 text-white">
                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5" />
                <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-secondary/10" />

                <div className="relative mx-auto max-w-5xl motion-safe:animate-fade-up">
                    <span className="text-sm font-bold uppercase tracking-[0.25em] text-secondary">
                        Informations légales
                    </span>

                    <h1 className="mt-5 text-5xl font-black tracking-tight md:text-6xl">
                        Mentions légales
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                        Retrouvez ici les informations relatives à l’éditeur,
                        à l’hébergement et à la réalisation du site de l’AS Mar Vivo.
                    </p>
                </div>
            </section>


            <section className="px-6 py-20">
                <div className="mx-auto max-w-4xl space-y-8">

                    {/* Éditeur */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <span className="text-sm font-bold uppercase tracking-widest text-secondary">
                            01
                        </span>

                        <h2 className="mt-3 text-2xl font-black text-primary">
                            Éditeur du site
                        </h2>

                        <div className="mt-6 space-y-2 text-gray-600">
                            <p>
                                <strong className="text-gray-900">
                                    Association Sportive Mar Vivo
                                </strong>
                            </p>

                            <p>
                                Association régie par la loi du 1er juillet 1901.
                            </p>

                            <p>
                                Siège social : <strong>Avenue Henri Guillaume, 83500 La Seyne-sur-Mer</strong>
                            </p>

                            <p>
                                Email : <strong>asmarvivo@orange.fr</strong>
                            </p>

                            <p>
                                Téléphone : <strong>06 79 80 42 44</strong>
                            </p>

                            <p>
                                Responsable de la publication :
                                <strong>Vincent Eutrope</strong>
                            </p>
                        </div>
                    </article>


                    {/* Hébergement */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <span className="text-sm font-bold uppercase tracking-widest text-secondary">
                            02
                        </span>

                        <h2 className="mt-3 text-2xl font-black text-primary">
                            Hébergement
                        </h2>

                        <div className="mt-6 space-y-2 text-gray-600">
                            <p>
                                Le site est hébergé par :
                            </p>

                            <p>
                                <strong className="text-gray-900">
                                    OVH SAS
                                </strong>
                            </p>

                            <p>
                                Capital social : 50 000 000 €
                            </p>

                            <p>
                                RCS Lille Métropole : 424 761 419
                            </p>

                            <p>
                                N° TVA intracommunautaire : FR 22 424 761 419
                            </p>

                            <p>
                                Siège social : 2 rue Kellermann, 59100 Roubaix, France
                            </p>

                            <p>
                                Site internet :{" "}
                                <a
                                    href="https://www.ovhcloud.com/fr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-primary hover:text-secondary"
                                >
                                    ovhcloud.com
                                </a>
                            </p>
                        </div>
                    </article>


                    {/* Développement */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <span className="text-sm font-bold uppercase tracking-widest text-secondary">
                            03
                        </span>

                        <h2 className="mt-3 text-2xl font-black text-primary">
                            Conception & développement
                        </h2>

                        <div className="mt-6 space-y-3 text-gray-600">
                            <p>
                                Le site internet a été conçu et développé par :
                            </p>

                            <p className="text-lg font-bold text-primary">
                                MF Agency
                            </p>

                            <p>
                                Conception, développement et intégration du site internet.
                            </p>

                            <p>
                                Contact :{" "}
                                <a
                                    href="mailto:mfagency83@gmail.com"
                                    className="font-semibold text-primary hover:text-secondary"
                                >
                                    mfagency83@gmail.com
                                </a>
                            </p>
                        </div>
                    </article>


                    {/* Propriété intellectuelle */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <span className="text-sm font-bold uppercase tracking-widest text-secondary">
                            04
                        </span>

                        <h2 className="mt-3 text-2xl font-black text-primary">
                            Propriété intellectuelle
                        </h2>

                        <div className="mt-6 space-y-4 leading-relaxed text-gray-600">
                            <p>
                                L’ensemble des éléments présents sur ce site,
                                notamment les textes, photographies, graphismes,
                                logos, icônes et éléments visuels, sont protégés
                                par les dispositions relatives à la propriété
                                intellectuelle.
                            </p>

                            <p>
                                Toute reproduction, représentation, modification,
                                publication ou adaptation de tout ou partie du site,
                                quel que soit le moyen ou le procédé utilisé, est
                                interdite sans autorisation préalable de l’AS Mar Vivo
                                ou des titulaires des droits concernés.
                            </p>
                        </div>
                    </article>


                    {/* Responsabilité */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <span className="text-sm font-bold uppercase tracking-widest text-secondary">
                            05
                        </span>

                        <h2 className="mt-3 text-2xl font-black text-primary">
                            Responsabilité
                        </h2>

                        <div className="mt-6 space-y-4 leading-relaxed text-gray-600">
                            <p>
                                L’AS Mar Vivo s’efforce de maintenir les informations
                                publiées sur ce site à jour et exactes.
                            </p>

                            <p>
                                Toutefois, l’association ne saurait être tenue
                                responsable des éventuelles erreurs, omissions ou
                                indisponibilités temporaires du site.
                            </p>

                            <p>
                                Les liens vers des sites externes sont proposés à
                                titre informatif. L’AS Mar Vivo ne peut être tenue
                                responsable du contenu de ces sites tiers.
                            </p>
                        </div>
                    </article>


                    {/* Retour */}

                    <div className="pt-4 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            ← Retour à l’accueil
                        </Link>
                    </div>

                </div>
            </section>
            <Localisation />

            </main>

            <Footer />
        </>
    );
}