import type { NextConfig } from 'next'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  transpilePackages: ['@political-intel/types'],
  images: {
    unoptimized: true,
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
}

export default nextConfig
