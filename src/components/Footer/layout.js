import React from "react";
import Link from "next/link";
import Image from "next/image";

import logomarvivo from "@/images/logomarvivo.svg";
import { club, navigation, categories } from "@/data/club.js";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-navy text-white">
            <div className="absolute inset-0 stripes" aria-hidden="true" />

            {/* Bandeau d'appel */}
            <div className="relative border-b border-white/10">
                <div className="container-custom flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
                    <p className="font-display text-3xl leading-none font-extrabold uppercase italic md:text-5xl">
                        Envie de porter
                        <span className="block text-secondary">le maillot bleu ?</span>
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/inscriptions" className="btn-gold">
                            S&apos;inscrire
                        </Link>
                        <Link href="/contact" className="btn-ghost">
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container-custom relative grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12">
                <div className="lg:col-span-4">
                    <div className="flex items-center gap-4">
                        <Image src={logomarvivo} alt="Logo AS Mar Vivo" width={80} height={80} className="h-20 w-20" />
                        <p className="font-display text-2xl leading-none font-extrabold uppercase italic">
                            AS Mar Vivo
                            <span className="mt-1 block text-sm font-semibold not-italic tracking-[0.2em] text-secondary">
                                Depuis {club.creation}
                            </span>
                        </p>
                    </div>
                    <p className="mt-6 max-w-sm leading-relaxed text-white/70">
                        Club de football de La Seyne-sur-Mer, labellisé par la Fédération Française de Football.
                        De l&apos;école de foot aux vétérans, une seule famille.
                    </p>
                </div>

                <div className="lg:col-span-2">
                    <h2 className="text-lg font-bold uppercase italic tracking-wide text-secondary">Le club</h2>
                    <ul className="mt-5 space-y-3 text-white/70">
                        {navigation
                            .filter((item) => !item.enfants)
                            .map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="transition hover:text-secondary">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <h2 className="text-lg font-bold uppercase italic tracking-wide text-secondary">Nos équipes</h2>
                    <ul className="mt-5 space-y-3 text-white/70">
                        {categories.map((c) => (
                            <li key={c.slug}>
                                <Link href={`/categories/${c.slug}`} className="transition hover:text-secondary">
                                    {c.titre} <span className="text-white/40">· {c.ages}</span>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a href={club.fffClub} target="_blank" rel="noopener noreferrer" className="transition hover:text-secondary">
                                Résultats FFF ↗
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="lg:col-span-4">
                    <h2 className="text-lg font-bold uppercase italic tracking-wide text-secondary">Nous trouver</h2>
                    <address className="mt-5 space-y-3 not-italic text-white/70">
                        <p>
                            <span className="font-semibold text-white">{club.stade}</span>
                            <br />
                            {club.stadeAdresse}
                        </p>
                        <p>
                            <a href={`mailto:${club.email}`} className="transition hover:text-secondary">
                                {club.email}
                            </a>
                        </p>
                        <p>
                            <a href={`tel:${club.telephoneLien}`} className="transition hover:text-secondary">
                                {club.telephone}
                            </a>
                        </p>
                    </address>
                </div>
            </div>

            <div className="relative border-t border-white/10">
                <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/50 md:flex-row">
                    <span>© {new Date().getFullYear()} AS Mar Vivo. Tous droits réservés.</span>
                    <span>
                        Réalisé avec ❤️ par{" "}
                        <a href="https://mfagency.fr" target="_blank" rel="noopener noreferrer" className="underline transition hover:text-white">
                            MF Agency
                        </a>
                    </span>
                    <div className="flex gap-6">
                        <Link href="/mentions-legales" className="transition hover:text-white">
                            Mentions légales
                        </Link>
                        <Link href="/politique-de-confidentialite" className="transition hover:text-white">
                            Confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
