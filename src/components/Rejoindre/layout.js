import React from "react";
import Image from "next/image";
import Link from "next/link";

import pelouse from "@/images/photos/pelouse.jpg";

export const etapes = [
    {
        titre: "Prenez contact",
        texte: "Appelez l'éducateur de la catégorie ou écrivez-nous via le formulaire de contact.",
    },
    {
        titre: "Venez essayer",
        texte: "Participez à une ou deux séances d'essai pour découvrir le groupe et les éducateurs.",
    },
    {
        titre: "Complétez le dossier",
        texte: "Licence FFF en ligne, questionnaire de santé ou certificat médical, photo et pièce d'identité.",
    },
    {
        titre: "À vous de jouer",
        texte: "Réglez la cotisation, récupérez votre équipement et rejoignez votre équipe sur le terrain.",
    },
];

export default function Rejoindre() {
    return (
        <section className="relative overflow-hidden bg-primary text-white">
            <Image src={pelouse} alt="" fill sizes="100vw" className="object-cover opacity-25 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-dark" aria-hidden="true" />

            <div className="container-custom section relative">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
                    <div>
                        <span className="eyebrow">Saison en cours</span>
                        <h2 className="title-lg mt-4">
                            Rejoignez
                            <span className="block text-secondary">l&apos;AS Mar Vivo</span>
                        </h2>
                        <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
                            Filles et garçons, débutants ou confirmés : les inscriptions sont ouvertes toute la saison,
                            dans la limite des places disponibles.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link href="/inscriptions" className="btn-gold">
                                Comment s&apos;inscrire
                            </Link>
                            <Link href="/contact" className="btn-ghost">
                                Poser une question
                            </Link>
                        </div>
                    </div>

                    <ol className="grid gap-4 sm:grid-cols-2">
                        {etapes.map((e, i) => (
                            <li key={e.titre} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-sm">
                                <span className="font-display text-5xl font-extrabold italic text-secondary">{i + 1}</span>
                                <h3 className="mt-2 text-2xl font-bold uppercase italic">{e.titre}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/75">{e.texte}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
