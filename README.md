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
npx create-react-app my-app --template cra-template-bobonext.js

# 或從 GitHub 直接安裝
npx create-react-app my-app --template file:path/to/cra-template-boboNext.js

# 或使用 npm
npm init react-app my-app -- --template cra-template-bobonext.js

# 或使用 yarn
yarn create react-app my-app --template cra-template-bobonext.js
```

> **注意**: 雖然使用 `create-react-app` 指令，但這個 template 會創建一個 **Next.js** 專案，而非傳統的 CRA 專案。

## 🚀 開發指令

安裝完成後，進入專案目錄：

```bash
cd my-app
```

執行開發伺服器：

```bash
# 使用 npm
npm run dev

# 使用 yarn
yarn dev

# 使用 pnpm
pnpm dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 其他指令

```bash
# 建置生產版本
npm run build

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

使用此 template 創建的專案結構：

```text
my-app/
├── public/              # 靜態資源
│   └── images/          # 圖片資源
├── src/
│   ├── components/      # React 元件
│   │   ├── common/      # 共用元件 (NavBar, Footer, ImageWrapper)
│   │   ├── features/    # 功能元件 (Theme, ThemeDemo)
│   │   ├── layouts/     # 版面配置 (Layout)
│   │   └── Home/        # 首頁元件
│   ├── store/           # Redux 狀態管理
│   │   ├── hooks/       # Redux hooks
│   │   ├── slices/      # Redux slices
│   │   └── types/       # Store 類型定義
│   ├── types/           # 全域類型定義
│   │   ├── common.ts    # 通用類型
│   │   ├── api.ts       # API 相關類型
│   │   └── enums/       # Enums
│   ├── hooks/           # 自訂 Hooks
│   ├── pages/           # Next.js 頁面路由
│   │   ├── _app.tsx     # App 入口
│   │   ├── _document.tsx
│   │   ├── index.tsx    # 首頁
│   │   └── theme-demo.tsx
│   ├── styles/          # 全域樣式
│   │   ├── _variables.scss   # SCSS 變數 (60+ 顏色)
│   │   ├── _mixins.scss      # SCSS Mixins
│   │   └── global.scss       # CSS Variables (78 個)
│   └── utils/           # 工具函數
├── .eslintrc.json       # ESLint 配置
├── .prettierrc.json     # Prettier 配置
├── next.config.ts       # Next.js 配置
├── tailwind.config.js   # Tailwind CSS 配置
├── tsconfig.json        # TypeScript 配置
├── ARCHITECTURE.md      # 架構規範文檔
├── THEME_GUIDE.md       # 主題使用指南
└── README.md            # 專案說明
```

## 🎨 主題系統

內建完整的 Light/Dark 主題系統：

- ✅ 使用 CSS Variables 動態切換顏色
- ✅ SCSS 變數提供編譯時的顏色管理
- ✅ Material Design 3 配色方案
- ✅ 78+ 預定義顏色變數
- ✅ 支援主題感知元件

訪問 `/theme-demo` 頁面查看所有可用的主題顏色。

詳細使用說明請參考 `THEME_GUIDE.md`

## 🔧 技術棧

- **框架**: Next.js 16.x
- **語言**: TypeScript 5.x
- **樣式**: Tailwind CSS 4.x + SCSS Modules
- **狀態管理**: Redux Toolkit 2.x
- **主題**: next-themes 0.4.x
- **圖示**: FontAwesome 7.x
- **PWA**: next-pwa 5.x

## 📖 文檔

創建專案後，你會發現以下文檔：

- **README.md** - 專案說明與快速開始
- **ARCHITECTURE.md** - 完整的架構規範
  - 檔案命名規範 (.ts vs .tsx)
  - Import/Export 規則
  - 類型定義指南
  - 代碼風格規範
- **THEME_GUIDE.md** - 主題系統使用指南
  - 顏色變數完整列表
  - 使用範例
  - 無障礙設計指南

## 🎯 特色亮點

### 專業的專案架構
- 清晰的元件分層（common / features / layouts）
- 統一的檔案命名規範
- 完整的 TypeScript 類型支援
- Barrel exports 優化 import 路徑

### 完整的開發工具
- ESLint + Prettier 代碼格式化
- TypeScript 嚴格模式
- Redux DevTools 支援
- 響應式 NavBar（Desktop/Mobile）

### 開箱即用的功能
- Light/Dark 主題切換
- Redux 狀態管理範例
- 自訂 Hooks 庫
- PWA 支援
- **圖示**: FontAwesome
- **PWA**: next-pwa

## 📝 License

MIT © [Bobo100](https://github.com/Bobo100)

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request！

## 📮 聯絡

- GitHub: [@Bobo100](https://github.com/Bobo100)
- Repository: [cra-template-boboNext.js](https://github.com/Bobo100/cra-template-boboNext.js)
