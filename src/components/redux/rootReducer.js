import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { generalSlice } from './general/generalSlice';

export const store = configureStore({
  reducer: {
    generalState: generalSlice.reducer,
  },
  middleware: [],
});
