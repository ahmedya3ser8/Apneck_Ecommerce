import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: 'cartSlice',
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(product => product.id === action.payload.id);
      if (findProduct) {
        findProduct.count += 1;
      } else {
        const productClone = {...action.payload, count: 1 };
        state.push(productClone);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(product => product.id !== action.payload.id)
    },
    clearCart: (state, action) => {
      return []
    }
  }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;