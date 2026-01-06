/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [{ hostname: "api.dicebear.com" }],
  },
};

export default nextConfig;
