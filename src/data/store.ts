import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { catApi } from './cat-api/cat.api'

export const store = configureStore({
  reducer: {
    [catApi.reducerPath]: catApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catApi.middleware),
})
