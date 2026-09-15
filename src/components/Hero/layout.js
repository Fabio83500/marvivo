import React from 'react'
import logomarvivo from "@/images/logomarvivo.svg"
import hero from "@/images/hero.jpg"
import Image from 'next/image'
import Link from 'next/link'

export default function layout() {
    return (
        <div className="z-1">
            <div
                className="relative min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${hero.src})` }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Dégradé en bas pour le texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>


                {/* Logo central */}
                <div className="flex flex-col px-4 md:px-8 lg:px-0 items-center justify-center absolute inset-0">
                    <Image
                        src={logomarvivo}
                        width={200}
                        height={200}
                        quality={90}
                        priority
                        alt="Logo AS Mar Vivo"
                        className="object-contain 2xl:w-[20rem] xl:w-[20rem]"
                    />
                </div>


                {/* Texte du Hero */}
                <div className="absolute bottom-10 left-0 w-full px-6 md:px-12 lg:px-20">

                    <div className="max-w-2xl text-left">

                        <span className="text-secondary font-semibold tracking-[0.25em] uppercase text-sm md:text-base">
                            AS Mar Vivo
                        </span>

                        <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mt-2">
                            Une équipe.
                            <br />
                            Une passion. Un club.
                        </h1>

                        <p className="text-white/90 text-base md:text-lg mt-4 max-w-xl">
                            Découvrez nos équipes, notre complexe et toute l’actualité
                            de l’AS Mar Vivo.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-6">

                            <Link
                                href="#categories"
                                className="bg-secondary text-primary font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
                            >
                                Découvrir nos équipes
                            </Link>

                            <Link
                                href="/contact"
                                className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary transition"
                            >
                                Nous rejoindre
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}