/**
 * Redux Store State 類型定義
 * 專門用於定義 Redux slice 的狀態結構
 */

import type { Todo } from '@/types/api'
import { ApiStatus } from '@/types/api'

// ============================================
// Async Slice State
// ============================================

/**
 * 非同步資料的狀態
 * 範例：從 API 取得 Todo 資料
 */
export interface AsyncState {
  data: Todo | null
  status: ApiStatus
  error: string | null
}

/**
 * Async State 初始值
 */
export const asyncInitialState: AsyncState = {
  data: null,
  status: ApiStatus.IDLE,
  error: null,
}

// ============================================
// 其他 Slice States（範例）
// ============================================

/**
 * 使用者狀態
 */
export interface UserState {
  currentUser: any | null
  isAuthenticated: boolean
  token: string | null
}

export const userInitialState: UserState = {
  currentUser: null,
  isAuthenticated: false,
  token: null,
}

/**
 * UI 狀態
 */
export interface UIState {
  isSidebarOpen: boolean
  isModalOpen: boolean
  notification: {
    message: string
    type: 'success' | 'error' | 'info' | 'warning'
  } | null
}

export const uiInitialState: UIState = {
  isSidebarOpen: false,
  isModalOpen: false,
  notification: null,
}