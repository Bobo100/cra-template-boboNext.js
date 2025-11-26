# 🚀 Next.js Professional Template

一個現代化、結構化的 Next.js 專案模板，內建 TypeScript、Tailwind CSS、Redux Toolkit 和完整的主題系統。

## ✨ 特色功能

### 🎨 完整的主題系統
- Light/Dark 模式切換（基於 next-themes）
- Material Design 3 配色系統
- CSS Variables + SCSS Variables 雙重支援
- 78+ 預定義顏色變數

### 🏗️ 專業的專案架構
- 清晰的元件分層（common / features / layouts）
- 獨立的狀態管理層（store/）
- 統一的檔案命名規範
- TypeScript 完整類型支援

### 🎯 開發體驗優化
- 響應式 NavBar（Desktop/Mobile）
- 自訂 Hooks 庫
- SCSS Modules + Tailwind CSS
- Redux Toolkit 狀態管理
- PWA 支援

### 🎨 主題特色

- ✅ **現代化配色**：基於 Tailwind 色彩系統的專業配色
- ✅ **完整的顏色變數**：包含主色、次要色、強調色、狀態色等
- ✅ **CSS Variables**：易於使用和覆蓋的 CSS 自定義屬性
- ✅ **平滑過渡**：主題切換時的流暢動畫效果
- ✅ **可訪問性**：考慮了對比度和可讀性
- ✅ **類型安全**：完整的 TypeScript 支援

## 📁 專案結構

```
src/
├── components/
│   ├── common/              # 共用 UI 元件（可跨專案複用）
│   │   ├── Footer/          # 頁尾元件
│   │   ├── NavBar/          # 導航列
│   │   │   ├── components/
│   │   │   │   ├── desktop/     # 桌面版 NavBar
│   │   │   │   ├── mobile/      # 手機版 NavBar
│   │   │   │   ├── hooks/       # NavBar 專用 hooks
│   │   │   │   └── NavBarLinkWrapper/
│   │   │   └── NavBar.tsx
│   │   ├── ImageWrapper/    # 圖片包裝器
│   │   └── LinkList.tsx     # 導航連結配置
│   ├── features/            # 功能性元件（業務邏輯相關）
│   │   ├── Theme/           # 主題切換功能
│   │   └── ThemeDemo/       # 主題展示頁面
│   ├── layouts/             # 版面配置元件
│   │   ├── Layout.tsx       # 主要 Layout
│   │   └── Layout.module.scss
│   └── Home/                # 首頁元件
├── store/                   # Redux 狀態管理
│   ├── hooks/               # Redux hooks (useAppDispatch, useAppSelector)
│   ├── slices/              # Redux slices
│   ├── types/               # 類型定義
│   └── store.ts             # Store 配置
├── pages/                   # Next.js 頁面路由（必須小寫）
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   └── theme-demo.tsx
├── hooks/                   # 全域自訂 Hooks
├── styles/                  # 全域樣式
│   ├── _variables.scss      # SCSS 變數
│   ├── _mixins.scss         # SCSS Mixins
│   └── global.scss          # 全域樣式
└── utils/                   # 工具函數
```

## � 檔案命名規範

### ✅ React 元件檔案
- **格式**: `PascalCase.tsx`
- **範例**: `NavBar.tsx`, `Footer.tsx`, `ThemeToggle.tsx`
- **原因**: 與元件名稱保持一致，清楚表明這是一個 React 元件

### ✅ React Hooks
- **格式**: `use*.ts` 或 `use*.tsx`
- **範例**: `useScroll.ts`, `useWindowSize.tsx`, `useNavBarLink.tsx`
- **原因**: React Hooks 必須以 `use` 開頭

### ✅ 工具函數/配置檔案
- **格式**: `camelCase.ts` 或 `kebab-case.ts`
- **範例**: `store.ts`, `asyncSlice.ts`, `commonFunction.tsx`
- **原因**: 非元件檔案使用小駝峰或 kebab-case

### ✅ 樣式檔案
- **格式**: `*.module.scss` (元件樣式) 或 `_*.scss` (全域樣式)
- **範例**: `Layout.module.scss`, `_variables.scss`, `global.scss`
- **原因**: CSS Modules 需要 `.module` 後綴

### ✅ Next.js Pages
- **格式**: `kebab-case.tsx` (必須小寫)
- **範例**: `index.tsx`, `theme-demo.tsx`, `_app.tsx`
- **原因**: Next.js 路由基於檔案名稱，建議使用小寫避免路由問題

### ✅ 資料夾命名
- **格式**: `kebab-case` 或 `PascalCase`（統一即可）
- **建議**: 元件資料夾用 `PascalCase`，功能資料夾用 `kebab-case`
- **範例**: `NavBar/`, `ThemeDemo/`, `common/`, `features/`

## �🚀 快速開始

### 1. 使用主題切換器

```tsx
import ThemeToggle from '@/components/features/Theme/ThemeToggle';

function MyLayout() {
  return (
    <div>
      <ThemeToggle />
      {/* 你的內容 */}
    </div>
  );
}
```

### 2. 使用 Layout 元件

```tsx
import Layout from '@/components/layouts/Layout';

export default function MyPage() {
  return (
    <Layout>
      <h1>我的頁面</h1>
    </Layout>
  );
}
```

### 3. 在元件中使用顏色

```tsx
// 使用 CSS Variables
<div style={{
  backgroundColor: 'var(--color-surface)',
  color: 'var(--color-text-primary)'
}}>
  內容
</div>
```

