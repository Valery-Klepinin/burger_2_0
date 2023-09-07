import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Product } from './types/types';
import { useAppDispatch } from '../../store';
import { addBasket, removeProduct } from './productsSlice';

function ProductItem({ product }: { product: Product }): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.authUser);

  return (
    <div className="products__item">
      <h4>{product.title}</h4>
      <img src={product.img} alt="product" />
      <div className="products__btn-container">
    {user && user.isAdmin && (
        <button
          onClick={() => dispatch(removeProduct(product.id))}
          type="button"
        >
          Удалить
        </button>
        )}
        {/* <button
          onClick={() => dispatch(addBasket(product.id))}
          type="button"
        >
          В корзину
        </button> */}
        <Link className="products__link-info" to={`/products/${product.id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
