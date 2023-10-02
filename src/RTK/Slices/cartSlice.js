import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const cartSlice = createSlice({
  initialState: [],
  name: 'cartSlice',
  reducers: {
    addToCart: (state, action) => {
      // localStorage.setItem('cart-product', JSON.stringify(state))
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
    removeItem: (state, action) => {
      let productCount = state.find(product => product.id === action.payload.id);
      if(productCount.count != 0 ) {
        productCount.count -= 1;
      }
    },
    clearCart: (state, action) => {
      return []
    }
  }
})

export const {addToCart, removeFromCart, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;