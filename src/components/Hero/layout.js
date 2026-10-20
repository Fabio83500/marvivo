import React from "react";
import Image from "next/image";
import Link from "next/link";

import logomarvivo from "@/images/logomarvivo.svg";
import { photos, club } from "@/data/club.js";

export default function Hero() {
    return (
        <section className="relative flex min-h-svh items-center overflow-hidden bg-primary-dark text-white">
            <Image
                src={photos.hero}
                alt="Une équipe de l'AS Mar Vivo au Stade Squillaci"
                fill
                preload
                sizes="100vw"
                className="object-cover object-[center_30%] motion-safe:animate-ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-primary-dark/20" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark/40" aria-hidden="true" />
            <div className="absolute inset-0 stripes" aria-hidden="true" />
            <div className="absolute -right-32 top-0 hidden h-full w-[38%] -skew-x-12 border-l-4 border-secondary/60 bg-primary/30 lg:block" aria-hidden="true" />

            <div className="container-custom relative grid items-center gap-12 pt-28 pb-24 lg:grid-cols-[1.4fr_1fr]">
                <div>
                    <span className="eyebrow motion-safe:animate-fade-up">La Seyne-sur-Mer · Depuis {club.creation}</span>

                    <h1 className="title-xl mt-6 motion-safe:animate-fade-up motion-safe:anim-delay-150">
                        <span className="sr-only">AS Mar Vivo, club de football de La Seyne-sur-Mer. </span>
                        Une équipe.
                        <span className="block motion-safe:animate-fade-up motion-safe:anim-delay-350">Une passion.</span>
                        <span className="block text-secondary motion-safe:animate-fade-up motion-safe:anim-delay-550">Un club.</span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 motion-safe:animate-fade-up motion-safe:anim-delay-700 md:text-xl">
                        De l&apos;école de foot aux seniors, l&apos;AS Mar Vivo accueille petits et grands au Stade Squillaci
                        pour apprendre, progresser et partager la passion du football.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4 motion-safe:animate-fade-up motion-safe:anim-delay-850">
                        <Link href="/inscriptions" className="btn-gold">
                            Rejoindre le club
                            <span aria-hidden="true">→</span>
                        </Link>
                        <Link href="#equipes" className="btn-ghost">
                            Découvrir nos équipes
                        </Link>
                    </div>
                </div>

                <div className="hidden justify-center motion-safe:animate-pop-in motion-safe:anim-delay-400 lg:flex">
                    <Image
                        src={logomarvivo}
                        alt=""
                        width={360}
                        height={360}
                        preload
                        className="w-80 drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)] motion-safe:animate-float xl:w-96"
                    />
                </div>
            </div>

            <a
                href="#club"
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 transition hover:text-secondary md:flex"
            >
                Défiler
                <span className="h-10 w-px animate-pulse bg-current" aria-hidden="true" />
            </a>
        </section>
    );
}
