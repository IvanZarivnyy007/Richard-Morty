import { createSlice } from '@reduxjs/toolkit';
import {
  fetchGetCharacter,
  fetchGetLocation,
  fetchGetEpisode,
} from '../RickandMorty/operations.js';

const initialState = {
  array: [],
  isLoading: false,
  error: null,
};

const handlePending = (state, { payload }) => {
  state.loading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

export const RichardMortySlice = createSlice({
  name: 'operations',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetCharacter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchGetLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchGetEpisode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchGetEpisode.pending, handlePending)
      .addCase(fetchGetEpisode.rejected, handleRejected)

      .addCase(fetchGetLocation.pending, handlePending)
      .addCase(fetchGetLocation.rejected, handleRejected)

      .addCase(fetchGetCharacter.pending, handlePending)
      .addCase(fetchGetCharacter.rejected, handleRejected);
  },
});

export default RichardMortySlice.reducer;
