import React from "react";
import Image from "next/image";

import logomf from "@/images/logomf.png";
import logogarden from "@/images/logo2.png";
import adi from "@/images/adi.png";
import abcdom from "@/images/abcdom.png";
import funnyland from "@/images/funnyland.png";
import immoselect from "@/images/immoselect.webp";
import intermarche from "@/images/intermarche.png";
import intersport from "@/images/intersport.png";
import lapiazza from "@/images/lapiazza.png";
import macdo from "@/images/macdo.png";

const logos = [
  { src: logomf, name: "MF Agency" },
  { src: logogarden, name: "partenaire" },
  { src: adi, name: "ADI" },
  { src: abcdom, name: "ABC Dom" },
  { src: funnyland, name: "Funnyland" },
  { src: immoselect, name: "Immo Select" },
  { src: intermarche, name: "Intermarché" },
  { src: intersport, name: "Intersport" },
  { src: lapiazza, name: "La Piazza" },
  { src: macdo, name: "McDonald's" },
];

export default function PartnersCarousel() {
  return (
    <section id="partenaires" className="overflow-hidden">
      <h2 className="sr-only">Nos partenaires</h2>
      <div className="overflow-hidden py-10">
        <div className="flex w-max gap-16 animate-marquee">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex h-24 w-60 shrink-0 items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={`Logo ${logo.name}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}