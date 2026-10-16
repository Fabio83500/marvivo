import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/layout.js"
import Footer from "@/components/Footer/layout.js"

import logomarvivo from "@/images/logomarvivo.svg";

export default function Complexe() {
    return (
        <>
            <Head>
                <title>Le complexe | AS Mar Vivo</title>
                <meta
                    name="description"
                    content="Découvrez le complexe sportif de l'AS Mar Vivo à La Seyne-sur-Mer : terrains, vestiaires et espace de convivialité du club."
                />
            </Head>

            <Header />

            <main className="min-h-screen bg-slate-50">

            {/* ===================================================== */}
            {/* PAGE */}
            {/* ===================================================== */}

            <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

                {/* Décorations */}

                <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5" />

                <div className="pointer-events-none absolute -bottom-48 -left-40 h-[550px] w-[550px] rounded-full bg-[#F5B642]/10" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5" />

                {/* Contenu */}

                <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-32 text-center">

                    {/* Logo */}

                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white p-5 shadow-xl ring-1 ring-black/5 md:h-32 md:w-32">

                        <Image
                            src={logomarvivo}
                            alt="AS Mar Vivo"
                            width={130}
                            height={130}
                            preload
                            className="h-full w-full object-contain"
                        />

                    </div>


                    {/* Petit label */}

                    <div className="mt-10">

                        <span className="inline-flex items-center gap-2 rounded-full border border-[#F5B642]/30 bg-[#F5B642]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b47d15]">

                            <span className="h-1.5 w-1.5 rounded-full bg-[#F5B642] animate-pulse"></span>

                            En préparation

                        </span>

                    </div>


                    {/* Titre */}

                    <h1 className="mt-7 text-5xl font-black tracking-tight text-primary md:text-7xl">

                        Le complexe

                    </h1>


                    {/* Ligne dorée */}

                    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#F5B642]" />


                    {/* Texte */}

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">

                        <span className="font-semibold text-primary">
                            Présentation prochainement disponible.
                        </span>

                        <br />

                        Nous préparons actuellement cette page afin de vous
                        présenter prochainement les installations de
                        l&apos;AS Mar Vivo.

                    </p>


                    {/* Cartes */}

                    <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">

                        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">

                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-xl">
                                ⚽
                            </div>

                            <p className="mt-3 text-sm font-bold text-primary">
                                Terrains
                            </p>

                        </div>


                        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">

                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-xl">
                                🏠
                            </div>

                            <p className="mt-3 text-sm font-bold text-primary">
                                Vestiaires
                            </p>

                        </div>


                        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">

                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-xl">
                                ☕
                            </div>

                            <p className="mt-3 text-sm font-bold text-primary">
                                Buvette
                            </p>

                        </div>

                    </div>


                    {/* Boutons */}

                    <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            <span className="mr-2">←</span>
                            Retour à l&apos;accueil
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full border border-primary/10 bg-white px-7 py-3.5 font-bold text-primary shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#F5B642]/50 hover:shadow-md"
                        >
                            Nous contacter
                            <span className="ml-2">→</span>
                        </Link>

                    </div>


                    {/* Bas de page */}

                    <p className="mt-16 text-sm text-gray-400">
                        AS Mar Vivo
                    </p>

                </div>

            </section>

            </main>

            <Footer />
        </>
    );
}