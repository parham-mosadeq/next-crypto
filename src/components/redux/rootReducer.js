import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { toggleMenu } from './general/generalSlice';

const rootReducer = combineReducers({ toggleMenu });

export const store = configureStore({
  reducer: {
    toggleMenu
  },
  middleware: [],
});
