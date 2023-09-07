import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/State';
import { ProductId, ProductWithoutId } from './types/types';
import * as api from '../../App/api';

const initialState: State = {
  products: [],
  basket: [],
  error: undefined,
};

export const loadProducts = createAsyncThunk('products/load', () =>
  api.fetchProducts()
);

export const addProduct = createAsyncThunk(
  'products/add',
  (product: ProductWithoutId) => api.fetchAddProduct(product)
);

export const removeProduct = createAsyncThunk(
  'products/remove',
  (id: ProductId) => api.fetchDeleteProduct(id)
);

export const addBasket = createAsyncThunk('products/basket', (id: ProductId) =>
  api.fetchBasket(id, 1)
);
export const loadBasket = createAsyncThunk('products/loadbasket', () =>
  api.fetchLoadBasket()
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addBasket.fulfilled, (state, action) => {
        // if (state.basket) {
          state.basket.push(action.payload);
        // }
      })
      .addCase(addBasket.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadBasket.fulfilled, (state, action) => {
        state.basket = action.payload;
        console.log(action.payload);
      })
      .addCase(loadBasket.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(removeProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export default productsSlice.reducer;
