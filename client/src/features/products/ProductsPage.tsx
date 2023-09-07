import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import './styles/style.scss';
import { RootState } from '../../store';
import FormAddProduct from './FormAddProduct';

function ProductsPage(): JSX.Element {
  const [filter] = useState(0);
  const products = useSelector((store: RootState) => store.products.products);
  const user = useSelector((store: RootState) => store.auth.authUser);

  const filteredProducts = products.filter((product) =>
    filter !== 0 ? product.user_id === filter : true
  );

  return (
    <>
      <h1 className="products__container">Бургеры</h1>
      {user && user.isAdmin && <FormAddProduct />}
      <div className="products__container">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsPage;
