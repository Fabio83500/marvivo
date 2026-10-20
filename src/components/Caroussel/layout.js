import React from "react";
import Image from "next/image";
import Link from "next/link";

import { partenaires } from "@/data/club.js";

export default function Partenaires() {
    // La liste est dupliquée pour que le défilement boucle sans coupure.
    const defilement = [...partenaires, ...partenaires];

    return (
        <section id="partenaires" className="scroll-mt-20 border-y border-primary/10 bg-white py-16">
            <div className="container-custom flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                <div>
                    <span className="eyebrow">Ils nous soutiennent</span>
                    <h2 className="mt-3 font-display text-3xl font-extrabold uppercase italic text-primary md:text-4xl">Nos partenaires</h2>
                </div>
                <Link href="/contact?sujet=Partenariat" className="text-sm font-bold uppercase tracking-wider text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">
                    Devenir partenaire →
                </Link>
            </div>

            <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <ul className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused] motion-reduce:animate-none">
                    {defilement.map((p, i) => (
                        <li
                            key={`${p.nom}-${i}`}
                            aria-hidden={i >= partenaires.length ? true : undefined}
                            className="flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl bg-background p-5 grayscale transition hover:grayscale-0"
                        >
                            <Image src={p.logo} alt={i >= partenaires.length ? "" : p.nom} className="max-h-full w-auto object-contain" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
