import React from 'react'
import logomarvivo from "@/images/logomarvivo.svg"
import hero from "@/images/hero.jpg"
import Image from 'next/image'
import sept from "@/images/six.png"
import heroFoot5 from "@/images/six.png";

import Link from 'next/link'

export default function layout() {
    return (
       <section className="px-6 py-20 md:py-28">
              <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
      
                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#F0B34B]">
                    Le football à 5
                  </span>
      
                  <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
                    Les premières expériences sur le terrain
                  </h2>
      
                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    De U5 à U9, nos jeunes joueurs découvrent progressivement
                    le football dans un environnement adapté à leur âge.
                  </p>
      
                  <p className="mt-4 leading-7 text-slate-600">
                    Les séances permettent de développer les premières bases
                    techniques, la motricité et l'esprit collectif, tout en
                    conservant une place essentielle au plaisir du jeu.
                  </p>
      
                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      U5 à U9
                    </span>
      
                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      Football à 5
                    </span>
      
                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      Formation & plaisir
                    </span>
                  </div>
                </div>
      
                <div className="relative h-[350px] overflow-hidden rounded-3xl md:h-[450px]">
                  <Image
                    src={heroFoot5}
                    alt="Équipe de jeunes de l'AS Mar Vivo"
                    fill
                    className="object-cover"
                  />
                </div>
      
              </div>
            </section>
    )
}
