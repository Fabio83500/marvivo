import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header/layout.js"
import Localisation from "@/components/Localisation/layout.js"
import Footer from "@/components/Footer/layout.js"
export default function PolitiqueConfidentialite() {
    return (
        <>
            <Head>
                <title>Politique de confidentialité | AS Mar Vivo</title>
                <meta
                    name="description"
                    content="Politique de confidentialité de l'AS Mar Vivo : données personnelles collectées, finalités, durée de conservation et vos droits."
                />
            </Head>

            <Header />

            <main className="min-h-screen bg-slate-50">

            <section className="relative overflow-hidden bg-primary px-6 py-32 text-white">
                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5" />
                <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-secondary/10" />

                <div className="relative mx-auto max-w-5xl motion-safe:animate-fade-up">
                    <span className="text-sm font-bold uppercase tracking-[0.25em] text-secondary">
                        Vie privée
                    </span>

                    <h1 className="mt-5 text-5xl font-black tracking-tight md:text-6xl">
                        Politique de confidentialité
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                        Cette page présente la manière dont l’AS Mar Vivo
                        traite les données personnelles éventuellement collectées
                        via son site internet.
                    </p>
                </div>
            </section>


            <section className="px-6 py-20">
                <div className="mx-auto max-w-4xl space-y-8">

                    {/* Responsable */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <h2 className="text-2xl font-black text-primary">
                            1. Responsable du traitement
                        </h2>

                        <div className="mt-5 space-y-3 leading-relaxed text-gray-600">
                            <p>
                                Le responsable du traitement des données personnelles
                                collectées sur ce site est :
                            </p>

                            <p className="font-bold text-gray-900">
                                Association Sportive Mar Vivo
                            </p>

                            <p>
                                Email : <strong>asmarvivo@orange.fr</strong>
                            </p>

                            <p>
                                Adresse : <strong>Avenue Henri Guillaume, 83500 La Seyne-sur-Mer</strong>
                            </p>
                              <p>
                                Siège social : <strong>Avenue Henri Guillaume, 83500 La Seyne-sur-Mer</strong>
                            </p>

                         
                        </div>
                    </article>


                    {/* Données collectées */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <h2 className="text-2xl font-black text-primary">
                            2. Données personnelles collectées
                        </h2>

                        <div className="mt-5 space-y-4 leading-relaxed text-gray-600">
                            <p>
                                Le site peut être amené à collecter certaines données
                                personnelles lorsque vous utilisez les moyens de
                                contact proposés.
                            </p>

                            <p>
                                Selon les informations que vous fournissez, ces données
                                peuvent notamment comprendre :
                            </p>

                            <ul className="list-disc space-y-2 pl-6">
                                <li>Nom et prénom</li>
                                <li>Adresse email</li>
                                <li>Numéro de téléphone</li>
                                <li>Contenu du message envoyé</li>
                            </ul>

                            <p>
                                Seules les données nécessaires au traitement de votre
                                demande sont collectées.
                            </p>
                        </div>
                    </article>


                    {/* Finalités */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <h2 className="text-2xl font-black text-primary">
                            3. Utilisation des données
                        </h2>

                        <div className="mt-5 space-y-4 leading-relaxed text-gray-600">
                            <p>
                                Les données transmises via le site sont utilisées
                                uniquement pour :
                            </p>

                            <ul className="list-disc space-y-2 pl-6">
                                <li>répondre aux demandes de contact ;</li>
                                <li>
                                    fournir les informations demandées concernant
                                    le club ;
                                </li>
                                <li>
                                    assurer le suivi des échanges avec les visiteurs
                                    du site.
                                </li>
                            </ul>

                            <p>
                                Les données ne sont pas utilisées à des fins
                                commerciales sans base légale appropriée.
                            </p>
                        </div>
                    </article>


                    {/* Conservation */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <h2 className="text-2xl font-black text-primary">
                            4. Durée de conservation
                        </h2>

                        <p className="mt-5 leading-relaxed text-gray-600">
                            Les données personnelles sont conservées pendant une
                            durée proportionnée à la finalité pour laquelle elles
                            ont été collectées et conformément aux obligations
                            légales applicables.
                        </p>
                    </article>


                    {/* Destinataires */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <h2 className="text-2xl font-black text-primary">
                            5. Destinataires des données
                        </h2>

                        <div className="mt-5 space-y-4 leading-relaxed text-gray-600">
                            <p>
                                Les données transmises via le site sont destinées
                                uniquement aux personnes habilitées au sein de
                                l’AS Mar Vivo afin de répondre aux demandes reçues.
                            </p>

                            <p>
                                Elles peuvent également être traitées par les
                                prestataires techniques nécessaires au fonctionnement
                                du site, notamment l’hébergeur.
                            </p>
                        </div>
                    </article>


                    {/* Cookies */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <h2 className="text-2xl font-black text-primary">
                            6. Cookies et traceurs
                        </h2>

                        <div className="mt-5 space-y-4 leading-relaxed text-gray-600">
                            <p>
                                Le site peut utiliser des cookies ou technologies
                                similaires nécessaires à son fonctionnement.
                            </p>

                            <p>
                                Lorsque des cookies ou traceurs nécessitant le
                                consentement de l’utilisateur sont utilisés,
                                un dispositif permettant de recueillir et gérer
                                ce consentement est mis en place conformément
                                à la réglementation applicable.
                            </p>
                        </div>
                    </article>


                    {/* Droits */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <h2 className="text-2xl font-black text-primary">
                            7. Vos droits
                        </h2>

                        <div className="mt-5 space-y-4 leading-relaxed text-gray-600">
                            <p>
                                Conformément à la réglementation applicable en matière
                                de protection des données personnelles, vous disposez
                                notamment de droits d’accès, de rectification,
                                d’effacement et, selon les situations, de limitation,
                                d’opposition ou de portabilité de vos données.
                            </p>

                            <p>
                                Pour exercer vos droits ou obtenir des informations
                                concernant le traitement de vos données, vous pouvez
                                contacter l’AS Mar Vivo à l’adresse suivante :
                            </p>

                            <p>
                                <a
                                    href="mailto:asmarvivo@orange.fr"
                                    className="font-bold text-primary hover:text-secondary"
                                >
                                    asmarvivo@orange.fr
                                </a>
                            </p>

                            <p>
                                Vous pouvez également introduire une réclamation
                                auprès de la CNIL si vous estimez que vos droits
                                concernant vos données personnelles ne sont pas
                                respectés.
                            </p>
                        </div>
                    </article>


                    {/* Sécurité */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <h2 className="text-2xl font-black text-primary">
                            8. Sécurité
                        </h2>

                        <p className="mt-5 leading-relaxed text-gray-600">
                            L’AS Mar Vivo met en œuvre les mesures techniques et
                            organisationnelles appropriées afin de protéger les
                            données personnelles contre les accès non autorisés,
                            la perte, la modification ou la divulgation.
                        </p>
                    </article>


                    {/* Mise à jour */}

                    <article data-reveal className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
                        <h2 className="text-2xl font-black text-primary">
                            9. Mise à jour de la politique
                        </h2>

                        <p className="mt-5 leading-relaxed text-gray-600">
                            Cette politique de confidentialité peut être mise à jour
                            afin de tenir compte des évolutions légales, réglementaires
                            ou techniques. La date de dernière mise à jour sera
                            indiquée sur cette page.
                        </p>

                        <p className="mt-5 text-sm font-semibold text-gray-400">
                            Dernière mise à jour : septembre 2026
                        </p>
                    </article>


                    <div className="pt-4 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            ← Retour à l’accueil
                        </Link>
                    </div>

                </div>
            </section>
            <Localisation />

            </main>

            <Footer />
        </>
    );
}