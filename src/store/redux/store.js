import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice';
import searchReducer from './search/searchSlice';
export default configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer
  },
})