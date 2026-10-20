import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Sans JavaScript, les éléments animés au défilement restent visibles */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important}"}</style>
        </noscript>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
