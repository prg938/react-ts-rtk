
import {configureStore} from '@reduxjs/toolkit'
import {reducer as cakeReducer} from './slices/cake'
import {reducer as usersReducer} from './slices/users'

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    users: usersReducer
  }
})

export type TDispatch = typeof store.dispatch
export type TState = ReturnType<typeof store.getState>
export default store