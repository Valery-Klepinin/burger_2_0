import { UserId } from '../../users/types/types';

export type Product = {
  id: number;
  title: string;
  discription: string;
  img: string;
  price: string;
  weight: string;
  user_id?: number;
};

export type ProductWithoutId = Omit<Product, 'id'>;

export type ProductId = Product['id'];

export type Order = {
  id: number;
  user_id: UserId;
  status: boolean;
  ProdOrders: ProdOrder[];
};

export type OrderWithoutId = Omit<Order, 'id'>;
export type OrderId = Order['id'];

export type ProdOrder = {
  id: number;
  order_id: OrderId;
  product_id: ProductId;
  count: number;
};

export type ProdOrderWithoutId = Omit<ProdOrder, 'id'>;
export type ProdOrderId = ProdOrder['id'];
