import { createSlice } from '@reduxjs/toolkit';

import { fetchUserSignup, fetchUserLogout, fetchUserLogin } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  LogedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = (state, action) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.user = state.isLoading = false;
        state.LogedIn = true;
        state.error = null;
      })

      .addCase(fetchUserSignup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.LogedIn = true;
        state.error = null;
      })

      .addCase(fetchUserLogout.fulfilled, (state, action) => {
        state.user = {
          name: '',
          email: '',
        };
        state.token = null;
        state.user = state.isLoading = false;
        state.LogedIn = false;
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
