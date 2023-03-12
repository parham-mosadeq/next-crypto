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

    removeFave: (state, action) => {
      let faves;
      if (typeof window !== 'undefined') {
        faves = JSON.parse(localStorage.getItem('faves'));
      }

      const filter = faves.filter((fave) => fave.id !== action.payload.id);
      state.faves.filter((fave) => fave.id !== action.payload.id);
      localStorage.setItem('faves', JSON.stringify(filter));
    },
  },
});

export const { addToFaves, removeFave } = faveSlice.actions;
export default faveSlice.reducer;
