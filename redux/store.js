import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; 
import dataSlice from './dataSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataSlice,
  },
});