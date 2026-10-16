import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logomarvivo from "@/images/logomarvivo.svg"

export default function Footer() {
    return (
        <footer className="bg-primary text-white">

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

                {/* Partie principale */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Logo + présentation */}
                    <div className="md:col-span-2">

                        <Image
                            src={logomarvivo}
                            alt="Logo AS Mar Vivo"
                            width={140}
                            height={140}
                            className="w-28 md:w-32"
                        />

                        <p className="mt-5 text-white/80 max-w-md leading-relaxed">
                            L&apos;AS Mar Vivo est un club de football situé à
                            La Seyne-sur-Mer. Retrouvez nos équipes, nos
                            actualités et toutes les informations du club.
                        </p>

                    </div>


                    {/* Navigation */}
                    <div>
                        <h3 className="text-secondary font-semibold text-lg mb-5">
                            Navigation
                        </h3>

                        <ul className="space-y-3 text-white/80">

                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-secondary transition"
                                >
                                    Accueil
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#categories"
                                    className="hover:text-secondary transition"
                                >
                                    Nos catégories
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#complexe"
                                    className="hover:text-secondary transition"
                                >
                                    Le complexe
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#partenaires"
                                    className="hover:text-secondary transition"
                                >
                                    Nos partenaires
                                </Link>
                            </li>

                        </ul>
                    </div>


                    {/* Informations */}
                    <div>

                        <h3 className="text-secondary font-semibold text-lg mb-5">
                            Informations
                        </h3>

                        <ul className="space-y-3 text-white/80">

                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-secondary transition"
                                >
                                    Nous contacter
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-secondary transition"
                                >
                                    Rejoindre le club
                                </Link>
                            </li>

                            <li>
                                La Seyne-sur-Mer
                            </li>

                        </ul>

                    </div>

                </div>


                {/* Séparation */}
                <div className="border-t border-white/20 my-10"></div>


                {/* Bas du footer */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">

                    <span>
                        © {new Date().getFullYear()} AS Mar Vivo. Tous droits réservés. 
                    </span>
                     <span>
                        Made with ❤️ by{" "}
                        <Link
                            href="https://mfagency.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                        >
                            MF Agency
                        </Link>
                    </span>

                    <div className="flex gap-6">

                        <Link
                            href="/mentions-legales"
                            className="hover:text-white transition"
                        >
                            Mentions légales
                        </Link>

                        <Link
                            href="/politique-de-confidentialite"
                            className="hover:text-white transition"
                        >
                            Politique de confidentialité
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    )
}