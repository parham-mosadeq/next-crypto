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
      // localStorage.setItem('faves', JSON.stringify(state.faves));
    },

    removeFave: (state, action) => {
      const filter = state.faves.filter(
        (fave) => fave.id !== action.payload.id
      );
      // state.faves.filter((fave) => fave.id !== action.payload.id);
      // localStorage.setItem('faves', JSON.stringify(filter));
      return filter;
    },

    handleNextPage: (state) => {
      console.log(123);
      state.currentPage += 1;
    },

    handlePrevPage: (state) => {
      state.currentPage = 1;
    },
  },
});

export const { addToFaves, removeFave, handlePrevPage, handleNextPage } =
  faveSlice.actions;
export default faveSlice.reducer;
