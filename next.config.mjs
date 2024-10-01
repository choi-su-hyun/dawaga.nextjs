/** @type {import('next').NextConfig} */
const nextConfig = {
  // 기존설정에 아래 추가
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
