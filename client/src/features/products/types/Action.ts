import { Product, ProductId } from './types';

export type Action =
  | { type: 'products/load'; payload: Product[] }
  | { type: 'products/delete'; payload: ProductId }
  | { type: 'products/add'; payload: Product }
  | { type: 'products/update'; payload: Product };
