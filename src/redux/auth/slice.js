import { createSlice } from '@reduxjs/toolkit';

import { fetchUserSignup, fetchUserLogout, fetchUserLogin } from './operations';

const handlePending = (state, action) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(fetchUserSignup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })

      .addCase(fetchUserLogout.fulfilled, (state) => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = null;
      })

      .addCase(fetchUserSignup.pending, handlePending)
      .addCase(fetchUserSignup.rejected, handleRejected)
      .addCase(fetchUserLogin.pending, handlePending)
      .addCase(fetchUserLogin.rejected, handleRejected)
      .addCase(fetchUserLogout.pending, handlePending)
      .addCase(fetchUserLogout.rejected, handleRejected);
  },
});

export default authSlice.reducer;
