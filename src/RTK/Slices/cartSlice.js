import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) : [],
}

const cartSlice = createSlice({
  initialState,
  name: 'cartSlice',
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.cartItems.find(product => product.id === action.payload.id);
      if (findProduct) {
        findProduct.count += 1;
        toast.info('increase product Quantity', {
          position: 'bottom-left',
          autoClose: 2000,
        });
      } else {
        const productClone = {...action.payload, count: 1 };
        state.cartItems.push(productClone);
        toast.success(`${action.payload.title} added to cart`, {
          position: 'bottom-left',
          autoClose: 2000,
        });
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const removeProduct = state.cartItems.filter(product => product.id !== action.payload.id)
      state.cartItems = removeProduct;
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
      toast.warning('you remove item', {
        position: 'bottom-left',
        autoClose: 2000,
      });
    },
    removeItem: (state, action) => {
      let productCount = state.cartItems.find(product => product.id === action.payload.id);
      if(productCount.count != 0 ) {
        productCount.count -= 1;
      }
      toast.info('decrease product Quantity', {
        position: 'bottom-left',
        autoClose: 2000,
      });
    },
    clearCart: (state, action) => {
      state.cartItems = []
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
      toast.warning('you removed all items', {
        position: 'bottom-left',
        autoClose: 2000,
      });
    }
  }
})

export const {addToCart, removeFromCart, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;