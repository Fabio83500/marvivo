import React from "react";

import { club, educateurs } from "@/data/club.js";

const chiffres = [
    { valeur: club.creation, label: "Année de création" },
    { valeur: `${educateurs.length}`, label: "Catégories, des U6 aux vétérans" },
    { valeur: "3", label: "Pratiques : foot à 5, à 8 et à 11" },
    { valeur: "2012", label: "Labellisé par la FFF" },
];

export default function Chiffres() {
    return (
        <section aria-label="Le club en chiffres" className="relative z-10 -mt-14">
            <div className="container-custom">
                <dl className="grid grid-cols-2 overflow-hidden rounded-3xl bg-primary shadow-2xl shadow-primary/30 lg:grid-cols-4">
                    {chiffres.map((c, i) => (
                        <div
                            key={c.label}
                            className={`flex flex-col-reverse gap-1 p-6 md:p-8 ${i % 2 === 0 ? "border-r border-white/10" : ""} ${
                                i < 2 ? "border-b border-white/10 lg:border-b-0" : ""
                            } lg:border-r lg:last:border-r-0`}
                        >
                            <dt className="text-sm leading-snug text-white/70">{c.label}</dt>
                            <dd className="font-display text-5xl font-extrabold italic text-secondary md:text-6xl">{c.valeur}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
