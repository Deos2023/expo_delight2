/**@type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
     images: {
    domains: ['images.unsplash.com', 'flagcdn.com','cdn-icons-png.flaticon.com'], // add any other domains you use
  },
}
module.exports = nextConfig