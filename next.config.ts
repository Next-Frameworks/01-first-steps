import type { NextConfig } from "next";

// Añadir en documentacion
// https://nextjs.org/docs/pages/getting-started/deploying#docker

// Ejecutar dockerfile: 
// docker build -t nextjs-first-steps .

// Ejecutar para crear contentedor: 
// docker container run -dp 3000:3000 nextjs-first-steps
const nextConfig: NextConfig = {
    output: "standalone",
};

export default nextConfig;
