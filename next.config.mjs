/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    // La prop `quality={90}` du logo du Hero nécessite d'être déclarée ici
    // depuis Next.js 16, sinon elle est silencieusement ramenée à 75.
    qualities: [75, 90],
  },
};

export default nextConfig;
