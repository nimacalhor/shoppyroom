/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
  env:{
    NEXTAUTH_URL:"https//",
    NEXTAUTH_SECRET:""
  }
}

module.exports = nextConfig
