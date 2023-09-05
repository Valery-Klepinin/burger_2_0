import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from './types/types';
import { useAppDispatch } from '../../redux/store';
import { removeProduct } from './productsSlice';

function ProductItem({ product }: { product: Product }): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="products__item">
      <h4>{product.title}</h4>
      <img src={product.img} alt="product" />
      <p>{product.description}</p>
      <div className="products__btn-container">
        <button onClick={() => dispatch(removeProduct(product.id))} type="button">
          Удалить
        </button>
        <Link className="products__link-info" to={`/products/${product.id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
