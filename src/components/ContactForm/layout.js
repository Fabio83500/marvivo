import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const SUJETS = ["Inscription", "Séance d'essai", "Partenariat", "Bénévolat", "Autre demande"];

const VIDE = { nom: "", email: "", telephone: "", sujet: "", message: "", consentement: false, site: "" };

function validateForm({ nom, email, sujet, message, consentement }) {
    const errors = {};

    if (nom.trim().length < 2) errors.nom = "Veuillez indiquer votre nom.";
    if (!EMAIL_REGEX.test(email.trim())) errors.email = "Veuillez indiquer une adresse email valide.";
    if (!sujet) errors.sujet = "Veuillez choisir un sujet.";
    if (message.trim().length < 10) errors.message = "Votre message doit contenir au moins 10 caractères.";
    if (!consentement) errors.consentement = "Merci d'accepter l'utilisation de vos données pour vous répondre.";

    return errors;
}

function Champ({ id, label, erreur, children }) {
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-sm font-semibold text-text">
                {label}
            </label>
            {children}
            {erreur && (
                <p id={`${id}-error`} className="mt-2 text-sm text-red-600">
                    {erreur}
                </p>
            )}
        </div>
    );
}

const inputClass = (erreur) =>
    `w-full rounded-xl border bg-background px-4 py-3 text-text outline-none transition placeholder:text-text/40 focus:bg-white focus:ring-4 ${
        erreur ? "border-red-400 focus:ring-red-100" : "border-primary/15 focus:border-primary focus:ring-primary/10"
    }`;

export default function ContactForm() {
    const router = useRouter();
    const [formData, setFormData] = useState(VIDE);
    const [fieldErrors, setFieldErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [statusMessage, setStatusMessage] = useState("");

    // Sujet pré-rempli depuis l'URL (ex. /contact?sujet=Partenariat) tant que le visiteur n'en a pas choisi un autre
    const sujetUrl = SUJETS.includes(router.query.sujet) ? router.query.sujet : "";
    const donnees = { ...formData, sujet: formData.sujet || sujetUrl };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const errors = validateForm(donnees);
        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            setStatus("error");
            setStatusMessage("Merci de corriger les champs indiqués.");
            return;
        }

        setStatus("loading");
        setStatusMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(donnees),
            });
            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                setFieldErrors(data.errors || {});
                setStatus("error");
                setStatusMessage(data.error || "Merci de corriger les champs indiqués.");
                return;
            }

            setStatus("success");
            setStatusMessage("Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.");
            setFormData(VIDE);
            setFieldErrors({});
        } catch {
            setStatus("error");
            setStatusMessage(
                "Une erreur est survenue lors de l'envoi de votre message. Merci de réessayer ou de nous contacter par téléphone."
            );
        }
    };

    const aria = (name) => ({
        "aria-invalid": Boolean(fieldErrors[name]),
        "aria-describedby": fieldErrors[name] ? `${name}-error` : undefined,
    });

    if (status === "success") {
        return (
            <div role="status" className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-xl ring-1 ring-primary/10">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-3xl text-primary-dark" aria-hidden="true">
                    ✓
                </span>
                <h2 className="mt-6 font-display text-4xl font-extrabold uppercase italic text-primary">Message envoyé</h2>
                <p className="mt-3 max-w-md text-text/70">{statusMessage}</p>
                <button type="button" onClick={() => setStatus("idle")} className="btn-blue mt-8">
                    Envoyer un autre message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="relative rounded-3xl bg-white p-6 shadow-xl ring-1 ring-primary/10 md:p-10">
            <h2 className="font-display text-4xl font-extrabold uppercase italic text-primary">Envoyez-nous un message</h2>
            <p className="mt-2 text-sm text-text/60">Tous les champs sont obligatoires, sauf le téléphone.</p>

            {status === "error" && statusMessage && (
                <p role="alert" className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {statusMessage}
                </p>
            )}

            <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Champ id="nom" label="Nom et prénom" erreur={fieldErrors.nom}>
                    <input id="nom" name="nom" type="text" autoComplete="name" value={formData.nom} onChange={handleChange} className={inputClass(fieldErrors.nom)} {...aria("nom")} />
                </Champ>
                <Champ id="email" label="Email" erreur={fieldErrors.email}>
                    <input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass(fieldErrors.email)} {...aria("email")} />
                </Champ>
                <Champ id="telephone" label="Téléphone (facultatif)" erreur={fieldErrors.telephone}>
                    <input id="telephone" name="telephone" type="tel" autoComplete="tel" value={formData.telephone} onChange={handleChange} className={inputClass(fieldErrors.telephone)} {...aria("telephone")} />
                </Champ>
                <Champ id="sujet" label="Sujet" erreur={fieldErrors.sujet}>
                    <select id="sujet" name="sujet" value={donnees.sujet} onChange={handleChange} className={inputClass(fieldErrors.sujet)} {...aria("sujet")}>
                        <option value="">Choisir un sujet</option>
                        {SUJETS.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </Champ>
                <div className="md:col-span-2">
                    <Champ id="message" label="Message" erreur={fieldErrors.message}>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Âge et catégorie de l'enfant, question sur les horaires, proposition de partenariat…"
                            className={`${inputClass(fieldErrors.message)} resize-y`}
                            {...aria("message")}
                        />
                    </Champ>
                </div>
            </div>

            {/* Champ piège anti-spam : invisible pour les visiteurs, rempli par les robots */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="site">Ne pas remplir</label>
                <input id="site" name="site" type="text" tabIndex={-1} autoComplete="off" value={formData.site} onChange={handleChange} />
            </div>

            <div className="mt-6">
                <label className="flex items-start gap-3 text-sm text-text/70">
                    <input
                        type="checkbox"
                        name="consentement"
                        checked={formData.consentement}
                        onChange={handleChange}
                        className="mt-0.5 h-5 w-5 shrink-0 rounded accent-primary"
                        {...aria("consentement")}
                    />
                    <span>
                        J&apos;accepte que mes données soient utilisées par l&apos;AS Mar Vivo pour répondre à ma demande. Voir la{" "}
                        <Link href="/politique-de-confidentialite" className="font-semibold text-primary underline">
                            politique de confidentialité
                        </Link>
                        .
                    </span>
                </label>
                {fieldErrors.consentement && (
                    <p id="consentement-error" className="mt-2 text-sm text-red-600">
                        {fieldErrors.consentement}
                    </p>
                )}
            </div>

            <button type="submit" disabled={status === "loading"} className="btn-gold mt-8 w-full disabled:cursor-wait disabled:opacity-70 md:w-auto">
                {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
            </button>
        </form>
    );
}
