import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { generalSlice } from './general/generalSlice';
import faveSlice from './faves/faveSlice';
export const store = configureStore({
  reducer: {
    // * Different ways to add reducer
    generalState: generalSlice.reducer,
    faveState: faveSlice,
  },
  middleware: [],
});
