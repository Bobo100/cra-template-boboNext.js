/**
 * API 相關類型定義
 * 統一管理所有 API 請求/回應的類型
 */

import type { ID, Timestamp } from './common'

// ============================================
// API 狀態
// ============================================

/**
 * API 請求狀態
 */
export enum ApiStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

/**
 * HTTP Methods
 */
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

// ============================================
// API 請求/回應
// ============================================

/**
 * API 錯誤類型
 */
export interface ApiError {
  code: string
  message: string
  details?: Record<string, any>
  statusCode?: number
}

/**
 * API 請求配置
 */
export interface ApiRequestConfig {
  method: HttpMethod
  url: string
  params?: Record<string, any>
  data?: any
  headers?: Record<string, string>
  timeout?: number
}

/**
 * 非同步操作狀態（用於 Redux Slice）
 */
export interface AsyncState<T = any> {
  data: T | null
  status: ApiStatus
  error: ApiError | null
  lastUpdated?: Timestamp
}

// ============================================
// 範例：Todo API
// ============================================

/**
 * Todo 項目
 */
export interface Todo {
  userId: ID
  id: ID
  title: string
  completed: boolean
}

/**
 * Todo 列表回應
 */
export interface TodoListResponse {
  todos: Todo[]
  total: number
}

/**
 * Todo 創建請求
 */
export interface CreateTodoRequest {
  title: string
  completed?: boolean
}

/**
 * Todo 更新請求
 */
export interface UpdateTodoRequest {
  title?: string
  completed?: boolean
}
