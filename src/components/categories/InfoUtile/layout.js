import React from 'react'


import Link from 'next/link'

export default function layout() {
    return (
         <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#F0B34B]">
              À savoir
            </span>

            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Informations utiles
            </h2>
          </div>


          <div className="grid gap-5 md:grid-cols-3">

            <Link
              href="https://asmarvivo.fr/images/stories/Saison_2025_2026/planning_foot_educatif/Planning_Foot_Educatif_Previsionnel_2025_2026.pdf" 

              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <span className="text-3xl">📅</span>

              <h3 className="mt-5 text-xl font-bold text-primary">
                Calendrier des plateaux
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Retrouvez les dates prévisionnelles des plateaux
                pour les jeunes catégories.
              </p>

              <Link 
              href="https://asmarvivo.fr/images/stories/Saison_2025_2026/planning_foot_educatif/Planning_Foot_Educatif_Previsionnel_2025_2026.pdf" 
              className="mt-5 block font-semibold text-primary">
                Consulter →
              </Link>
            </Link>


            <Link
              href="https://var.fff.fr/wp-content/uploads/sites/66/2023/02/FFF_Affiche-lois-du-jeu_2022-2023_A4_05.png"

              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <span className="text-3xl">⚽</span>

              <h3 className="mt-5 text-xl font-bold text-primary">
                Lois du jeu
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Découvrez les règles et spécificités du football
                à 5 pour les catégories U8-U9.
              </p>

              <Link 
              href="https://var.fff.fr/wp-content/uploads/sites/66/2023/02/FFF_Affiche-lois-du-jeu_2022-2023_A4_05.png"
               className="mt-5 block font-semibold text-primary">
                Découvrir →
              </Link>
            </Link>


            <Link
              href="https://media.fff.fr/uploads/document/560cf5cbf13e03fd0acc9ee310ec623d.pdf" 
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <span className="text-3xl">📖</span>

              <h3 className="mt-5 text-xl font-bold text-primary">
                Guide du football
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Retrouvez le guide interactif du football
                pour les catégories U6-U7.
              </p>

              <Link href="https://media.fff.fr/uploads/document/560cf5cbf13e03fd0acc9ee310ec623d.pdf" 
              className="mt-5 block font-semibold text-primary">
                Consulter →
              </Link>
            </Link>

          </div>

        </div>
      </section>
    )
}
