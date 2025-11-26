// postcss.config.js
module.exports = {
  plugins: {
    // 這行就是啟動 Tailwind 4 的關鍵
    "@tailwindcss/postcss": {},

    // 如果需要 autoprefixer
    autoprefixer: {},
  },
};
