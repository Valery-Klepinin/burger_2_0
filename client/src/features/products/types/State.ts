import { Order, ProdOrder, Product } from './types';

export type State = {
  products: Product[];
  basket: Product[];
  error: undefined | string;
};
