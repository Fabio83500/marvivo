import React from "react";
import Head from "next/head";

import Header from "@/components/Header/layout.js";
import Footer from "@/components/Footer/layout.js";

// Gabarit commun à toutes les pages : balises <head>, Header, <main>, Footer.
export default function Page({ title, description, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fr_FR" />
                <meta name="theme-color" content="#0b3a6b" />
            </Head>

            <Header />

            <main>{children}</main>

            <Footer />
        </>
    );
}
