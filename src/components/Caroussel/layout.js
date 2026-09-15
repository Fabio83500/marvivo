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
  logomf,
  logogarden,
  adi,
  abcdom,
  funnyland,
  immoselect,
  intermarche,
  intersport,
  lapiazza,
  macdo,
];

export default function PartnersCarousel() {
  return (
    <section className=" overflow-hidden">
      <div className="overflow-hidden py-10">
        <div className="flex w-max gap-16 animate-marquee">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex h-24 w-60 shrink-0 items-center justify-center"
            >
              <Image
                src={logo}
                alt="Logo partenaire"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}