/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  images: {
    domains: ["media.graphassets.com"],
  },
});
// const nextConfig = {
//   images: {
//     domains: ["media.graphassets.com"],
//   },
// };

// module.exports = nextConfig;
