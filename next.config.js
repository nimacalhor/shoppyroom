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
    NEXTAUTH_URL:"https://magnificent-beijinho-a54d56.netlify.app/",
    NEXTAUTH_SECRET:"verylongstringidontknowwhatitdoesletmetellyousomething"
  }
}

module.exports = nextConfig
