# 主題顏色快速參考

## 基本用法

```css
/* 使用 CSS Variables */
.element {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}
```

## 常用顏色變數

### 📌 品牌色
```css
--color-primary          /* 主要品牌色 */
--color-secondary        /* 次要品牌色 */
--color-accent           /* 強調色 */
```

### 🎨 背景與表面
```css
--color-background          /* 頁面背景 */
--color-surface             /* 卡片/面板背景 */
--color-background-secondary /* 次要背景 */
```

### ✍️ 文字
```css
--color-text-primary     /* 主要文字 */
--color-text-secondary   /* 次要文字 */
--color-text-tertiary    /* 第三級文字 */
```

### 🔲 邊框
```css
--color-border           /* 邊框 */
--color-divider          /* 分隔線 */
```

### ⚠️ 狀態
```css
--color-success          /* 成功 */
--color-warning          /* 警告 */
--color-error            /* 錯誤 */
--color-info             /* 資訊 */
```

## 組件範例

### 按鈕
```css
.button {
  background: var(--color-primary);
  color: var(--color-on-primary);
}
.button:hover {
  background: var(--color-primary-hover);
}
```

### 卡片
```css
.card {
  background: var(--color-surface);
  color: var(--color-on-surface);
  border: 1px solid var(--color-border);
}
```

### 輸入框
```css
.input {
  background: var(--color-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}
.input:focus {
  border-color: var(--color-primary);
}
```

## Utility Classes

```html
<!-- 背景色 -->
<div class="bg-primary">主色背景</div>
<div class="bg-secondary">次要色背景</div>
<div class="bg-surface">表面色背景</div>

<!-- 文字色 -->
<p class="text-primary">主要文字</p>
<p class="text-secondary">次要文字</p>

<!-- 邊框 -->
<div class="border-default">預設邊框</div>

<!-- 陰影 -->
<div class="shadow-default">預設陰影</div>
<div class="shadow-hover">懸停陰影</div>
```

## 完整文檔

詳細使用說明請參考 [THEME_GUIDE.md](./THEME_GUIDE.md)
