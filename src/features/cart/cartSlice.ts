import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Products';

// Define the initial state for the cart
const initialState = {
  items: [] as Product[],
  totalPrice: 0,  // Initialize totalPrice as 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add a product to the cart
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      // Recalculate the total price after adding a product
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity, 0
      );
    },

    // Action to remove a product from the cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);

      // Recalculate the total price after removing a product
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity, 0
      );
    },
  },
});

// Export actions and reducer
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
