/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    minimumCacheTTL: 15552000,
    loader: 'custom',
    loaderFile: './utils/image-loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
};

export default nextConfig;
