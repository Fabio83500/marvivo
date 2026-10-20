import Link from "next/link";

import Page from "@/components/Page/layout.js";
import PageHero from "@/components/PageHero/layout.js";
import { photos } from "@/data/club.js";

export default function PageIntrouvable() {
  return (
    <Page
      title="Page introuvable | AS Mar Vivo"
      description="Cette page n'existe pas ou a été déplacée. Retrouvez toutes les informations de l'AS Mar Vivo depuis l'accueil."
    >
      <PageHero
        surtitre="Erreur 404"
        titre="Hors-jeu !"
        texte="Cette page n'existe pas ou a été déplacée. Revenez à l'accueil ou retrouvez directement nos équipes."
        image={photos.complexe}
      >
        <Link href="/" className="btn-gold">
          Retour à l&apos;accueil
        </Link>
        <Link href="/categories/foot-a-5" className="btn-ghost">
          Nos équipes
        </Link>
        <Link href="/contact" className="btn-ghost">
          Contact
        </Link>
      </PageHero>
    </Page>
  );
}
