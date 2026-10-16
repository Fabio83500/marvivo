import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header/layout.js"
import Localisation from "@/components/Localisation/layout.js"
import Footer from "@/components/Footer/layout.js"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm({ nom, email, sujet, message }) {
    const errors = {};

    if (!nom.trim() || nom.trim().length < 2) {
        errors.nom = "Veuillez indiquer votre nom.";
    }

    if (!EMAIL_REGEX.test(email.trim())) {
        errors.email = "Veuillez indiquer une adresse email valide.";
    }

    if (!sujet.trim() || sujet.trim().length < 2) {
        errors.sujet = "Veuillez indiquer un sujet.";
    }

    if (!message.trim() || message.trim().length < 10) {
        errors.message = "Votre message doit contenir au moins 10 caractères.";
    }

    return errors;
}

export default function Contact() {
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        sujet: "",
        message: "",
    });
    const [fieldErrors, setFieldErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const errors = validateForm(formData);
        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            setStatus("error");
            setStatusMessage("Merci de corriger les champs indiqués ci-dessous.");
            return;
        }

        setStatus("loading");
        setStatusMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                setFieldErrors(data.errors || {});
                setStatus("error");
                setStatusMessage(
                    data.error || "Merci de corriger les champs indiqués ci-dessous."
                );
                return;
            }

            setStatus("success");
            setStatusMessage(
                "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais."
            );
            setFormData({ nom: "", email: "", sujet: "", message: "" });
            setFieldErrors({});
        } catch {
            setStatus("error");
            setStatusMessage(
                "Une erreur est survenue lors de l'envoi de votre message. Merci de réessayer ou de nous contacter par téléphone."
            );
        }
    };

    const directionSportive = [
        {
            nom: "Mohammed Mellouki",
            fonction: "Directeur sportif",
            telephone: "06 95 05 15 26",
        },
        {
            nom: "Jérôme Jeanney",
            fonction: "Cellule de direction sportive",
            telephone: "06 65 37 98 00",
        },
        {
            nom: "Cédric Derby",
            fonction: "Cellule de direction sportive",
            telephone: null,
        },
        {
            nom: "Christophe Baroni",
            fonction: "Cellule de direction sportive",
            telephone: "06 20 91 76 06",
        },
    ];

    const responsables = [
        {
            categorie: "Foot à 5",
            nom: "Jérôme Jeanney",
            telephone: "06 65 37 98 00",
        },
        {
            categorie: "Transition Foot à 5 → Foot à 8",
            nom: "Cédric Derby",
            telephone: null,
        },
        {
            categorie: "Foot à 8",
            nom: "Christophe Baroni",
            telephone: "06 20 91 76 06",
        },
        {
            categorie: "Foot à 11",
            nom: "Mohammed Mellouki",
            telephone: "06 95 05 15 26",
        },
    ];

    const educateurs = [
        {
            categorie: "U6",
            nom: "Jérôme Jeanney",
            telephone: "06 65 37 98 00",
        },
        {
            categorie: "U7",
            nom: "Cyril E.",
            telephone: "06 58 14 41 68",
        },
        {
            categorie: "U8",
            nom: "Jérôme J.",
            telephone: "06 65 37 98 00",
        },
        {
            categorie: "U9",
            nom: "Laurent E.",
            telephone: "06 95 48 25 78",
        },
        {
            categorie: "U10",
            nom: "Robert C.",
            telephone: "06 99 89 70 69",
        },
        {
            categorie: "U11",
            nom: "Florent G.",
            telephone: "06 56 85 96 27",
        },
        {
            categorie: "U12",
            nom: "Vincent E.",
            telephone: "06 79 80 42 44",
        },
        {
            categorie: "U13",
            nom: "Guillaume B.",
            telephone: "06 95 16 26 37",
        },
        {
            categorie: "U15",
            nom: "David C.",
            telephone: "06 72 75 22 29",
        },
        {
            categorie: "U16",
            nom: "Mohammed M.",
            telephone: "06 95 05 15 26",
        },
        {
            categorie: "Seniors",
            nom: "Jérôme M.",
            telephone: "06 95 55 25 57",
        },
        {
            categorie: "Loisirs",
            nom: "Vincent",
            telephone: "06 79 80 42 44",
        },
        {
            categorie: "Vétérans",
            nom: "Yves E.",
            telephone: "07 83 11 59 72",
        },
    ];

    return (
        <>
            <Head>
                <title>Contact | AS Mar Vivo</title>
                <meta
                    name="description"
                    content="Contactez l'AS Mar Vivo : formulaire de contact, coordonnées du club, direction sportive, responsables de catégories et éducateurs."
                />
            </Head>

            <Header />

            <main>

                {/* ===================================================== */}
                {/* HERO */}
                {/* ===================================================== */}

                <section className="relative overflow-hidden bg-primary">

                    {/* Cercles décoratifs */}

                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F5B642]/10" />

                    <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white/5" />

                    <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-6xl items-center px-6 py-32 text-center">

                        <div className="mx-auto max-w-3xl text-white">

                            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642] backdrop-blur-sm">
                                AS Mar Vivo
                            </span>

                            <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
                                Contact
                            </h1>

                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
                                Une question sur les inscriptions, les entraînements
                                ou les différentes catégories ? Écrivez-nous ou
                                retrouvez ici les principaux contacts du club.
                            </p>

                            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

                                <a
                                    href="#formulaire"
                                    className="rounded-full bg-[#F5B642] px-7 py-3.5 font-bold text-primary transition hover:scale-105 hover:bg-[#ffc75a]"
                                >
                                    Nous écrire
                                </a>

                                <a
                                    href="#contacts"
                                    className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-primary"
                                >
                                    Nos contacts
                                </a>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ===================================================== */}
                {/* FORMULAIRE + COORDONNÉES */}
                {/* ===================================================== */}

                <section id="formulaire" className="bg-white py-20 md:py-28">

                    <div className="mx-auto max-w-6xl px-6">

                        <div className="grid gap-12 md:grid-cols-2 md:gap-16">

                            {/* Coordonnées du club */}

                            <div>

                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                                    Nous joindre
                                </span>

                                <h2 className="mt-3 text-4xl font-black tracking-tight text-primary md:text-5xl">
                                    Les coordonnées du club
                                </h2>

                                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                                    Pour toute question générale, utilisez le
                                    formulaire ci-contre ou contactez-nous
                                    directement grâce aux coordonnées
                                    ci-dessous.
                                </p>

                                <ul className="mt-8 space-y-6">

                                    <li className="flex items-start gap-4">
                                        <span
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-lg text-white"
                                            aria-hidden="true"
                                        >
                                            📍
                                        </span>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                                Siège social
                                            </p>
                                            <p className="mt-1 font-semibold text-primary">
                                                Av. Henri Guillaume, 83500 La Seyne-sur-Mer
                                            </p>
                                            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                                Stade d&apos;entraînement
                                            </p>
                                            <p className="mt-1 text-gray-600">
                                                Stade Squillaci, rue du Lot de l&apos;Evescat, 83500 La Seyne-sur-Mer
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <span
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-lg text-white"
                                            aria-hidden="true"
                                        >
                                            ✉️
                                        </span>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                                Email
                                            </p>
                                            <a
                                                href="mailto:asmarvivo@orange.fr"
                                                className="mt-1 block font-semibold text-primary hover:text-[#F5B642]"
                                            >
                                                asmarvivo@orange.fr
                                            </a>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <span
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-lg text-white"
                                            aria-hidden="true"
                                        >
                                            📞
                                        </span>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                                Téléphone
                                            </p>
                                            <a
                                                href="tel:0695051526"
                                                className="mt-1 block font-semibold text-primary hover:text-[#F5B642]"
                                            >
                                                06 95 05 15 26
                                            </a>
                                        </div>
                                    </li>

                                </ul>

                            </div>


                            {/* Formulaire */}

                            <div>

                                <h2 className="text-3xl font-black tracking-tight text-primary">
                                    Envoyez-nous un message
                                </h2>

                                <p className="mt-3 text-gray-600">
                                    Les champs marqués d&apos;un astérisque (*) sont obligatoires.
                                </p>

                                <form
                                    onSubmit={handleSubmit}
                                    noValidate
                                    className="mt-8 space-y-5"
                                >

                                    <div>
                                        <label
                                            htmlFor="nom"
                                            className="block text-sm font-semibold text-primary"
                                        >
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            id="nom"
                                            name="nom"
                                            value={formData.nom}
                                            onChange={handleChange}
                                            required
                                            aria-invalid={Boolean(fieldErrors.nom)}
                                            aria-describedby={
                                                fieldErrors.nom ? "nom-error" : undefined
                                            }
                                            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none ring-[#F5B642] transition focus:border-[#F5B642] focus:ring-2"
                                        />
                                        {fieldErrors.nom && (
                                            <p
                                                id="nom-error"
                                                className="mt-1.5 text-sm font-medium text-red-600"
                                            >
                                                {fieldErrors.nom}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-primary"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            aria-invalid={Boolean(fieldErrors.email)}
                                            aria-describedby={
                                                fieldErrors.email ? "email-error" : undefined
                                            }
                                            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none ring-[#F5B642] transition focus:border-[#F5B642] focus:ring-2"
                                        />
                                        {fieldErrors.email && (
                                            <p
                                                id="email-error"
                                                className="mt-1.5 text-sm font-medium text-red-600"
                                            >
                                                {fieldErrors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="sujet"
                                            className="block text-sm font-semibold text-primary"
                                        >
                                            Sujet *
                                        </label>
                                        <input
                                            type="text"
                                            id="sujet"
                                            name="sujet"
                                            value={formData.sujet}
                                            onChange={handleChange}
                                            required
                                            aria-invalid={Boolean(fieldErrors.sujet)}
                                            aria-describedby={
                                                fieldErrors.sujet ? "sujet-error" : undefined
                                            }
                                            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none ring-[#F5B642] transition focus:border-[#F5B642] focus:ring-2"
                                        />
                                        {fieldErrors.sujet && (
                                            <p
                                                id="sujet-error"
                                                className="mt-1.5 text-sm font-medium text-red-600"
                                            >
                                                {fieldErrors.sujet}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold text-primary"
                                        >
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            aria-invalid={Boolean(fieldErrors.message)}
                                            aria-describedby={
                                                fieldErrors.message ? "message-error" : undefined
                                            }
                                            className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none ring-[#F5B642] transition focus:border-[#F5B642] focus:ring-2"
                                        />
                                        {fieldErrors.message && (
                                            <p
                                                id="message-error"
                                                className="mt-1.5 text-sm font-medium text-red-600"
                                            >
                                                {fieldErrors.message}
                                            </p>
                                        )}
                                    </div>

                                    {statusMessage && (
                                        <p
                                            role={status === "error" ? "alert" : "status"}
                                            aria-live="polite"
                                            className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                                                status === "success"
                                                    ? "bg-green-50 text-green-700"
                                                    : "bg-red-50 text-red-700"
                                            }`}
                                        >
                                            {statusMessage}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full rounded-full bg-primary px-7 py-3.5 font-bold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {status === "loading"
                                            ? "Envoi en cours…"
                                            : "Envoyer le message"}
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ===================================================== */}
                {/* INTRO */}
                {/* ===================================================== */}

                <section
                    id="contacts"
                    className="bg-slate-50 py-20 md:py-28"
                >

                    <div className="mx-auto max-w-6xl px-6">

                        <div className="mx-auto max-w-3xl text-center">

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                                L&apos;équipe du club
                            </span>

                            <h2 className="mt-3 text-4xl font-black tracking-tight text-primary md:text-5xl">
                                Les contacts de l&apos;AS Mar Vivo
                            </h2>

                            <p className="mt-5 text-lg leading-relaxed text-gray-600">
                                Notre équipe est disponible pour répondre à vos
                                questions et vous orienter vers le bon
                                interlocuteur.
                            </p>

                        </div>


                        {/* ================================================= */}
                        {/* DIRECTION SPORTIVE */}
                        {/* ================================================= */}

                        <div className="mt-16">

                            <div className="mb-8">

                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                                    Direction
                                </span>

                                <h3 className="mt-2 text-3xl font-black text-primary md:text-4xl">
                                    Direction sportive
                                </h3>

                                <p className="mt-3 max-w-2xl text-gray-600">
                                    La cellule de direction sportive accompagne
                                    l&apos;organisation et le développement des
                                    différentes catégories du club.
                                </p>

                            </div>


                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                                {directionSportive.map((personne, index) => (

                                    <div
                                        key={index}
                                        className="group rounded-3xl bg-white p-7 ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-xl"
                                    >

                                        <div
                                            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-white transition group-hover:bg-[#F5B642] group-hover:text-primary"
                                            aria-hidden="true"
                                        >
                                            👤
                                        </div>

                                        <p className="mt-6 text-xs font-bold uppercase tracking-wider text-[#d99d28] group-hover:text-[#F5B642]">
                                            {personne.fonction}
                                        </p>

                                        <h4 className="mt-2 text-xl font-black text-primary group-hover:text-white">
                                            {personne.nom}
                                        </h4>

                                        {personne.telephone && (
                                            <a
                                                href={`tel:${personne.telephone.replace(
                                                    /\s/g,
                                                    ""
                                                )}`}
                                                className="mt-5 block text-sm font-semibold text-gray-600 transition group-hover:text-white/80"
                                            >
                                                📞 {personne.telephone}
                                            </a>
                                        )}

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </section>


                {/* ===================================================== */}
                {/* RESPONSABLES DES CATÉGORIES */}
                {/* ===================================================== */}

                <section className="bg-white py-20 md:py-28">

                    <div className="mx-auto max-w-6xl px-6">

                        <div className="mx-auto max-w-3xl text-center">

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                                Catégories
                            </span>

                            <h2 className="mt-3 text-4xl font-black tracking-tight text-primary md:text-5xl">
                                Les responsables sportifs
                            </h2>

                            <p className="mt-5 text-lg leading-relaxed text-gray-600">
                                Pour une demande concernant une catégorie
                                spécifique, contactez directement son responsable.
                            </p>

                        </div>


                        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">

                            {responsables.map((responsable, index) => (

                                <div
                                    key={index}
                                    className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-black/5 sm:flex-row sm:items-center sm:justify-between"
                                >

                                    <div className="flex items-center gap-4">

                                        <div
                                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white"
                                            aria-hidden="true"
                                        >
                                            ⚽
                                        </div>

                                        <div>

                                            <p className="text-xs font-bold uppercase tracking-wider text-[#d99d28]">
                                                {responsable.categorie}
                                            </p>

                                            <p className="mt-1 font-bold text-primary">
                                                {responsable.nom}
                                            </p>

                                        </div>

                                    </div>


                                    {responsable.telephone ? (
                                        <a
                                            href={`tel:${responsable.telephone.replace(
                                                /\s/g,
                                                ""
                                            )}`}
                                            className="w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
                                        >
                                            📞 {responsable.telephone}
                                        </a>
                                    ) : (
                                        <span className="text-sm text-gray-400">
                                            Contact à préciser
                                        </span>
                                    )}

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* ===================================================== */}
                {/* ÉDUCATEURS */}
                {/* ===================================================== */}

                <section className="bg-slate-50 py-20 md:py-28">

                    <div className="mx-auto max-w-6xl px-6">

                        <div className="mb-12">

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                                Encadrement
                            </span>

                            <h2 className="mt-3 text-4xl font-black tracking-tight text-primary md:text-5xl">
                                Les éducateurs
                            </h2>

                            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
                                Retrouvez les éducateurs responsables des
                                différentes catégories du club.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                            {educateurs.map((educateur, index) => (

                                <div
                                    key={index}
                                    className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition hover:border-[#F5B642]/40 hover:shadow-md"
                                >

                                    <div className="flex items-center gap-4">

                                        <div
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                                            aria-hidden="true"
                                        >
                                            {educateur.categorie.replace(
                                                "Seniors",
                                                "S"
                                            ).replace(
                                                "Loisirs",
                                                "L"
                                            )}
                                        </div>

                                        <div>

                                            <p className="text-xs font-bold uppercase tracking-wider text-[#d99d28]">
                                                {educateur.categorie}
                                            </p>

                                            <p className="mt-0.5 font-bold text-primary">
                                                {educateur.nom}
                                            </p>

                                        </div>

                                    </div>


                                    <a
                                        href={`tel:${educateur.telephone.replace(
                                            /\s/g,
                                            ""
                                        )}`}
                                        className="shrink-0 text-sm font-semibold text-gray-500 transition hover:text-primary"
                                        aria-label={`Appeler ${educateur.nom}`}
                                    >
                                        📞
                                    </a>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* ===================================================== */}
                {/* CONTACT RAPIDE */}
                {/* ===================================================== */}

                <section className="bg-white py-20 md:py-28">

                    <div className="mx-auto max-w-6xl px-6">

                        <div className="overflow-hidden rounded-[2rem] bg-primary shadow-xl">

                            <div className="grid md:grid-cols-2">

                                {/* Texte */}

                                <div className="p-8 md:p-12">

                                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                                        Une question ?
                                    </span>

                                    <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                                        Parlons football.
                                    </h2>

                                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                                        Vous souhaitez inscrire votre enfant,
                                        rejoindre une équipe ou obtenir des
                                        informations sur le club ? N&apos;hésitez pas
                                        à contacter directement l&apos;équipe de
                                        l&apos;AS Mar Vivo.
                                    </p>

                                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                        <a
                                            href="tel:0695051526"
                                            className="inline-flex items-center justify-center rounded-full bg-[#F5B642] px-6 py-3.5 font-bold text-primary transition hover:scale-105 hover:bg-[#ffc75a]"
                                        >
                                            📞 Appeler le club
                                        </a>

                                        <Link
                                            href="/categories/foot-a-11"
                                            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white hover:text-primary"
                                        >
                                            Voir les catégories
                                        </Link>

                                    </div>

                                </div>


                                {/* Bloc décoratif */}

                                <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#F5B642]">

                                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20" />

                                    <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/10" />

                                    <div className="relative z-10 text-center">

                                        <div
                                            className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary text-6xl shadow-xl"
                                            aria-hidden="true"
                                        >
                                            ⚽
                                        </div>

                                        <h3 className="mt-6 text-3xl font-black text-primary">
                                            AS Mar Vivo
                                        </h3>

                                        <p className="mt-2 font-medium text-primary/70">
                                            Football • Formation • Passion
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ===================================================== */}
                {/* CTA FINAL */}
                {/* ===================================================== */}

                <section className="bg-white py-20 md:py-24">

                    <div className="mx-auto max-w-4xl px-6 text-center">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
                            AS Mar Vivo
                        </span>

                        <h2 className="mt-3 text-4xl font-black text-primary md:text-5xl">
                            Prêt à rejoindre le club ?
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
                            Découvrez nos différentes catégories et trouvez
                            l&apos;équipe qui correspond à votre âge et à votre
                            pratique du football.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/categories/foot-a-5"
                                className="rounded-full bg-primary px-7 py-3.5 font-bold text-white transition hover:scale-105"
                            >
                                Foot à 5
                            </Link>

                            <Link
                                href="/categories/foot-a-8"
                                className="rounded-full bg-primary px-7 py-3.5 font-bold text-white transition hover:scale-105"
                            >
                                Foot à 8
                            </Link>

                            <Link
                                href="/categories/foot-a-11"
                                className="rounded-full bg-[#F5B642] px-7 py-3.5 font-bold text-primary transition hover:scale-105 hover:bg-[#ffc75a]"
                            >
                                Foot à 11
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
