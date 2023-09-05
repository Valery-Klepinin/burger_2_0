export type Product = {
  id: number;
  title: string;
  description: string;
  img: string;
  price: string;
  weight: string;
  user_id?: number;
};

export type ProductWithoutId = Omit<Product, 'id'>;

export type ProductId = Product['id'];