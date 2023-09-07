import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductItem from './ProductItem';
import { Order, ProdOrder } from './types/types';
import { log } from 'console';

function BasketPage(): JSX.Element {
  const basket: Order = useSelector(
    (store: RootState) => store.products.basket
  );
  console.log(basket);

  return (
    <>
      <div className="products__container">{basket.id}</div>

      {/* {basket.ProdOrders.length > 0 &&
        basket.ProdOrders.map((prod: ProdOrder) => prod.count)} */}
    </>
  );
}

export default BasketPage;
