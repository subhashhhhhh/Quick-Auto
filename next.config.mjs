/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    assetPrefix: '/quick-auto/',
    basePath: '/quick-auto',
  }
  
  module.exports = nextConfig