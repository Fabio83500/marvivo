import React from "react";
import Link from "next/link";
import Image from "next/image";

import sept from "@/images/sept.jpg";
import treize from "@/images/treize.jpg";
import quinze from "@/images/quinze.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const categories = [
    {
        title: "FOOT À 5",
        ages: "U5 À U9",
        image: sept,
        description:
            "Découvrir le football, apprendre les bases et surtout prendre plaisir à jouer ensemble.",
        link: "/categories/foot-a-5",
    },
    {
        title: "FOOT À 8",
        ages: "U10 À U13",
        image: treize,
        description:
            "Progresser techniquement, développer le collectif et découvrir la compétition.",
        link: "/categories/foot-a-8",
    },
    {
        title: "FOOT À 11",
        ages: "U14 À SENIORS",
        image: quinze,
        description:
            "Se dépasser, jouer collectif et relever les défis de la compétition.",
        link: "/categories/foot-a-11",
    },
];

function CategoryCard({ category }) {
    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <div className="overflow-hidden">
                <Image
                    src={category.image}
                    alt={category.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-72"
                />
            </div>

            {/* Contenu */}
            <div className="p-6 md:p-7">

                <h3 className="text-center text-2xl font-bold text-primary">
                    {category.title}
                </h3>

                {/* Âges */}
                <div className="mt-2 flex justify-center">
                    <span className="rounded-full bg-secondary px-4 py-1 text-sm font-semibold text-text">
                        {category.ages}
                    </span>
                </div>

                {/* Description */}
                <p className="mt-5 min-h-[72px] text-center text-sm leading-6 text-text/75">
                    {category.description}
                </p>

                {/* Bouton */}
                <div className="mt-6 flex justify-center">
                    <Link
                        href={category.link}
                        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-secondary hover:text-text"
                    >
                        En savoir plus →
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    return (
        <section id="categories" className="bg-[#F7F9FC] ">
            <div className="mx-auto mt-16 max-w-7xl px-6">

                {/* Titre */}
                <div className="text-center pt-8">
                    <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
                        Nos équipes
                    </span>

                    <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                        Nos catégories
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-text/70">
                        Du premier ballon aux compétitions seniors, découvrez les différentes
                        catégories de l&apos;AS Mar Vivo.
                    </p>
                </div>

                {/* ================= DESKTOP ================= */}
                <div className="mt-10 hidden gap-10 md:grid md:grid-cols-3 md:pb-20">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.title}
                            category={category}
                        />
                    ))}
                </div>

                {/* ================= MOBILE ================= */}
                <div className="mt-10 pb-14 md:hidden">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={16}
                        slidesPerView={1}
                        className="!pb-10"
                    >
                        {categories.map((category) => (
                            <SwiperSlide key={category.title}>
                                <CategoryCard category={category} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </section>
    );
}