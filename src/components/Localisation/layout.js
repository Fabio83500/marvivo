import React from "react";

import { club } from "@/data/club.js";

export default function Localisation() {
    return (
        <section aria-labelledby="localisation-titre" className="relative bg-background">
            <div className="grid lg:grid-cols-[1fr_1.6fr]">
                <div className="bg-primary-dark px-5 py-14 text-white md:px-12 lg:py-20">
                    <span className="eyebrow">Nous trouver</span>
                    <h2 id="localisation-titre" className="mt-4 font-display text-4xl font-extrabold uppercase italic md:text-5xl">
                        {club.stade}
                    </h2>
                    <address className="mt-8 space-y-6 not-italic">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Terrain d&apos;entraînement</p>
                            <p className="mt-1 text-white/85">{club.stadeAdresse}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Siège social</p>
                            <p className="mt-1 text-white/85">{club.siege}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Contact</p>
                            <p className="mt-1">
                                <a href={`mailto:${club.email}`} className="text-white/85 hover:text-secondary">{club.email}</a>
                                <br />
                                <a href={`tel:${club.telephoneLien}`} className="text-white/85 hover:text-secondary">{club.telephone}</a>
                            </p>
                        </div>
                    </address>
                    <a href={club.mapsLien} target="_blank" rel="noopener noreferrer" className="btn-gold mt-10">
                        Itinéraire ↗
                    </a>
                </div>
                <iframe
                    src={club.mapsEmbed}
                    title={`Plan d'accès au ${club.stade}, AS Mar Vivo`}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="h-96 w-full border-0 lg:h-full lg:min-h-[480px]"
                />
            </div>
        </section>
    );
}
