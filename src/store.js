import { configureStore } from '@reduxjs/toolkit';
import RichardMortyReducer from './redux/RickandMorty/slice';
import authReducer from '../src/redux/auth/slice';

export const store = configureStore({
  reducer: {
    operations: RichardMortyReducer,
    auth: authReducer,
  },
});
