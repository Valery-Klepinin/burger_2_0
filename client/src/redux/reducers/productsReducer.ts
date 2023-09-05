import { Action } from '../../features/products/types/Action';
import { State } from '../../features/products/types/State';

const initialState: State = {
  products: [],
  error: undefined,
};

const productsReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'products/load':
      return {
        ...state,
        products: action.payload,
      };
    case 'products/delete':
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };
    case 'products/add':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'products/update':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? { ...product, ...action.payload } : product
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
