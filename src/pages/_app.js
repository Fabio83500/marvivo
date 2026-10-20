import { useEffect } from "react";
import { useRouter } from "next/router";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "@/styles/globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow-condensed",
});

// Révèle les éléments [data-reveal] quand ils entrent à l'écran (voir globals.css).
function useReveal(page) {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]:not([data-visible])");
    const montrer = (el) => el.setAttribute("data-visible", "");

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach(montrer);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            montrer(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [page]);
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useReveal(router.asPath);

  return (
    <div className={`${barlow.variable} ${barlowCondensed.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
