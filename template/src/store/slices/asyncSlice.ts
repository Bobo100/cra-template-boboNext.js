/**
 * Async Slice - 非同步資料管理範例
 * 展示如何使用 createAsyncThunk 處理 API 請求
 */

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import { asyncInitialState } from "../types/stateType"
import type { Todo } from "@/types/api"
import { ApiStatus } from "@/types/api"

// ============================================
// Async Thunks
// ============================================

/**
 * 取得單一 Todo 資料
 * 展示基本的 API 請求處理
 */
export const fetchTodoById = createAsyncThunk<Todo, number>(
  'async/fetchTodoById',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch todo')
      }
      
      const data = await response.json()
      return data as Todo
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
    }
  }
)

// ============================================
// Slice Definition
// ============================================

export const asyncSlice = createSlice({
  name: 'async',
  initialState: asyncInitialState,
  
  // 同步 reducers
  reducers: {
    /**
     * 重置狀態
     */
    resetAsyncState: (state) => {
      state.data = null
      state.status = ApiStatus.IDLE
      state.error = null
    },
    
    /**
     * 手動設定資料（用於測試或特殊情況）
     */
    setTodoData: (state, action: PayloadAction<Todo>) => {
      state.data = action.payload
      state.status = ApiStatus.SUCCESS
      state.error = null
    },
  },
  
  // 非同步 reducers（處理 thunk 的狀態）
  extraReducers: (builder) => {
    builder
      // fetchTodoById
      .addCase(fetchTodoById.pending, (state) => {
        state.status = ApiStatus.LOADING
        state.error = null
      })
      .addCase(fetchTodoById.fulfilled, (state, action) => {
        state.status = ApiStatus.SUCCESS
        state.data = action.payload
        state.error = null
      })
      .addCase(fetchTodoById.rejected, (state, action) => {
        state.status = ApiStatus.ERROR
        state.error = action.payload as string || 'Failed to fetch todo'
      })
  }
})

// ============================================
// Actions Export
// ============================================

export const { resetAsyncState, setTodoData } = asyncSlice.actions

// ============================================
// Selectors（用於取得 state 的資料）
// ============================================

/**
 * 取得 Todo 資料
 */
export const selectTodoData = (state: RootState) => state.async.data

/**
 * 取得載入狀態
 */
export const selectAsyncStatus = (state: RootState) => state.async.status

/**
 * 取得錯誤訊息
 */
export const selectAsyncError = (state: RootState) => state.async.error

/**
 * 判斷是否正在載入
 */
export const selectIsLoading = (state: RootState) => 
  state.async.status === ApiStatus.LOADING

/**
 * 判斷是否有錯誤
 */
export const selectHasError = (state: RootState) => 
  state.async.status === ApiStatus.ERROR

// ============================================
// Reducer Export
// ============================================

export default asyncSlice.reducer