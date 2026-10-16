import Image from "next/image";
import u67 from "@/images/sept.jpg";
import u89 from "@/images/neuf.jpg";

export default function CardCate() {
     const categories = [
        {
          name: "U10",
          age: "Enfants nés en 2016",
          coach: "Robert.C 06 99 89 70 69",
          trainings: [
            "Mardi — 17h30 à 19h00",
            "Jeudi — 17h30 à 19h00",
          ],
        },
        {
          name: "U11",
          age: "Enfants nés en 2015",
          coach: "Florent.G 06 56 85 96 27",
          trainings: [
            "Mardi — 17h30 à 19h00",
            "Vendredi — 17h30 à 19h00",
          ],
        },
        {
          name: "U12",
          age: "Enfants nés en 2014",
          coach: "Vincent.E 06 79 80 42 44",
          trainings: [
            "Mercredi — 15h30 à 17h00",
            "Vendredi — 17h30 à 19h00",
          ],
        },
        {
          name: "U13",
          age: "Enfants nés en 2013",
          coach: "Guillaume.B 06 95 16 26 37",
          trainings: [
            "Lundi — 17h30 à 19h00",
            "Jeudi — 17h30 à 19h00",
          ],
        },
      ];
    return (
       <section className="px-6 bg-[#f6f8fb] py-20 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5B642]">
              Organisation
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Horaires des entraînements
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Retrouvez les jours et horaires d&apos;entraînement de chaque
              catégorie.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {categories.map((category) => (
              <div
                key={category.name}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >

                {/* Header */}
                <div className="flex items-center justify-between bg-primary px-6 py-5">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-sm text-white/70">
                      {category.age}
                    </p>
                  </div>

                  <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                    {category.coach}
                  </div>
                </div>

                {/* Horaires */}
                <div className="p-6">

                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Entraînements
                  </p>

                  <div className="space-y-3">

                    {category.trainings.map((training, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-xl bg-[#f6f8fb] px-4 py-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          ⚽
                        </div>

                        <span className="text-sm font-medium text-gray-700 md:text-base">
                          {training}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    )
}
