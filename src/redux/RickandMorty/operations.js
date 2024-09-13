import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGetCharacter = createAsyncThunk(
  'character/fetchGetCharacter',
  async (page, thunkAPI) => {
    const BASE_URL = 'https://rickandmortyapi.com/api';
    const END_POINT = `/character?page=${page}`;
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.get(url);
      const limitedResults = response.data.results.slice(0, 18);
      return { ...response.data, results: limitedResults };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchGetLocation = createAsyncThunk(
  'location/fetchGetLocation',
  async (page, thunkAPI) => {
    const BASE_URL = 'https://rickandmortyapi.com/api';
    const END_POINT = `/location?page=${page}`;
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.get(url);
      const limitedResults = response.data.results.slice(0, 18);
      return { ...response.data, results: limitedResults };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchGetEpisode = createAsyncThunk(
  'episode/fetchGetEpisode',
  async (page, thunkAPI) => {
    const BASE_URL = 'https://rickandmortyapi.com/api';
    const END_POINT = `/episode?page=${page}`;
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.get(url);
      const limitedResults = response.data.results.slice(0, 12);
      return { ...response.data, results: limitedResults };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
