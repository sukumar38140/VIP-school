import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // Optimize images for production
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Turbopack configuration for Next.js 16
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },

  // Enable SWR caching headers
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Ensure proper trailing slash handling for Vercel
  trailingSlash: false,

  // Compression
  compress: true,

  // Proper handling of static assets
  staticPageGenerationTimeout: 60,

  // TypeScript strict mode
  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // Production source maps (disable for better performance)
  productionBrowserSourceMaps: false,
};

export default nextConfig;
