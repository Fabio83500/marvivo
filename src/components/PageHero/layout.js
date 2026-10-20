import React from "react";
import Image from "next/image";

// Bandeau d'en-tête des pages intérieures : photo (optionnelle) sous un dégradé bleu.
export default function PageHero({ surtitre, titre, texte, image, children }) {
    return (
        <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-primary-dark pt-32 pb-16 text-white md:min-h-[70vh] md:pb-24">
            {image && (
                <Image src={image} alt="" fill preload sizes="100vw" className="object-cover" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-primary/40" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute inset-0 stripes" aria-hidden="true" />
            <div className="absolute -right-24 bottom-0 h-full w-1/3 -skew-x-12 bg-secondary/10" aria-hidden="true" />

            <div className="container-custom relative">
                {surtitre && <span className="eyebrow">{surtitre}</span>}
                <h1 className="title-xl mt-4 max-w-4xl">{titre}</h1>
                {texte && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">{texte}</p>}
                {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
            </div>
        </section>
    );
}
