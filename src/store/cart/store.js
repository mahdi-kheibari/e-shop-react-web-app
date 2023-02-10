import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice';
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
})