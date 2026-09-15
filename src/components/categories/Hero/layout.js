import React from 'react'
import logomarvivo from "@/images/logomarvivo.svg"
import hero from "@/images/hero.jpg"
import Image from 'next/image'
import sept from "@/images/six.png"
import heroFoot5 from "@/images/sept.jpg";

import Link from 'next/link'

export default function layout() {
    return (
          <section className="relative h-[65vh] min-h-[450px] overflow-hidden">
        <Image
          src={heroFoot5}
          alt="Jeunes joueurs de l'AS Mar Vivo"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-4xl text-white">

            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-[#F0B34B]">
              AS MAR VIVO
            </span>

            <h1 className="text-5xl font-bold md:text-7xl">
              Foot à 5
            </h1>

            <p className="mt-4 text-xl font-medium md:text-2xl">
              De U5 à U9
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
              Les premières années de football à l'AS Mar Vivo :
              apprendre, progresser et surtout prendre plaisir à jouer ensemble.
            </p>

          </div>
        </div>
      </section>
    )
}
