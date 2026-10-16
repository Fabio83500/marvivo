import React from "react";
import Link from "next/link";
import Image from "next/image";

import terrain from "@/images/terrain.jpg";

export default function CTA() {
  return (
    <section className="">
      <div className="relative overflow-hidden">

        {/* Image de fond */}
        <Image
          src={terrain}
          alt=""
          fill
          preload
          className="object-cover"
        />

        {/* Overlay bleu */}
        <div className="absolute inset-0 bg-primary/75" />

        {/* Contenu */}
        <div className="relative z-10 flex min-h-[420px] items-center justify-center px-6 py-16 text-center md:min-h-[480px]">

          <div className="max-w-2xl">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              AS Mar Vivo
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Rejoignez-nous
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/90 md:text-lg">
              Une équipe, une passion, une aventure.
              Découvrez comment rejoindre l&apos;AS Mar Vivo et partager
              votre passion du football avec nous.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-secondary px-7 py-3.5 font-semibold text-text transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Rejoindre le club
              <span className="ml-2 text-lg">→</span>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}