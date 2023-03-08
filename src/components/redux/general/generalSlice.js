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
      return state.isOpen;
    },

    homeSearchInput: (state, action) => {},
  },
});

export const { toggleMenu } = generalSlice.actions;

export default generalSlice.reducer;
