import { Product } from './types';

export type State = {
  products: Product[];
  error: undefined | string;
};
