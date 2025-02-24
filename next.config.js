const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // Port where your Strapi server is running
        pathname: "/**", // Allow all paths
      },
    ],
    domains: ["grateful-authority-34f01c9d0d.media.strapiapp.com"],
  },
};

module.exports = nextConfig;
