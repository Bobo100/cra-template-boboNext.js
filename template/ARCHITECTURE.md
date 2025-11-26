# 專案架構規範文檔

> 本文檔定義了 Next.js Template 的架構規範和最佳實踐

## 📝 檔案命名規範

### .ts vs .tsx 規則

**使用 `.tsx`**：
- ✅ 包含 JSX 語法的檔案
- ✅ React 元件檔案
- ✅ 包含 JSX 的 hooks（如果需要在 hook 內 return JSX）

**使用 `.ts`**：
- ✅ 純 TypeScript 檔案（無 JSX）
- ✅ 類型定義檔案
- ✅ 工具函數
- ✅ 配置檔案
- ✅ Redux slices、store 設定
- ✅ 純邏輯的 hooks

### 範例對照

```
✅ 正確
src/
├── components/
│   ├── NavBar/
│   │   └── NavBar.tsx          # 有 JSX
│   └── Footer/
│       └── Footer.tsx           # 有 JSX
├── hooks/
│   ├── useWindowSize.tsx        # 可能 return JSX
│   └── useClassName.ts          # 純邏輯，無 JSX
├── store/
│   ├── store.ts                 # 無 JSX
│   ├── slices/
│   │   └── asyncSlice.ts        # 無 JSX
│   └── types/
│       └── stateType.ts         # 類型定義
├── utils/
│   ├── commonFunction.ts        # 工具函數
│   └── browserUtils.ts          # 工具函數
└── types/
    ├── index.ts                 # 類型定義
    └── common.ts                # 類型定義
```

## 🎯 元件命名規範

### React 元件
- **格式**: `PascalCase.tsx`
- **範例**: `NavBar.tsx`, `Footer.tsx`, `ThemeToggle.tsx`
- **原因**: 與元件名稱保持一致

### React Hooks
- **格式**: `use*.ts` 或 `use*.tsx`
- **範例**: `useScroll.ts`, `useWindowSize.tsx`
- **原因**: React Hooks 必須以 `use` 開頭

### 工具函數
- **格式**: `camelCase.ts` 或 `kebab-case.ts`
- **範例**: `commonFunction.ts`, `browserUtils.ts`

### 樣式檔案
- **元件樣式**: `*.module.scss`
- **全域樣式**: `_*.scss` 或 `global.scss`

### Next.js Pages
- **格式**: `kebab-case.tsx`（必須小寫）
- **範例**: `index.tsx`, `theme-demo.tsx`

### 資料夾
- **元件資料夾**: `PascalCase`（如 `NavBar/`, `Footer/`）
- **功能資料夾**: `kebab-case`（如 `common/`, `features/`）

## 🔄 Import/Export 規範

### Export 規則

**使用 Named Export**（推薦）：
```typescript
// ✅ 好的做法
export const Button = () => { ... }
export function calculateTotal() { ... }
export const API_URL = 'https://...'
```

**避免 Default Export**（除了以下情況）：
```typescript
// ✅ 允許使用 default export 的場景
// 1. Next.js Pages（必須）
export default function HomePage() { ... }

// 2. Next.js API Routes
export default async function handler(req, res) { ... }

// 3. Next.js _app.tsx 和 _document.tsx
export default function MyApp({ Component, pageProps }) { ... }
```

### Import 規則

**類型 Import**：
```typescript
// ✅ 使用 type import 導入純類型
import type { User, Post } from '@/types'

// ✅ Enum 需要 regular import（因為會編譯成值）
import { ApiStatus, UserRole } from '@/types'

// ✅ 混合導入
import type { Todo } from '@/types/api'
import { ApiStatus } from '@/types/api'
```

**Barrel Exports**：
```typescript
// ✅ 使用 index.ts 統一導出
// src/utils/index.ts
export * from './browserUtils'
export * from './commonFunction'

// 其他檔案中使用
import { scrollToAnchor, getThemeClassName } from '@/utils'
```

## 📂 專案結構規範

### 元件分層

```
src/components/
├── common/              # 通用 UI 元件（可跨專案複用）
│   ├── Button/
│   ├── Card/
│   ├── Input/
│   ├── NavBar/
│   └── Footer/
├── features/            # 功能性元件（業務邏輯相關）
│   ├── Auth/
│   ├── Theme/
│   └── UserProfile/
└── layouts/             # 版面配置元件
    ├── Layout.tsx
    └── DashboardLayout.tsx
```

### 狀態管理結構

```
src/store/
├── store.ts            # Store 配置
├── hooks/              # Redux hooks
│   └── index.ts        # useAppDispatch, useAppSelector
├── slices/             # Redux slices
│   ├── authSlice.ts
│   └── asyncSlice.ts
└── types/              # Store 專用類型
    ├── index.ts
    └── stateType.ts
```

### 類型管理結構

```
src/types/
├── index.ts            # 全域類型統一導出
├── common.ts           # 通用類型（60+ 工具類型）
├── api.ts              # API 相關類型
└── enums/              # 全域 Enums
    ├── index.ts
    ├── status.ts
    └── theme.ts
```

