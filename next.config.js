/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
}

module.exports = {
  images: {
    domains: ['images.unsplash.com','images.prismic.io'],
  },
  nextConfig
}