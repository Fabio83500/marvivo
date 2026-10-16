import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/categories/Header/layout.js"
import Hero from "@/components/categories/Hero8/layout.js"
import Entreinement from '@/components/categories/Entrainements/layout.js'
import Localisation from "@/components/Localisation/layout.js"
import Footer from "@/components/Footer/layout.js"
export default function FootA8() {
  return (
    <>
      <Head>
        <title>Foot à 8 (U10-U13) | AS Mar Vivo</title>
        <meta
          name="description"
          content="Découvrez la catégorie Foot à 8 de l'AS Mar Vivo (U10 à U13) : entraînements, encadrement et compétitions."
        />
      </Head>

      <Header />

      <main className="bg-white text-primary">

      {/* ================= HERO ================= */}
      <Hero />
      {/* ================= INTRODUCTION ================= */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
            Nos jeunes
          </span>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Grandir, progresser et jouer ensemble
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            Du U10 au U13, nos joueurs poursuivent leur formation à travers
            des entraînements adaptés à leur âge et leur niveau. L&apos;objectif
            est de développer les qualités techniques et collectives tout en
            conservant le plaisir du jeu et de la vie en équipe.
          </p>

        </div>
      </section>

   

      {/* ================= ENTRAINEMENTS ================= */}
      <Entreinement />
      {/* ================= COMPETITION ================= */}
      <section className=" px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
            La compétition
          </span>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Une progression aussi sur le terrain
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 md:text-lg">
            Les équipes Foot à 8 participent aux rencontres et compétitions
            organisées par les instances du football. Chaque match est
            l&apos;occasion de mettre en pratique les acquis des entraînements,
            de progresser collectivement et de partager de bons moments.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="https://epreuves.fff.fr/competition/club/533107-av-s-mar-vivo/club"
              className="rounded-full bg-[#F5B642] px-6 py-3 font-semibold text-primary transition hover:scale-105"
            >
              Voir les classements
            </Link>

          </div>

        </div>
      </section>

    

      {/* ================= CTA ================= */}
      <Localisation />

      </main>

      <Footer />
    </>
  );
}