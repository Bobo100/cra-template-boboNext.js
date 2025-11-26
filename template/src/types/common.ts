/**
 * 通用類型定義
 * 放置跨專案、跨模組共用的類型
 */

// ============================================
// 基礎類型
// ============================================

/**
 * ID 類型（可以是 string 或 number）
 */
export type ID = string | number

/**
 * 時間戳類型
 */
export type Timestamp = number | string | Date

/**
 * 可選的值
 */
export type Maybe<T> = T | null | undefined

/**
 * 非空陣列
 */
export type NonEmptyArray<T> = [T, ...T[]]

// ============================================
// 通用介面
// ============================================

/**
 * 分頁參數
 */
export interface PaginationParams {
  page: number
  pageSize: number
  total?: number
}

/**
 * 分頁回應
 */
export interface PaginationResponse<T> {
  data: T[]
  pagination: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}

/**
 * API 回應格式
 */
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
  timestamp: Timestamp
}

/**
 * 載入狀態
 */
export interface LoadingState {
  isLoading: boolean
  error: string | null
}

/**
 * 表單欄位通用類型
 */
export interface FormField<T = any> {
  value: T
  error?: string
  touched?: boolean
  disabled?: boolean
}

// ============================================
// 工具類型
// ============================================

/**
 * 讓所有屬性都變成可選的（深層）
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

/**
 * 讓特定屬性必填
 */
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

/**
 * 讓特定屬性可選
 */
export type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
