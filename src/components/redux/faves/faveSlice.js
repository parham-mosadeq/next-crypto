import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  faves: [],
};

const faveSlice = createSlice({
  name: 'fave-slice',
  initialState,
  reducers: {
    addToFaves: (state, action) => {
      state.faves.push(action.payload);
      localStorage.setItem('faves', JSON.stringify(state.faves));
    },
  },

  removeFave: (state, action) => {},
});

export const { addToFaves, removeFave } = faveSlice.actions;
export default faveSlice.reducer;
