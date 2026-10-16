import React from 'react'
import logomarvivo from "@/images/logomarvivo.svg"
import hero from "@/images/hero.jpg"
import Image from 'next/image'
import Link from 'next/link'
import foot8 from "@/images/douze.jpg";


export default function layout() {
    return (
          <section className="relative h-[55vh] min-h-[450px] overflow-hidden">
        <Image
          src={foot8}
          alt="Équipe Foot à 8 de l'AS Mar Vivo"
          fill
          preload
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.25em] text-[#F5B642]">
              AS MAR VIVO
            </span>

            <h1 className="text-5xl font-bold text-white md:text-7xl">
              Foot à 8
            </h1>

            <p className="mt-4 text-xl font-medium text-white/90 md:text-2xl">
              De U10 à U13
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Une étape essentielle dans la progression de nos jeunes
              joueurs, entre développement technique, esprit d&apos;équipe
              et découverte de la compétition.
            </p>
          </div>
        </div>
      </section>
    )
}