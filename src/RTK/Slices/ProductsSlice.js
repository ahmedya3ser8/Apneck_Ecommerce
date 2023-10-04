import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('productSlice/fetchProducts', async () => {
  const res = await fetch('./src/db/products.json');
  const data = await res.json();
  return data;
})

const productsSlice = createSlice({
  initialState: [],
  name: 'productSlice',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export const {} = productsSlice.actions;
export default productsSlice.reducer;