import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
}

export const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    logeduser: (state, action) => {
      state.value= action.payload
    }
  },
})

export const { logeduser } = activeSlice.actions

export default activeSlice.reducer