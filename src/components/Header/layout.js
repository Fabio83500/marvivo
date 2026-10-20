import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import logomarvivo from "@/images/logomarvivo.svg";
import { navigation } from "@/data/club.js";

function Chevron({ className = "" }) {
    return (
        <svg className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
    );
}

export default function Header() {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Ferme le menu mobile à chaque changement de page
    useEffect(() => {
        const close = () => setMenuOpen(false);
        router.events.on("routeChangeStart", close);
        return () => router.events.off("routeChangeStart", close);
    }, [router.events]);

    // Bloque le scroll de la page quand le menu mobile est ouvert
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const isActive = (item) => {
        if (item.href === "/") return router.pathname === "/";
        if (item.enfants) return router.pathname.startsWith("/categories");
        return router.pathname.startsWith(item.href);
    };

    const solid = scrolled || menuOpen;
    const liens = navigation.filter((item) => item.href !== "/contact");

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                solid ? "bg-primary-dark/95 shadow-lg shadow-black/10 backdrop-blur-md" : "bg-transparent"
            }`}
        >
            <div className="container-custom flex h-20 items-center justify-between gap-6">
                <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="AS Mar Vivo, accueil">
                    <Image
                        src={logomarvivo}
                        alt=""
                        width={56}
                        height={56}
                        preload
                        className={`transition-all duration-300 ${solid ? "h-12 w-12" : "h-14 w-14"}`}
                    />
                    <span className="hidden font-display text-xl leading-none font-extrabold uppercase italic text-white sm:block">
                        AS Mar Vivo
                        <span className="block text-xs font-semibold tracking-[0.2em] text-secondary not-italic">
                            La Seyne-sur-Mer
                        </span>
                    </span>
                </Link>

                {/* Navigation bureau */}
                <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
                    {liens.map((item) =>
                        item.enfants ? (
                            <div key={item.label} className="group relative">
                                <button
                                    type="button"
                                    aria-haspopup="true"
                                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition hover:text-secondary ${
                                        isActive(item) ? "text-secondary" : "text-white"
                                    }`}
                                >
                                    {item.label}
                                    <Chevron className="transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                    <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/5">
                                        {item.enfants.map((enfant) => (
                                            <Link
                                                key={enfant.href}
                                                href={enfant.href}
                                                className="flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-background"
                                            >
                                                <span className="font-display text-lg font-bold uppercase italic text-primary">
                                                    {enfant.label}
                                                </span>
                                                <span className="rounded-full bg-secondary/15 px-2.5 py-0.5 text-xs font-semibold text-primary-dark">
                                                    {enfant.detail}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={isActive(item) ? "page" : undefined}
                                className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition hover:text-secondary ${
                                    isActive(item) ? "text-secondary" : "text-white"
                                }`}
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </nav>

                <div className="flex items-center gap-3">
                    <Link href="/contact" className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex">
                        Contact
                    </Link>

                    <button
                        type="button"
                        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={menuOpen}
                        aria-controls="menu-mobile"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 lg:hidden"
                    >
                        <span className="relative block h-4 w-5">
                            <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${menuOpen ? "top-2 rotate-45" : "top-0"}`} />
                            <span className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                            <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${menuOpen ? "top-2 -rotate-45" : "top-4"}`} />
                        </span>
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            <div
                id="menu-mobile"
                className={`fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-primary-dark stripes transition-all duration-300 lg:hidden ${
                    menuOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
            >
                <nav aria-label="Navigation mobile" className="container-custom flex flex-col gap-1 py-8">
                    {navigation.map((item) => (
                        <div key={item.label}>
                            {item.enfants ? (
                                <>
                                    <p className="px-2 pt-4 pb-2 text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                                        {item.label}
                                    </p>
                                    {item.enfants.map((enfant) => (
                                        <Link
                                            key={enfant.href}
                                            href={enfant.href}
                                            className="flex items-center justify-between border-b border-white/10 px-2 py-4 font-display text-2xl font-bold uppercase italic text-white"
                                        >
                                            {enfant.label}
                                            <span className="text-sm font-semibold not-italic text-white/60">{enfant.detail}</span>
                                        </Link>
                                    ))}
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`block border-b border-white/10 px-2 py-4 font-display text-3xl font-extrabold uppercase italic ${
                                        isActive(item) ? "text-secondary" : "text-white"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link href="/inscriptions" className="btn-gold mt-8">
                        Rejoindre le club
                    </Link>
                </nav>
            </div>
        </header>
    );
}
