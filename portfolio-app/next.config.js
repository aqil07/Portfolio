/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    email: process.env.email,
    service: process.env.service,
    template: process.env.template,
    key: process.env.key
  }
}

module.exports = nextConfig