```scss
// 使用 SCSS Variables + CSS Variables
@use "@/styles/index" as *;

.container {
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  border: 1px solid var(--color-border);
  
  // 或使用 SCSS 變數
  @include theme-bg($surface-light, $surface-dark);
}
```

### 4. 使用 Redux Store

```tsx
// 使用 Redux Hooks
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchFirstData } from '@/store/slices/asyncSlice';

function MyComponent() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.async);
  
  useEffect(() => {
    dispatch(fetchFirstData());
  }, []);
  
  return <div>{data.title}</div>;
}
```

### 5. 創建自訂 Hook

```tsx
// src/hooks/useMyHook.ts
import { useState, useEffect } from 'react';

export function useMyHook() {
  const [value, setValue] = useState('');
  
  useEffect(() => {
    // 你的邏輯
  }, []);
  
  return value;
}
```

### 6. 查看主題展示

訪問 `/theme-demo` 頁面查看所有可用的主題顏色和元件範例。

## 🧩 元件架構說明

### NavBar 元件拆解

NavBar 採用響應式設計，針對 Desktop 和 Mobile 分別實作：

```
NavBar/
├── NavBar.tsx                    # 主元件（判斷顯示 Desktop/Mobile）
└── components/
    ├── desktop/
    │   ├── NavBarDesktop.tsx     # 桌面版 NavBar
    │   └── NavBarDesktop.module.scss
    ├── mobile/
    │   ├── NavBarMobile.tsx      # 手機版 NavBar（側邊選單）
    │   └── NavBarMobile.module.scss
    ├── hooks/
    │   ├── useScroll.tsx         # 滾動偵測 Hook
    │   └── useScrollLock.tsx     # 滾動鎖定 Hook
    └── NavBarLinkWrapper/
        ├── NavBarLinkWrapper.tsx # 連結包裝器元件
        ├── NavBarLinkWrapper.module.scss
        └── hooks/
            └── useNavBarLink.tsx # 連結邏輯 Hook
```

**設計優點**：
- ✅ Desktop/Mobile 完全分離，易於維護
- ✅ Hooks 獨立抽離，邏輯可複用
- ✅ NavBarLinkWrapper 處理連結共用邏輯
- ✅ 樣式模組化，避免衝突

### 主題系統架構

```
Theme/
├── ThemeToggle.tsx              # 主題切換按鈕
└── ThemeToggle.module.scss

ThemeDemo/
├── ThemeDemo.tsx                # 主題展示頁面
└── ThemeDemo.module.scss

styles/
├── _variables.scss              # SCSS 變數定義（60+ 顏色）
├── _mixins.scss                 # 主題感知 Mixins
└── global.scss                  # CSS Variables（78 個）
```

## 🛠️ 技術棧

| 類別 | 技術 | 版本 | 說明 |
|------|------|------|------|
| **框架** | Next.js | 16.x | React 框架，支援 SSR/SSG |
| **語言** | TypeScript | 5.x | 類型安全的 JavaScript |
| **樣式** | Tailwind CSS | 4.x | 實用性優先的 CSS 框架 |
| | SCSS Modules | - | 元件級樣式隔離 |
| **狀態管理** | Redux Toolkit | 2.x | 現代化的 Redux 狀態管理 |
| **主題** | next-themes | 0.4.x | 主題切換解決方案 |
| **圖示** | FontAwesome | 7.x | 豐富的圖示庫 |
| **PWA** | next-pwa | 5.x | 漸進式網頁應用程式支援 |

## 💡 開發建議

### 創建新元件

1. **共用 UI 元件** → 放在 `components/common/`
   - 例如：Button, Card, Input 等可複用元件

2. **功能性元件** → 放在 `components/features/`
   - 例如：UserProfile, ProductList 等業務邏輯元件

3. **版面配置** → 放在 `components/layouts/`
   - 例如：MainLayout, DashboardLayout 等

### 狀態管理

- **全域狀態** → 使用 Redux（store/slices/）
- **元件狀態** → 使用 useState/useReducer
- **URL 狀態** → 使用 Next.js Router
- **伺服器狀態** → 考慮使用 React Query（可選）

### 樣式撰寫

```scss
// 優先使用 CSS Variables
.container {
  background: var(--color-surface);
  color: var(--color-text-primary);
}

// 需要編譯時處理時使用 SCSS
.container {
  @include theme-bg($surface-light, $surface-dark);
  padding: $spacing-md;
}

// Tailwind 用於快速原型開發
<div className="flex items-center gap-4 p-4">
```

### 🎯 可用的主題顏色

#### 品牌色
- Primary (主色) - Indigo 系列
- Secondary (次要色) - Emerald 系列  
- Accent (強調色) - Amber 系列

#### 功能色
- Background (背景)
- Surface (表面/卡片)
- Text (文字層級)
- Border (邊框)
- State (成功/警告/錯誤/資訊)

#### 互動狀態
- Default (預設)
- Hover (懸停)
- Active (啟動)
- Disabled (禁用)

### 🛠️ 自定義顏色

編輯 `src/styles/_variables.scss` 來自定義你的主題顏色：

```scss
// Light Theme
$primary-light: #your-color;

// Dark Theme  
$primary-dark: #your-color;
```

## 📖 相關文檔

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - 完整的專案架構規範
  - 檔案命名規範 (.ts vs .tsx)
  - Import/Export 規則
  - 類型定義指南
  - 代碼風格規範
  
- **[THEME_GUIDE.md](./THEME_GUIDE.md)** - 主題系統使用指南
  - 顏色變數完整列表
  - CSS Variables 使用方式
  - 元件範例
  - 無障礙設計指南

## 🔗 更多資源

- [Material Design 3 Color System](https://m3.material.io/styles/color/overview)
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
