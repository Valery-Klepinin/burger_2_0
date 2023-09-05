import React, { useContext, useState } from 'react';
import ProductItem from './ProductItem';
import './styles/style.scss';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import FormAddProduct from './FormAddProduct';

function ProductsPage(): JSX.Element {
  const [filter, setFilter] = useState(0);
  const products = useSelector((store: RootState) => store.products.products);

  const filteredProducts = products.filter((product) =>
    filter !== 0 ? product.user_id === filter : true
  );

  return (
    <>
      <h1 className="products__container">Бургеры</h1>
      <FormAddProduct />
      <div className="products__container">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsPage;
