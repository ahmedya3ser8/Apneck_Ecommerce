import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
  initialState: [],
  name: 'detailsSlice',
  reducers: {
    viewDetails: (state, action) => {
      return action.payload
    }
  }
})

export const {viewDetails} = detailsSlice.actions;
export default detailsSlice.reducer;