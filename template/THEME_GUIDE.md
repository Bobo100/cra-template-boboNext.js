# 主題顏色系統使用指南

## 概述

這個專案採用了完整的 Light/Dark 主題顏色系統，基於現代設計原則，提供了豐富的顏色變數和易於使用的 API。

## 顏色架構

### Light Theme (淺色主題)
- **主色調**: Indigo (靛藍色) - 用於主要按鈕、連結等
- **次要色**: Emerald (翠綠色) - 用於次要操作
- **強調色**: Amber (琥珀色) - 用於特殊強調
- **背景色**: 白色和淺灰色階
- **文字色**: 深灰色階

### Dark Theme (深色主題)
- **主色調**: 亮靛藍色 - 在深色背景上更顯眼
- **次要色**: 亮翠綠色 - 保持清晰可見
- **強調色**: 亮琥珀色 - 強調效果更佳
- **背景色**: Slate 系列深色
- **文字色**: 淺灰色階

## 使用方式

### 1. CSS Variables (推薦)

在任何 CSS/SCSS 文件中直接使用 CSS 變數：

```css
.my-component {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.my-button {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.my-button:hover {
  background-color: var(--color-primary-hover);
}
```

### 2. SCSS Variables

在 SCSS 文件中可以使用 SCSS 變數：

```scss
@use "@/styles/index" as *;

.my-component {
  background-color: $surface-light;
  
  .dark & {
    background-color: $surface-dark;
  }
}
```

### 3. Utility Classes

使用預定義的 utility classes：

```tsx
<div className="bg-surface text-primary border-default">
  內容
</div>

<div className="bg-primary">
  主色背景
</div>

<div className="shadow-default">
  帶陰影的元素
</div>
```

## 顏色變數列表

### Primary Colors (主色)
- `--color-primary` - 主要顏色
- `--color-primary-hover` - 主要顏色 hover 狀態
- `--color-primary-active` - 主要顏色 active 狀態
- `--color-on-primary` - 主要顏色上的文字色
- `--color-primary-container` - 主要容器色（淺色版）
- `--color-on-primary-container` - 主要容器上的文字色

### Secondary Colors (次要色)
- `--color-secondary`
- `--color-secondary-hover`
- `--color-secondary-active`
- `--color-on-secondary`
- `--color-secondary-container`
- `--color-on-secondary-container`

### Accent Colors (強調色)
- `--color-accent`
- `--color-accent-hover`
- `--color-on-accent`

### Background Colors (背景色)
- `--color-background` - 主背景
- `--color-background-secondary` - 次要背景
- `--color-background-tertiary` - 第三級背景
- `--color-on-background` - 背景上的文字色

### Surface Colors (表面色 - 用於卡片、面板等)
- `--color-surface`
- `--color-surface-hover`
- `--color-on-surface`

### Text Colors (文字色)
- `--color-text-primary` - 主要文字
- `--color-text-secondary` - 次要文字
- `--color-text-tertiary` - 第三級文字
- `--color-text-disabled` - 禁用文字

### Border Colors (邊框色)
- `--color-border`
- `--color-border-hover`
- `--color-divider` - 分隔線

### State Colors (狀態色)
- `--color-success` / `--color-on-success` - 成功
- `--color-warning` / `--color-on-warning` - 警告
- `--color-error` / `--color-on-error` - 錯誤
- `--color-info` / `--color-on-info` - 資訊

### Shadow & Overlay (陰影與遮罩)
- `--color-shadow`
- `--color-shadow-hover`
- `--color-overlay`

## 最佳實踐

### 1. 使用語義化顏色

❌ 不好的做法：
```css
.button {
  background-color: #4f46e5; /* 硬編碼顏色 */
}
```

✅ 好的做法：
```css
.button {
  background-color: var(--color-primary); /* 使用語義化變數 */
}
```

### 2. 考慮對比度

始終使用 `on-*` 顏色來確保文字可讀性：

```css
.card {
  background-color: var(--color-primary);
  color: var(--color-on-primary); /* 確保對比度 */
}
```

### 3. 使用 Container 顏色

對於需要較淡背景的容器，使用 container 變數：

```css
.info-box {
  background-color: var(--color-primary-container);
  color: var(--color-on-primary-container);
  border: 1px solid var(--color-primary);
}
```

### 4. 添加 Transitions

為主題切換添加平滑過渡：

```css
.element {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

## 組件範例

### Button 組件

```tsx
// Button.tsx
import styles from './Button.module.scss';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ variant = 'primary', children, onClick }: ButtonProps) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

```scss
// Button.module.scss
@use "@/styles/index" as *;

.button {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  @include text-style("body");
}

.primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);

  &:hover {
    background-color: var(--color-primary-hover);
  }

  &:active {
    background-color: var(--color-primary-active);
  }
}

.secondary {
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);

  &:hover {
    background-color: var(--color-secondary-hover);
  }
}

.outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);

  &:hover {
    background-color: var(--color-primary-container);
  }
}
```

### Card 組件

```tsx
// Card.tsx
import styles from './Card.module.scss';

const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
};
```

```scss
// Card.module.scss
.card {
  padding: 24px;
  border-radius: 12px;
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  border: 1px solid var(--color-border);
  box-shadow: 0 1px 3px var(--color-shadow);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px var(--color-shadow-hover);
  }
}
```

## 測試主題

使用提供的 `ThemeDemo` 組件來查看所有顏色：

```tsx
import ThemeDemo from '@/components/ThemeDemo/ThemeDemo';

// 在你的頁面中使用
<ThemeDemo />
```

## 自定義顏色

如需自定義顏色，編輯 `src/styles/_variables.scss`：

```scss
// 修改 light theme 的主色
$primary-light: #your-color;

// 修改 dark theme 的主色
$primary-dark: #your-color;
```

## 主題切換

使用 `ThemeToggle` 組件來切換主題：

```tsx
import ThemeToggle from '@/components/Theme/ThemeToggle';

// 在你的 layout 或 navbar 中使用
<ThemeToggle />
```

## 瀏覽器支持

- CSS Variables: 所有現代瀏覽器
- Dark mode detection: 支援 `prefers-color-scheme`
- Transitions: 所有現代瀏覽器

## 疑難排解

### 顏色沒有變化？

1. 確認 `ThemeProvider` 已正確設置在 `_app.tsx`
2. 檢查是否使用了正確的 CSS 變數名稱
3. 確認 `global.scss` 已被導入

### 切換主題時有閃爍？

在組件中使用 `mounted` 狀態來防止 SSR 不匹配：

```tsx
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;
```

## 更多資源

- [Material Design 3 Color System](https://m3.material.io/styles/color/overview)
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
