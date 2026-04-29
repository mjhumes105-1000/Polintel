import type { NextConfig } from 'next'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const nextConfig: NextConfig = {
  // Only static-export for GitHub Pages (CI sets STATIC_EXPORT=true).
  // Locally and on Vercel, output is omitted so API routes work.
  output: process.env.STATIC_EXPORT === 'true' ? 'export' : undefined,
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
