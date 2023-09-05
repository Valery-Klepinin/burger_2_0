/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  auth: authReducer,
});

export default rootReducer;
