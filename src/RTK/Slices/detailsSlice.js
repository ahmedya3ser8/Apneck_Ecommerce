import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: localStorage.getItem('details') !== null ? JSON.parse(localStorage.getItem('details')) : [],
}

const detailsSlice = createSlice({
  initialState,
  name: 'detailsSlice',
  reducers: {
    viewDetails: (state, action) => {
      state.details = action.payload
      localStorage.setItem('details', JSON.stringify(action.payload));
    }
  }
})

export const { viewDetails } = detailsSlice.actions;
export default detailsSlice.reducer;