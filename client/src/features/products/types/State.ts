import { Order, ProdOrder, Product } from './types';

export type State = {
  products: Product[];
  basket: Order | any;
  error: undefined | string;
};
