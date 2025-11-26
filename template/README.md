# cra-template-boboNext.js

存放個人的基礎設定檔案 (測試版)

## ✨ 新功能：完整的 Light/Dark 主題系統

本模板現在包含了完整的主題顏色系統，支援 Light 和 Dark 模式切換！

### 🎨 主題特色

- ✅ **現代化配色**：基於 Tailwind 色彩系統的專業配色
- ✅ **完整的顏色變數**：包含主色、次要色、強調色、狀態色等
- ✅ **CSS Variables**：易於使用和覆蓋的 CSS 自定義屬性
- ✅ **平滑過渡**：主題切換時的流暢動畫效果
- ✅ **可訪問性**：考慮了對比度和可讀性
- ✅ **類型安全**：完整的 TypeScript 支援

### 🚀 快速開始

#### 1. 使用主題切換器

```tsx
import ThemeToggle from '@/components/Theme/ThemeToggle';

function MyLayout() {
  return (
    <div>
      <ThemeToggle />
      {/* 你的內容 */}
    </div>
  );
}
```

#### 2. 在組件中使用顏色

```tsx
// 使用 CSS Variables
<div style={{
  backgroundColor: 'var(--color-surface)',
  color: 'var(--color-text-primary)'
}}>
  內容
</div>

// 或使用 SCSS
import styles from './MyComponent.module.scss';

// MyComponent.module.scss
.container {
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  border: 1px solid var(--color-border);
}
```

#### 3. 查看主題展示

```tsx
import ThemeDemo from '@/components/ThemeDemo/ThemeDemo';

// 在任何頁面中使用來查看所有顏色
<ThemeDemo />
```

### 📚 文檔

- **[完整使用指南](./THEME_GUIDE.md)** - 詳細的使用說明和最佳實踐
- **[顏色快速參考](./THEME_COLORS.md)** - 所有可用顏色變數的快速查詢

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
