import { configureStore } from '@reduxjs/toolkit'
import activeReducer from './slices/activeSlice';
import activechatreducer from './slices/activechatSlice';

export default configureStore({
  reducer: {
    active : activeReducer,
    activechat: activechatreducer,
  },
})