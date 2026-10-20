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

export default function App({ Component, pageProps }) {
  return (
    <div className={`${barlow.variable} ${barlowCondensed.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
