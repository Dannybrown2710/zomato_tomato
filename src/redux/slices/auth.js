import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: true,
    user:{
        role: 'Admin'
    }
  },
  reducers: {
    login: (state, action) => {

      state.isAuthenticated = action.payload.isAuthenticated
    },
  },
})

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions

export default authSlice.reducer