// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add your image domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'w.wallhaven.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'th.wallhaven.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wallhaven.cc',
        pathname: '/images/user/avatar/**',
      },
    ],

    // Optimize image sizes for different devices
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Enable modern image formats for better compression
    formats: ['image/avif', 'image/webp'],

    // Minimize quality for better performance (adjust based on your needs)
    minimumCacheTTL: 31536000, // 1 year in seconds

    // Enable image optimization
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Enable compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },

  // Enable compression
  compress: true,

  // Optimize production builds
  productionBrowserSourceMaps: false,

  // Headers for caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=60, stale-while-revalidate=120',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;