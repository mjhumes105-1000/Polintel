import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@political-intel/types'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.congress.gov',
      },
      {
        protocol: 'https',
        hostname: 'bioguide.congress.gov',
      },
    ],
  },
  async redirects() {
    return [
      // Old named-slug committee URLs → new thomasId-based URLs
      { source: '/committees/house-armed-services', destination: '/committees/hsas', permanent: true },
      { source: '/committees/house-appropriations', destination: '/committees/hsap', permanent: true },
      { source: '/committees/house-ways-and-means', destination: '/committees/hswm', permanent: true },
      { source: '/committees/house-intelligence', destination: '/committees/hlig', permanent: true },
      { source: '/committees/house-judiciary', destination: '/committees/hsju', permanent: true },
      { source: '/committees/house-financial-services', destination: '/committees/hsba', permanent: true },
      { source: '/committees/house-energy-commerce', destination: '/committees/hsif', permanent: true },
      { source: '/committees/house-science-space-technology', destination: '/committees/hssy', permanent: true },
      { source: '/committees/house-natural-resources', destination: '/committees/hsii', permanent: true },
      { source: '/committees/house-foreign-affairs', destination: '/committees/hsfa', permanent: true },
      { source: '/committees/house-transportation', destination: '/committees/hspw', permanent: true },
      { source: '/committees/house-agriculture', destination: '/committees/hsag', permanent: true },
      { source: '/committees/senate-judiciary', destination: '/committees/ssju', permanent: true },
      { source: '/committees/senate-intelligence', destination: '/committees/slin', permanent: true },
      { source: '/committees/house-china-select', destination: '/committees/hszs', permanent: true },
      { source: '/committees/house-oversight', destination: '/committees/hsgo', permanent: true },
    ]
  },
}

export default nextConfig
