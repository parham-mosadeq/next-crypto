import { createSlice, current } from '@reduxjs/toolkit';

const { log } = console;

const initialState = {
  isOpen: false,
  innerWidth: '',
  homeSearch: '',
};

export const generalSlice = createSlice({
  name: 'general-state',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      if (state.isOpen) {
        state.isOpen = false;
      } else {
        state.isOpen = true;
      }
    },

    setWidth: (state) => {
      if (window !== 'undefined') state.innerWidth = window.innerWidth;
    },

    homeSearchInput: (state, action) => {
      state.homeSearch = action.payload;
    },
  },
});

export const { toggleMenu, setWidth, homeSearchInput } = generalSlice.actions;
