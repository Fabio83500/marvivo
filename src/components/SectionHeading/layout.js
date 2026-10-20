import React from "react";

// Titre de section : sur-titre doré + grand titre + texte d'introduction.
export default function SectionHeading({ surtitre, titre, texte, centre = false, clair = false }) {
    return (
        <div data-reveal className={`max-w-3xl ${centre ? "mx-auto text-center" : ""}`}>
            {surtitre && <span className={`eyebrow ${centre ? "justify-center" : ""}`}>{surtitre}</span>}
            <h2 className={`title-lg mt-4 ${clair ? "text-white" : "text-primary"}`}>{titre}</h2>
            {texte && (
                <p className={`mt-5 text-lg leading-relaxed ${clair ? "text-white/75" : "text-text/70"}`}>{texte}</p>
            )}
        </div>
    );
}