### Hooks 組織

```
src/hooks/
├── index.ts            # Hooks 統一導出
├── useWindowSize.tsx   # 視窗尺寸
├── useClassName.ts     # 類名處理
└── usePage.tsx         # 頁面邏輯
```

### Utils 組織

```
src/utils/
├── index.ts            # 工具函數統一導出
├── browserUtils.ts     # 瀏覽器相關
├── commonFunction.ts   # 通用函數
└── variablesUtils.ts   # 變數處理
```

## 🎨 樣式規範

### SCSS Modules

```scss
// ✅ 元件專用樣式使用 CSS Variables
.button {
  background: var(--color-primary);
  color: var(--color-on-primary);
  padding: $spacing-md;
  
  &:hover {
    background: var(--color-primary-hover);
  }
}
```

### 全域樣式

```scss
// ✅ 使用 SCSS Variables 定義主題
@use "variables" as *;
@use "mixins" as *;

:root {
  --color-primary: #{$primary-light};
}

.dark {
  --color-primary: #{$primary-dark};
}
```

## 📦 Barrel Exports 最佳實踐

### 何時使用

✅ **應該使用**：
- `src/types/` - 類型定義
- `src/utils/` - 工具函數
- `src/hooks/` - Custom Hooks
- `src/store/hooks/` - Redux Hooks

❌ **不應該使用**：
- Next.js `pages/` 資料夾
- 包含副作用的模組
- 體積龐大的模組（會影響 tree-shaking）

### 範例

```typescript
// src/types/index.ts
export * from './common'
export * from './api'
export * from './enums'

// 使用時
import type { ID, ApiResponse, PaginationParams } from '@/types'
import { ApiStatus, UserRole } from '@/types'
```

## 🔍 TypeScript 設定

### Path Aliases

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/types/*": ["./src/types/*"],
      "@/store/*": ["./src/store/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  }
}
```

### 建議的 tsconfig 設定

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## 🎯 類型定義規範

### Interface vs Type vs Enum

**使用 Interface**：
```typescript
// ✅ 物件結構、可擴展的類型
export interface User {
  id: number
  name: string
  email: string
}

export interface AdminUser extends User {
  permissions: string[]
}
```

**使用 Type**：
```typescript
// ✅ Union types、交集類型
export type Status = 'pending' | 'active' | 'inactive'
export type ID = string | number

// ✅ 工具類型
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
```

**使用 Enum**：
```typescript
// ✅ 固定的、有限的選項集合
export enum ApiStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}
```

## 📋 代碼風格規範

### ESLint + Prettier

專案已配置：
- `.eslintrc.json` - ESLint 規則
- `.prettierrc.json` - Prettier 格式化規則

### 命名慣例

- **變數/函數**: `camelCase`
- **類別/介面/類型**: `PascalCase`
- **常數**: `UPPER_SNAKE_CASE` 或 `camelCase`
- **私有屬性**: `_prefixedCamelCase`（如需要）
- **檔案名稱**: 見上方「檔案命名規範」

### 註解規範

```typescript
/**
 * 函數描述
 * @param id - 參數描述
 * @returns 返回值描述
 */
export function getUserById(id: number): User {
  // 實作
}
```

## 🚀 開發工作流程

### 創建新功能的步驟

1. **規劃檔案結構**
   - 確定是 common、features 還是 layouts
   - 準備類型定義

2. **創建類型檔案** (`.ts`)
   - 先定義 interface/type
   - 如需要，加入 `src/types/`

3. **實作元件** (`.tsx`)
   - 使用 named export
   - 添加適當的類型註解

4. **樣式檔案** (`.module.scss`)
   - 使用 CSS Variables
   - 遵循 BEM 或類似命名規範

5. **測試與優化**
   - 檢查 TypeScript 錯誤
   - 確認 ESLint/Prettier 通過

## 📚 參考文檔

- [README.md](./README.md) - 專案總覽與快速開始
- [THEME_GUIDE.md](./THEME_GUIDE.md) - 主題系統完整指南
- [.eslintrc.json](./.eslintrc.json) - ESLint 設定
- [.prettierrc.json](./.prettierrc.json) - Prettier 設定

## ✅ 檢查清單

### 新增檔案時

- [ ] 檔案名稱符合規範（.ts vs .tsx）
- [ ] 使用正確的 export 方式（named export）
- [ ] 類型定義完整
- [ ] 添加到對應的 index.ts（如適用）
- [ ] 路徑使用 `@/` alias
- [ ] 通過 ESLint 檢查
- [ ] 通過 Prettier 格式化

### Code Review 時

- [ ] 命名清晰且一致
- [ ] 類型安全（無 `any`）
- [ ] 適當的註解
- [ ] 遵循專案結構
- [ ] 樣式使用 CSS Variables
- [ ] 無 console.log 殘留

---

**最後更新**: 2025-11-26
**維護者**: Bobo100
