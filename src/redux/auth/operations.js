import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const saveToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const resetHeaders = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const fetchUserSignup = createAsyncThunk(
  'name/fetchUserSignup',
  async (userData, thunkAPI) => {
    const BASE_URL = 'https://connections-api.goit.global';
    const END_POINT = '/users/signup';
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.post(url, userData);
      saveToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchUserLogin = createAsyncThunk(
  'name/fetchUserLogin',
  async (userData, thunkAPI) => {
    const BASE_URL = 'https://connections-api.goit.global';
    const END_POINT = '/users/login';
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.post(url, userData);
      saveToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchUserLogout = createAsyncThunk(
  'name/fetchUserLogout',
  async (_, thunkAPI) => {
    const BASE_URL = 'https://connections-api.goit.global';
    const END_POINT = '/users/logout';
    const url = BASE_URL + END_POINT;

    try {
      const response = await axios.post(url);
      resetHeaders();
      return response.data.token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
