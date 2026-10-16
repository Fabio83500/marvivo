import Image from "next/image";
import u67 from "@/images/sept.jpg";
import u89 from "@/images/neuf.jpg";

export default function CardCate({ equipes }) {
    return (
         <section className="bg-slate-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#F0B34B]">
              Nos équipes
            </span>

            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Les catégories U5 à U9
            </h2>

            <p className="mt-5 text-lg leading-7 text-slate-600">
              Chaque catégorie bénéficie d&apos;un encadrement et d&apos;horaires
              adaptés à l&apos;âge des joueurs.
            </p>
          </div>


          {/* U5 / U6 / U7 */}
          <div className="mb-10 overflow-hidden rounded-3xl bg-white shadow-sm">

            <div className="grid md:grid-cols-[0.9fr_1.1fr]">

              <div className="relative min-h-[300px]">
                <Image
                  src={u67}
                  alt="Équipe U6 U7 de l'AS Mar Vivo"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#F0B34B]">
                    Football à 5
                  </p>

                  <h3 className="mt-1 text-4xl font-bold">
                    U5 · U6 · U7
                  </h3>
                </div>
              </div>


              <div className="p-7 md:p-10">

                <h4 className="text-2xl font-bold text-primary">
                  École de football
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  Les plus jeunes joueurs découvrent le football et
                  développent progressivement leurs premières qualités
                  motrices et techniques.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Responsable
                    </p>

                    <p className="mt-2 font-semibold text-slate-800">
                      Jérôme Jeanney
                    </p>

                    <a
                      href="tel:0665379800"
                      className="mt-1 block text-sm text-primary hover:underline"
                    >
                      06 65 37 98 00
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Entraîneurs
                    </p>

                    <p className="mt-2 font-semibold text-slate-800">
                      Adnane IBOUNOU
                    </p>

                    <p className="text-sm text-slate-600">
                      Jérémie PENTAGROSSA
                    </p>

                    <p className="text-sm text-slate-600">
                      Serge
                    </p>
                  </div>

                </div>

                <div className="mt-8 border-t border-slate-100 pt-7">

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Horaires d&apos;entraînement
                  </p>

                  <div className="mt-4 space-y-3">

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                      <span className="font-medium text-slate-700">
                        Mercredi
                      </span>

                      <span className="font-semibold text-primary">
                        13h45 – 15h30
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                      <span className="font-medium text-slate-700">
                        Vendredi
                      </span>

                      <span className="text-right font-semibold text-primary">
                        17h30 – 19h00
                        <span className="block text-xs font-normal text-slate-400">
                          U7 uniquement
                        </span>
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>


          {/* U8 */}
          <div className="mb-10 overflow-hidden rounded-3xl bg-white shadow-sm">

            <div className="grid md:grid-cols-[1.1fr_0.9fr]">

              <div className="order-2 p-7 md:order-1 md:p-10">

                <h4 className="text-2xl font-bold text-primary">
                  U8
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  Les joueurs continuent leur progression technique
                  et commencent à développer davantage leur jeu collectif.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Responsable
                    </p>

                    <p className="mt-2 font-semibold text-slate-800">
                      Jérôme Jeanney
                    </p>

                    <a
                      href="tel:0665379800"
                      className="mt-1 block text-sm text-primary hover:underline"
                    >
                      06 65 37 98 00
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Entraînements
                    </p>

                    <p className="mt-2 text-sm text-slate-600">
                      Mercredi
                    </p>

                    <p className="font-semibold text-primary">
                      13h45 – 15h30
                    </p>

                    <p className="mt-3 text-sm text-slate-600">
                      Vendredi
                    </p>

                    <p className="font-semibold text-primary">
                      17h30 – 19h00
                    </p>
                  </div>

                </div>

              </div>

              <div className="relative order-1 min-h-[300px] md:order-2">
                <Image
                  src={u89}
                  alt="Équipe U8 de l'AS Mar Vivo"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#F0B34B]">
                    Football à 5
                  </p>

                  <h3 className="mt-1 text-4xl font-bold">
                    U8
                  </h3>
                </div>
              </div>

            </div>
          </div>


          {/* U9 */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

            <div className="grid md:grid-cols-[0.9fr_1.1fr]">

              <div className="relative min-h-[300px]">
                <Image
                  src={u89}
                  alt="Équipe U9 de l'AS Mar Vivo"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#F0B34B]">
                    Football à 5
                  </p>

                  <h3 className="mt-1 text-4xl font-bold">
                    U9
                  </h3>
                </div>
              </div>


              <div className="p-7 md:p-10">

                <h4 className="text-2xl font-bold text-primary">
                  U9
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  Une nouvelle étape dans la progression des jeunes
                  joueurs, avec davantage de travail technique et collectif.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Responsable
                    </p>

                    <p className="mt-2 font-semibold text-slate-800">
                      Cedric Derby
                    </p>

                    <a
                      href="tel:0687270300"
                      className="mt-1 block text-sm text-primary hover:underline"
                    >
                      06 87 27 03 00
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Entraînements
                    </p>

                    <p className="mt-2 text-sm text-slate-600">
                      Mercredi
                    </p>

                    <p className="font-semibold text-primary">
                      17h00 – 18h45
                    </p>

                    <p className="mt-3 text-sm text-slate-600">
                      Vendredi
                    </p>

                    <p className="font-semibold text-primary">
                      17h30 – 19h00
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
    )
}
