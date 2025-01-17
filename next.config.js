/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['imagomum.netlify.app', 'imagomum.com'],
  },
  output: 'export',
}

module.exports = nextConfig 