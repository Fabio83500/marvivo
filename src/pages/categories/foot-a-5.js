import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroFoot5 from "@/images/sept.jpg";
import logomarvivo from "@/images/logomarvivo.svg"

import u67 from "@/images/sept.jpg";
import u89 from "@/images/treize.jpg";
import labelFFF from "@/images/labelFFF.png";

import Hero from "@/components/categories/Hero/layout.js"
import Header from "@/components/Header/layout.js"
import Introduction from "@/components/categories/Introduction/layout.js"
import Cardcate from "@/components/categories/cardcate/layout.js"
import Localisation from "@/components/Localisation/layout.js"
import InfoUtile from "@/components/categories/InfoUtile/layout.js"
import Footer from "@/components/Footer/layout.js"

export default function FootA5() {
  return (
    <main className="bg-white">
      <Header />
     

      <Hero/>
      <Introduction />
      <Cardcate />
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl bg-white p-8 text-center shadow-sm md:flex-row md:p-12 md:text-left">

          <div className="flex shrink-0 justify-center md:w-48">
            <Image
              src={labelFFF}
              alt="Label Jeunes Excellence - Fédération Française de Football"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#F0B34B]">
              Formation des jeunes
            </span>

            <h2 className="mt-2 text-3xl font-bold text-primary">
              Un club labellisé par la FFF
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              L'AS Mar Vivo est labellisée par la Fédération Française
              de Football depuis octobre 2012, une reconnaissance de
              l'engagement du club dans la formation et l'accompagnement
              de ses jeunes licenciés.
            </p>
          </div>

        </div>
      </section>
      <InfoUtile />
    <Localisation />
    <Footer />

    </main>
  );
}