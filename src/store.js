import { configureStore } from '@reduxjs/toolkit'
import activeReducer from './slices/activeSlice'

export default configureStore({
  reducer: {
    active : activeReducer,
  },
})