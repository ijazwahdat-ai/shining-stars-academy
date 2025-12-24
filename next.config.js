/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // برای پشتیبانی RTL در زبان‌های دری/پشتو
  i18n: {
    locales: ['en', 'fa', 'ps'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig