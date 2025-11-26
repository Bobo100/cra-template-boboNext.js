# 顏色變數對照表

## CSS Variables ↔️ SCSS Variables

| CSS Variable | Light SCSS | Dark SCSS | 用途 |
|-------------|-----------|----------|------|
| `--color-primary` | `$primary-light` | `$primary-dark` | 主要品牌色 |
| `--color-primary-hover` | `$primary-hover-light` | `$primary-hover-dark` | 主色懸停 |
| `--color-primary-active` | `$primary-active-light` | `$primary-active-dark` | 主色啟動 |
| `--color-on-primary` | `$on-primary-light` | `$on-primary-dark` | 主色上的文字 |
| `--color-secondary` | `$secondary-light` | `$secondary-dark` | 次要品牌色 |
| `--color-secondary-hover` | `$secondary-hover-light` | `$secondary-hover-dark` | 次色懸停 |
| `--color-accent` | `$accent-light` | `$accent-dark` | 強調色 |
| `--color-background` | `$background-light` | `$background-dark` | 主背景 |
| `--color-background-secondary` | `$background-secondary-light` | `$background-secondary-dark` | 次要背景 |
| `--color-surface` | `$surface-light` | `$surface-dark` | 卡片/面板背景 |
| `--color-surface-hover` | `$surface-hover-light` | `$surface-hover-dark` | 表面懸停 |
| `--color-text-primary` | `$text-primary-light` | `$text-primary-dark` | 主要文字 |
| `--color-text-secondary` | `$text-secondary-light` | `$text-secondary-dark` | 次要文字 |
| `--color-text-tertiary` | `$text-tertiary-light` | `$text-tertiary-dark` | 第三級文字 |
| `--color-border` | `$border-light` | `$border-dark` | 邊框 |
| `--color-divider` | `$divider-light` | `$divider-dark` | 分隔線 |
| `--color-success` | `$success-light` | `$success-dark` | 成功狀態 |
| `--color-warning` | `$warning-light` | `$warning-dark` | 警告狀態 |
| `--color-error` | `$error-light` | `$error-dark` | 錯誤狀態 |
| `--color-info` | `$info-light` | `$info-dark` | 資訊狀態 |
| `--color-shadow` | `$shadow-light` | `$shadow-dark` | 陰影 |

## 顏色值速查

### Light Theme Colors

```scss
// Primary (Indigo)
$primary-light: #4f46e5         // Indigo-600
$primary-hover-light: #4338ca   // Indigo-700
$primary-active-light: #3730a3  // Indigo-800

// Secondary (Emerald)
$secondary-light: #10b981       // Emerald-500
$secondary-hover-light: #059669 // Emerald-600

// Accent (Amber)
$accent-light: #f59e0b          // Amber-500

// Background & Surface
$background-light: #ffffff      // White
$background-secondary-light: #f9fafb // Gray-50
$surface-light: #ffffff         // White

// Text
$text-primary-light: #111827    // Gray-900
$text-secondary-light: #6b7280  // Gray-500
$text-tertiary-light: #9ca3af   // Gray-400

// Border
$border-light: #e5e7eb          // Gray-200
$divider-light: #f3f4f6         // Gray-100

// State
$success-light: #10b981         // Emerald-500
$warning-light: #f59e0b         // Amber-500
$error-light: #ef4444           // Red-500
$info-light: #3b82f6            // Blue-500
```

### Dark Theme Colors

```scss
// Primary (Indigo)
$primary-dark: #6366f1          // Indigo-500
$primary-hover-dark: #818cf8    // Indigo-400
$primary-active-dark: #a5b4fc   // Indigo-300

// Secondary (Emerald)
$secondary-dark: #34d399        // Emerald-400
$secondary-hover-dark: #6ee7b7  // Emerald-300

// Accent (Amber)
$accent-dark: #fbbf24           // Amber-400

// Background & Surface
$background-dark: #0f172a       // Slate-900
$background-secondary-dark: #1e293b // Slate-800
$surface-dark: #1e293b          // Slate-800

// Text
$text-primary-dark: #f1f5f9     // Slate-100
$text-secondary-dark: #94a3b8   // Slate-400
$text-tertiary-dark: #64748b    // Slate-500

// Border
$border-dark: #334155           // Slate-700
$divider-dark: #1e293b          // Slate-800

// State
$success-dark: #34d399          // Emerald-400
$warning-dark: #fbbf24          // Amber-400
$error-dark: #f87171            // Red-400
$info-dark: #60a5fa             // Blue-400
```

## 使用建議

### 選擇正確的顏色

**使用 Primary** 當你需要：
- 主要 CTA 按鈕
- 重要連結
- 選中狀態
- 主要圖示

**使用 Secondary** 當你需要：
- 次要操作
- 補充按鈕
- 成功提示的替代方案

**使用 Accent** 當你需要：
- 特殊強調
- 促銷/新功能標記
- 吸引注意力的元素

**使用 Surface** 當你需要：
- 卡片背景
- 模態視窗
- 下拉選單
- 側邊欄

**使用 Text 層級** 當你需要：
- Primary: 標題、主要內容
- Secondary: 說明文字、副標題
- Tertiary: 輔助資訊
- Disabled: 禁用狀態文字

**使用 State 顏色** 當你需要：
- Success: 成功訊息、完成狀態
- Warning: 警告訊息、注意事項
- Error: 錯誤訊息、驗證失敗
- Info: 提示訊息、說明資訊

## 無障礙對比度

所有顏色組合都經過設計，確保符合 WCAG 2.1 AA 級別：

✅ **高對比度組合**
- Primary + On-Primary
- Secondary + On-Secondary
- Surface + On-Surface
- Background + Text-Primary

⚠️ **中等對比度組合** (適用於大文字或圖示)
- Background + Text-Secondary
- Surface + Text-Tertiary

❌ **避免使用**
- Text-Disabled 用於重要資訊
- 低對比度的自定義組合
