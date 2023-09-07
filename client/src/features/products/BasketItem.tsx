import React from 'react';
import { Product } from './types/types';
// import { removeProduct } from './productsSlice';
// import { useAppDispatch } from '../../store';

function BasketItem({ product }: { product: Product }): JSX.Element {
//   const dispatch = useAppDispatch();

  return (
    <div className="products__item">
      <h4>{product.title}</h4>
      <img src={product.img} alt="product" />
      <p>{product.price}</p>
      <p>{product.weight}</p>
      {/* <button onClick={() => dispatch(removeProduct(product.id))} type="button">
        Удалить
      </button> */}
    </div>
  );
}

export default BasketItem;
