import Page from "@/components/Page/layout.js";
import Hero from "@/components/Hero/layout.js";
import Chiffres from "@/components/Chiffres/layout.js";
import ClubIntro from "@/components/ClubIntro/layout.js";
import Categorie from "@/components/Categorie/layout.js";
import Rejoindre from "@/components/Rejoindre/layout.js";
import Complexe from "@/components/Complexe/layout.js";
import Partenaires from "@/components/Caroussel/layout.js";
import Localisation from "@/components/Localisation/layout.js";

export default function Home() {
  return (
    <Page
      title="AS Mar Vivo | Club de football à La Seyne-sur-Mer"
      description="L'AS Mar Vivo, club de football de La Seyne-sur-Mer depuis 1980 : école de foot, foot à 8, foot à 11, seniors et vétérans au Stade Squillaci. Inscriptions ouvertes."
    >
      <Hero />
      <Chiffres />
      <ClubIntro />
      <Categorie />
      <Rejoindre />
      <Complexe />
      <Partenaires />
      <Localisation />
    </Page>
  );
}
