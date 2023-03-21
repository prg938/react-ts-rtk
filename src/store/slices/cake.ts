
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const {actions, reducer} = createSlice({
  name: 'cake',
  initialState: { count: 0 },
  reducers: {
    increase: state => {
      ++state.count
    },
    increaseBy: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload
    }
  }
})