import { createSlice } from "@reduxjs/toolkit";
import productsData from '../../db/products.json'

const initialState = {
  data: productsData,
}

const productsSlice = createSlice({
  initialState,
  name: 'productSlice',
  reducers: {},
})

export const {} = productsSlice.actions;
export default productsSlice.reducer;