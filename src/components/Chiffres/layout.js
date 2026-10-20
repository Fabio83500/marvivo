import React, { useEffect, useRef } from "react";

import { club, educateurs } from "@/data/club.js";

const chiffres = [
    { valeur: club.creation, label: "Année de création" },
    { valeur: educateurs.length, label: "Catégories, des U6 aux vétérans" },
    { valeur: 3, label: "Pratiques : foot à 5, à 8 et à 11" },
    { valeur: 2012, label: "Labellisé par la FFF" },
];

// Compte de 0 jusqu'à la valeur quand le chiffre arrive à l'écran.
// Le HTML rendu côté serveur contient la valeur finale (référencement, sans JavaScript).
function Compteur({ valeur, duree = 2000 }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        el.textContent = "0";
        let frame;
        // Démarre seulement quand le chiffre est entièrement visible
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            observer.disconnect();
            const debut = performance.now();
            const tick = (now) => {
                const progression = Math.min(1, (now - debut) / duree);
                const ralenti = 1 - Math.pow(1 - progression, 4);
                el.textContent = String(Math.round(valeur * ralenti));
                if (progression < 1) frame = requestAnimationFrame(tick);
            };
            frame = requestAnimationFrame(tick);
        }, { threshold: 1, rootMargin: "0px 0px -8% 0px" });
        observer.observe(el);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
            el.textContent = String(valeur);
        };
    }, [valeur, duree]);

    return (
        <>
            <span ref={ref} aria-hidden="true">
                {valeur}
            </span>
            <span className="sr-only">{valeur}</span>
        </>
    );
}

export default function Chiffres() {
    return (
        <section aria-label="Le club en chiffres" className="relative z-10 -mt-14">
            <div className="container-custom">
                <dl className="motion-safe:animate-fade-up motion-safe:anim-delay-600 grid grid-cols-2 overflow-hidden rounded-3xl bg-primary shadow-2xl shadow-primary/30 lg:grid-cols-4">
                    {chiffres.map((c, i) => (
                        <div
                            key={c.label}
                            className={`flex flex-col-reverse gap-1 p-6 md:p-8 ${i % 2 === 0 ? "border-r border-white/10" : ""} ${
                                i < 2 ? "border-b border-white/10 lg:border-b-0" : ""
                            } lg:border-r lg:last:border-r-0`}
                        >
                            <dt className="text-sm leading-snug text-white/70">{c.label}</dt>
                            <dd className="font-display text-5xl font-extrabold italic tabular-nums text-secondary md:text-6xl">
                                <Compteur valeur={c.valeur} />
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
