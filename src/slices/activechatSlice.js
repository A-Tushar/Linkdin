import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const activechatSlice = createSlice({
  name: 'activechatSlice',
  initialState,
  reducers: {
    activechat: (state, action) => {
      state.value= action.payload;
    }
  },
})

export const { activechat } = activechatSlice.actions

export default activechatSlice.reducer