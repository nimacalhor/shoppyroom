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
    NEXTAUTH_URL:"https://mellifluous-jelly-93047e.netlify.app/",
    NEXTAUTH_SECRET:"verylongstringidontknowwhatitdoesletmetellyousomething"
  }
}

module.exports = nextConfig
