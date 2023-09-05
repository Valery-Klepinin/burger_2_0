/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productsSlice from '../features/products/productsSlice';
import authSlice from '../features/auth/authSlice';
import usersSlice from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
    users: usersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
