import React from "react";
import Link from "next/link";
import Image from "next/image";

import complexe from "@/images/sept.jpg";

export default function layout() {
  return (
    <section id="complexe" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* Contenu */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Notre complexe
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-primary md:text-4xl">
              Un lieu au cœur de la vie du club
            </h2>

            <p className="mt-6 text-base leading-7 text-text/75">
              Plus qu&apos;un terrain, notre complexe est un véritable lieu de
              vie pour l&apos;AS Mar Vivo. C&apos;est ici que nos équipes
              s&apos;entraînent, se retrouvent et partagent leur passion du
              football tout au long de la saison.
            </p>

            <p className="mt-4 text-base leading-7 text-text/75">
              Joueurs, éducateurs, familles et supporters s&apos;y retrouvent
              dans une ambiance conviviale, autour du sport et des valeurs qui
              font l&apos;identité du club.
            </p>

            {/* Petites infos */}
            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="text-2xl">⚽</div>
                <h3 className="mt-2 font-semibold text-primary">
                  Nos terrains
                </h3>
                <p className="mt-1 text-sm text-text/65">
                  Des espaces dédiés à l&apos;entraînement et à la compétition.
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="text-2xl">☕</div>
                <h3 className="mt-2 font-semibold text-primary">
                  La convivialité
                </h3>
                <p className="mt-1 text-sm text-text/65">
                  Un espace pour se retrouver avant et après les matchs.
                </p>
              </div>

            </div>

            {/* Bouton */}
            <div className="mt-8">
              <Link
                href="/complexe"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-secondary hover:text-text"
              >
                Découvrir le complexe →
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={complexe}
                alt="Complexe sportif de l'AS Mar Vivo"
                className="h-[450px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Petit élément décoratif */}
          </div>

        </div>

      </div>
    </section>
  );
}