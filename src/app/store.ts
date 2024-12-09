import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cart reducer to store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;


