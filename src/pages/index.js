import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/layout.js"
import Footer from "@/components/Footer/layout.js"
import Hero from "@/components/Hero/layout.js"
import Carroussel from "@/components/Caroussel/layout.js"
import Categorie from "@/components/Categorie/layout.js"
import Complexe from "@/components/Complexe/layout.js"
import Cta from "@/components/Cta/layout.js"




import logomarvivo from "@/images/logomarvivo.svg"
import Localisation from "@/components/Localisation/layout.js"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className=""
    >
      <main className="">
      
        <Header />
        <Hero />
        <Carroussel />
        <div className="">
          <Categorie />
          <Cta />
          <Complexe />
          <Localisation />
        </div>
        <Footer />
      </main>
    </div>
  );
}
