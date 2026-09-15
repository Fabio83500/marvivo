
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logomarvivo from "@/images/logomarvivo.svg";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header
                className={`
                    fixed top-0 left-0 right-0 z-50
                    transition-all duration-300
                    ${
                        scrolled
                            ? "bg-white/95 shadow-md backdrop-blur-md"
                            : "bg-transparent"
                    }
                `}
            >

                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">

                    {/* ================= LOGO ================= */}
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="relative z-50 flex items-center"
                    >
                        <Image
                            src={logomarvivo}
                            alt="AS Mar Vivo"
                            width={120}
                            height={120}
                            priority
                            className={`
                                w-16 md:w-[72px]
                                transition-all duration-300
                                ${scrolled ? "" : " invert"}
                            `}
                        />
                    </Link>


                    {/* ================= DESKTOP NAV ================= */}
                    <nav className="hidden items-center gap-8 md:flex">

                        <Link
                            href="/"
                            className={`
                                relative py-2 text-sm font-semibold transition
                                ${
                                    scrolled
                                        ? "text-primary hover:text-[#F5B642]"
                                        : "text-white hover:text-[#F5B642]"
                                }
                            `}
                        >
                            Accueil
                        </Link>


                        <Link
                            href="/complexe"
                            className={`
                                relative py-2 text-sm font-semibold transition
                                ${
                                    scrolled
                                        ? "text-primary hover:text-[#F5B642]"
                                        : "text-white hover:text-[#F5B642]"
                                }
                            `}
                        >
                            Le complexe
                        </Link>


                        {/* Catégories - dropdown */}
                        <div className="group relative">

                            <button
                                className={`
                                    flex items-center gap-1 py-2 text-sm font-semibold transition
                                    ${
                                        scrolled
                                            ? "text-primary hover:text-[#F5B642]"
                                            : "text-white hover:text-[#F5B642]"
                                    }
                                `}
                            >
                                Catégories

                                <svg
                                    className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m6 9 6 6 6-6"
                                    />
                                </svg>
                            </button>


                            {/* Dropdown */}
                            <div className="invisible absolute left-1/2 top-full w-52 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                                <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-xl">

                                    <Link
                                        href="/categories/foot-a-5"
                                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-primary transition hover:bg-slate-50 hover:text-[#F5B642]"
                                    >
                                        Foot à 5
                                        <span className="mt-0.5 block text-xs font-normal text-gray-400">
                                            U5 à U9
                                        </span>
                                    </Link>

                                    <Link
                                        href="/categories/foot-a-8"
                                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-primary transition hover:bg-slate-50 hover:text-[#F5B642]"
                                    >
                                        Foot à 8
                                        <span className="mt-0.5 block text-xs font-normal text-gray-400">
                                            U10 à U13
                                        </span>
                                    </Link>

                                    <Link
                                        href="/categories/foot-a-11"
                                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-primary transition hover:bg-slate-50 hover:text-[#F5B642]"
                                    >
                                        Foot à 11
                                        <span className="mt-0.5 block text-xs font-normal text-gray-400">
                                            U14 à Seniors
                                        </span>
                                    </Link>

                                </div>

                            </div>

                        </div>


                        <Link
                            href="/contact"
                            className={`
                                relative py-2 text-sm font-semibold transition
                                ${
                                    scrolled
                                        ? "text-primary hover:text-[#F5B642]"
                                        : "text-white hover:text-[#F5B642]"
                                }
                            `}
                        >
                            Contact
                        </Link>

                    </nav>


                    {/* ================= DESKTOP CTA ================= */}
                    <div className="hidden md:block">

                        <Link
                            href="/contact"
                            className="
                                inline-flex items-center gap-2
                                rounded-full
                                bg-[#F5B642]
                                px-5 py-2.5
                                text-sm font-bold text-primary
                                transition-all duration-300
                                hover:scale-105
                                hover:bg-[#ffc75a]
                            "
                        >
                            Rejoindre le club
                            <span>→</span>
                        </Link>

                    </div>


                    {/* ================= MOBILE BUTTON ================= */}
                    <button
                        type="button"
                        aria-label="Ouvrir le menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`
                            relative z-50
                            flex h-11 w-11
                            items-center justify-center
                            rounded-full
                            md:hidden
                            transition
                            ${
                                scrolled
                                    ? "bg-primary text-white"
                                    : "bg-white/10 text-white backdrop-blur-sm"
                            }
                        `}
                    >

                        <div className="relative h-5 w-5">

                            <span
                                className={`
                                    absolute left-0 top-1
                                    h-0.5 w-5
                                    rounded-full
                                    transition-all duration-300
                                    ${
                                        menuOpen
                                            ? "top-2.5 rotate-45"
                                            : ""
                                    }
                                `}
                            />

                            <span
                                className={`
                                    absolute left-0 top-2.5
                                    h-0.5 w-5
                                    rounded-full
                                    transition-all duration-300
                                    ${
                                        menuOpen
                                            ? "opacity-0"
                                            : ""
                                    }
                                `}
                            />

                            <span
                                className={`
                                    absolute left-0 top-4
                                    h-0.5 w-5
                                    rounded-full
                                    transition-all duration-300
                                    ${
                                        menuOpen
                                            ? "top-2.5 -rotate-45"
                                            : ""
                                    }
                                `}
                            />

                        </div>

                    </button>

                </div>


                {/* ================= MOBILE MENU ================= */}
                <div
                    className={`
                        absolute left-0 right-0 top-0
                        min-h-screen
                        bg-white
                        px-6 pt-28
                        transition-all duration-300
                        md:hidden
                        ${
                            menuOpen
                                ? "visible translate-y-0 opacity-100"
                                : "invisible -translate-y-5 opacity-0"
                        }
                    `}
                >

                    <nav className="flex flex-col">

                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="border-b border-gray-100 py-5 text-2xl font-bold text-primary"
                        >
                            Accueil
                        </Link>


                        <Link
                            href="/complexe"
                            onClick={closeMenu}
                            className="border-b border-gray-100 py-5 text-2xl font-bold text-primary"
                        >
                            Le complexe
                        </Link>


                        {/* Catégories */}
                        <div className="border-b border-gray-100 py-5">

                            <p className="mb-4 text-2xl font-bold text-primary">
                                Catégories
                            </p>

                            <div className="flex flex-col gap-2 pl-2">

                                <Link
                                    href="/categories/foot-a-5"
                                    onClick={closeMenu}
                                    className="rounded-xl bg-slate-50 px-4 py-3 text-primary transition hover:bg-primary hover:text-white"
                                >
                                    <span className="font-semibold">
                                        Foot à 5
                                    </span>

                                    <span className="ml-2 text-sm opacity-60">
                                        U5 à U9
                                    </span>
                                </Link>


                                <Link
                                    href="/categories/foot-a-8"
                                    onClick={closeMenu}
                                    className="rounded-xl bg-slate-50 px-4 py-3 text-primary transition hover:bg-primary hover:text-white"
                                >
                                    <span className="font-semibold">
                                        Foot à 8
                                    </span>

                                    <span className="ml-2 text-sm opacity-60">
                                        U10 à U13
                                    </span>
                                </Link>


                                <Link
                                    href="/categories/foot-a-11"
                                    onClick={closeMenu}
                                    className="rounded-xl bg-slate-50 px-4 py-3 text-primary transition hover:bg-primary hover:text-white"
                                >
                                    <span className="font-semibold">
                                        Foot à 11
                                    </span>

                                    <span className="ml-2 text-sm opacity-60">
                                        U14 à Seniors
                                    </span>
                                </Link>

                            </div>

                        </div>


                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="border-b border-gray-100 py-5 text-2xl font-bold text-primary"
                        >
                            Contact
                        </Link>


                        {/* CTA mobile */}
                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="mt-8 flex items-center justify-center rounded-full bg-[#F5B642] px-6 py-4 text-center font-bold text-primary"
                        >
                            Rejoindre le club
                            <span className="ml-2">→</span>
                        </Link>

                    </nav>

                </div>

            </header>
        </>
    );
}

