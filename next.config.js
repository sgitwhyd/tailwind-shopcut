/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // remotePatterns: [
    //   {
    //     protocol: "https://",
    //     hostname: "fakestoreapi.com",
    //     port: "",
    //     pathname: "/img/**",
    //   },
    // ],
    domains: ["fakestoreapi.com"],
  },
};

module.exports = nextConfig;
