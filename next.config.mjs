/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "api.dicebear.com" },
      { hostname: "www.loom.com" },
      { hostname: "cdn.loom.com" },
    ],
  },
};

export default nextConfig;
