import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  faves: [],
  currentPage: 1,
  dataPerPage: 10,
};

const faveSlice = createSlice({
  name: 'fave-slice',
  initialState,
  reducers: {
    addToFaves: (state, action) => {
      state.faves.push(action.payload);
      console.log(current(state));
      localStorage.setItem('faves', JSON.stringify(state.faves));
    },

    removeFave: (state, action) => {
      const filter = state.faves.filter(
        (fave) => fave.id !== action.payload.id
      );
      state.faves.filter((fave) => fave.id !== action.payload.id);
      localStorage.setItem('faves', JSON.stringify(filter));
      return filter;
    },
  },
});

export const { addToFaves, removeFave } = faveSlice.actions;
export default faveSlice.reducer;
