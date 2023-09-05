import { AuthUser } from '../features/auth/types/types';
import { Product, ProductId, ProductWithoutId } from '../features/products/types/types';
import { User } from '../features/users/types/types';

/* eslint-disable import/prefer-default-export */
export const fetchDeleteProduct = async (id: ProductId): Promise<ProductId> => {
  const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
  const data = await res.json();
  return data;
};

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('/api/products');
  return res.json();
};

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('/api/users');
  return res.json();
};

export const fetchAddProduct = async (product: ProductWithoutId): Promise<Product> => {
  const res = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return res.json();
};

export const fetchUpdateProduct = async (
  newProduct: ProductWithoutId,
  id: ProductId
): Promise<Product> => {
  const res = await fetch(`/api/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  });
  return res.json();
};

export const fetchSignUp = async (user: AuthUser): Promise<AuthUser> => {
  const res = await fetch('/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return res.json();
};
export const fetchCheckUser = async (): Promise<AuthUser> => {
  const res = await fetch('/api/auth/check');
  return res.json();
};

export const fetchSignIn = async (user:AuthUser): Promise<AuthUser> => {
  const res = await fetch('/api/auth/sign-in' ,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),

  })
  return res.json();
};

export const fetchLogOut = async (): Promise<{ message: string }> => {
  const res = await fetch('/api/auth/logout');{}
  return res.json();
};
