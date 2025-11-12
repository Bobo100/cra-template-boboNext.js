// next.config.ts
import type { NextConfig } from "next";
import path from "path";
// next-pwa 是 CJS，這裡用 require 仍可
// 若你是 "type": "module" 專案，可改用 createRequire 或動態 import
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  sassOptions: {
    // includePaths: [path.join(__dirname, "styles")],
    includePaths: [path.join(__dirname, "src")],
  },
  i18n: { locales: ["zh-TW"], defaultLocale: "zh-TW" },
  images: {
    domains: ["i.imgur.com"],
    remotePatterns: [
      { protocol: "https", hostname: "i.imgur.com" },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
    ],
    // Next.js 16 開始強制要定義 qualities
    qualities: [75, 85, 100],
  },
  reactCompiler: true,

  turbopack: {},
};

export default withPWA(nextConfig);
// 或最簡單：在檔尾加一行 `export {};` 也能解 isolatedModules 的報錯
