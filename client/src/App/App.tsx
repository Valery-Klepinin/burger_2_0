/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from '../features/products/ProductsPage';
import UsersPage from '../features/users/UsersPage';
import NavBar from '../features/navbar/NavBar';
import ProductPage from '../features/products/ProductPage';
import '../features/products/styles/style.scss';
import MainPage from '../features/main/MainPage';
import Error from '../features/404/404';
import { useAppDispatch } from '../redux/store';
import * as api from './api';
import RegistrationFormPage from '../features/auth/RegistrationFormPage';
import AuthorizationFormPage from '../features/auth/AuthorizationFormPage';
import { loadProducts } from '../features/products/productsSlice';
import { checkUser } from '../features/auth/authSlice';
import { usersLoad } from '../features/users/usersSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  // const loadProducts = async (): Promise<void> => {
  //   const data = await api.fetchProducts();
  //   dispatch({ type: 'products/load', payload: data });
  // };

  // const loadUsers = async (): Promise<void> => {
  //   const data = await api.fetchUsers();
  //   dispatch({ type: 'users/load', payload: data });
  // };

  // const checkUser = async (): Promise<void> => {
  //   const data = await api.fetchCheckUser();
  //   if (data) {
  //     dispatch({ type: 'auth/check', payload: data });
  //   }
  // };

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(usersLoad());
    dispatch(checkUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          {/* <Route path="/" element={<Callback />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/sign-up" element={<RegistrationFormPage />} />
          <Route path="/sign-in" element={<AuthorizationFormPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
