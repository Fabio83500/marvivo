import React from 'react'

export default function layout() {
    return (
        <section aria-labelledby="localisation-heading">
            <h2 id="localisation-heading" className="sr-only">
                Nous trouver
            </h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.8294393303845!2d5.8841674763378125!3d43.087081038861264!2m3!1f0!2f0!3f0!3m2!
    1i1024!2i768!4f13.1!3m3!1m2!1s0x12c90345ee836489%3A0x1886b837974b7c7a!2sStade%20Squillaci%2C%20Rue%20du%20Lot.%20l'Evescat%2C%2083500%20La%20Seyne-sur-Mer
    !5e0!3m2!1sfr!2sfr!4v1788099986471!5m2!1sfr!2sfr"
                title="Localisation du Stade Squillaci, AS Mar Vivo"
                allowFullScreen
                loading="lazy"
                className="h-80 w-full"
                referrerPolicy="strict-origin-when-cross-origin"
            />
        </section>
    )
}
