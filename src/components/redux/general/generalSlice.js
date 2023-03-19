import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
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

    homeSearchInput: (state, action) => {
      state.homeSearch = action.payload;
    },
  },
});

export const { toggleMenu, setWidth, homeSearchInput } = generalSlice.actions;
