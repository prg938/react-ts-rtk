
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'

type TState = {
  list: {id: number, name: string, email: string}[]
  loading: boolean
  error: null | string
}

export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async (url: string) => await (await fetch(url)).json()
)

export const {actions, reducer} = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    error: null
  } as TState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<TState['list']>) => {
      state.loading = false
      state.list = action.payload
      state.error = null
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.list = []
      state.error = action.error.message || null
    })
})