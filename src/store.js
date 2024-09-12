import { configureStore } from '@reduxjs/toolkit';
import RichardMortyReducer from './redux/RickandMorty/slice';
export const store = configureStore({
  reducer: {
    operations: RichardMortyReducer,
  },
});
