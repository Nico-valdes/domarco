/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // 1. Subrutas viejas de prensas (ej: /prensas/cilindros-hidraulicos) hacia /prensas
      {
        source: '/prensas/:path+',
        destination: '/prensas',
        permanent: true,
      },
      // 2. Extensiones y archivos index legados de la web anterior
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/prensas.html',
        destination: '/prensas',
        permanent: true,
      },
      {
        source: '/contacto.html',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/historia.html',
        destination: '/historia',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
