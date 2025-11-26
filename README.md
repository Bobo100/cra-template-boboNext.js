# cra-template-boboNext.js

一個現代化的 Next.js 專案模板，內建 TypeScript、Tailwind CSS、Redux Toolkit 和主題切換功能。

## ✨ 特色功能

- 🚀 **Next.js 16** - 最新版本的 Next.js 框架
- 🎨 **Tailwind CSS 4** - 最新的實用性優先 CSS 框架
- 📘 **TypeScript** - 完整的類型支援
- 🎭 **主題切換** - 內建 Light/Dark 模式切換 (next-themes)
- 🔄 **Redux Toolkit** - 現代化的狀態管理
- 💅 **SCSS Modules** - 元件級樣式支援
- 🎯 **FontAwesome** - 豐富的圖示庫
- 📱 **響應式設計** - Mobile-first 設計理念
- 🎪 **PWA 支援** - 漸進式網頁應用程式
- 🎨 **Material Design 3** - 現代化的配色系統

## 📦 安裝使用

```bash
# 使用 npx (推薦)
npx create-next-app my-app --template cra-template-bobonext.js

# 或使用 npm
npm init next-app my-app --template cra-template-bobonext.js

# 或使用 yarn
yarn create next-app my-app --template cra-template-bobonext.js
```

## 🚀 開發指令

```bash
# 開發模式
npm run dev
# 或
yarn dev

# 建置生產版本
npm run build
# 或
yarn build

# 啟動生產伺服器
npm start
# 或
yarn start

# Lint 檢查
npm run lint
# 或
yarn lint
```

## 📁 專案結構

```
├── public/          # 靜態資源
│   └── images/      # 圖片資源
├── src/
│   ├── components/  # React 元件
│   │   ├── common/  # 共用元件 (NavBar, Footer, etc.)
│   │   ├── Home/    # 首頁元件
│   │   ├── redux/   # Redux 相關
│   │   └── Theme/   # 主題切換元件
│   ├── hooks/       # 自訂 Hooks
│   ├── pages/       # Next.js 頁面
│   ├── styles/      # 全域樣式
│   │   ├── _variables.scss   # SCSS 變數
│   │   ├── _mixins.scss      # SCSS Mixins
│   │   └── global.scss       # 全域樣式
│   └── utils/       # 工具函數
├── next.config.ts   # Next.js 配置
├── tailwind.config.js  # Tailwind 配置
└── tsconfig.json    # TypeScript 配置
```

## 🎨 主題系統

內建完整的 Light/Dark 主題系統：

- 使用 CSS Variables 動態切換顏色
- SCSS 變數提供編譯時的顏色管理
- Material Design 3 配色方案
- 支援主題感知元件

訪問 `/theme-demo` 頁面查看所有可用的主題顏色。

## 🔧 技術棧

- **框架**: Next.js 16
- **語言**: TypeScript
- **樣式**: Tailwind CSS 4, SCSS Modules
- **狀態管理**: Redux Toolkit
- **主題**: next-themes
- **圖示**: FontAwesome
- **PWA**: next-pwa

## 📝 License

MIT © [Bobo100](https://github.com/Bobo100)

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request！

## 📮 聯絡

- GitHub: [@Bobo100](https://github.com/Bobo100)
- Repository: [cra-template-boboNext.js](https://github.com/Bobo100/cra-template-boboNext.js)
