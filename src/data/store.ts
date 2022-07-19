import { configureStore } from '@reduxjs/toolkit'
import { catApi } from './cat-api/cat.api'

export const store = configureStore({
  reducer: {
    [catApi.reducerPath]: catApi.reducer,
  },
})
