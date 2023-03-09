import { createSlice, current } from '@reduxjs/toolkit';

const { log } = console;

const initialState = {
  isOpen: false,
  homeSearch: '',
};

export const generalSlice = createSlice({
  name: 'general-state',
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      if (state.isOpen) {
        state.isOpen = false;
      } else {
        state.isOpen = true;
      }
    },

    homeSearchInput: (state, action) => {},
  },
});

export const { toggleMenu } = generalSlice.actions;
