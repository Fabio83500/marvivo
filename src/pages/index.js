import Head from "next/head";
import Header from "@/components/Header/layout.js"
import Footer from "@/components/Footer/layout.js"
import Hero from "@/components/Hero/layout.js"
import Carroussel from "@/components/Caroussel/layout.js"
import Categorie from "@/components/Categorie/layout.js"
import Complexe from "@/components/Complexe/layout.js"
import Cta from "@/components/Cta/layout.js"
import Localisation from "@/components/Localisation/layout.js"

export default function Home() {
  return (
    <>
      <Head>
        <title>AS Mar Vivo | Club de football à La Seyne-sur-Mer</title>
        <meta
          name="description"
          content="Découvrez l'AS Mar Vivo, club de football à La Seyne-sur-Mer : nos équipes, notre complexe sportif et toute l'actualité du club."
        />
      </Head>

      <Header />

      <main>
        <Hero />
        <Carroussel />
        <Categorie />
        <Cta />
        <Complexe />
        <Localisation />
      </main>

      <Footer />
    </>
  );
}
