import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Order, ProdOrder } from './types/types';
import BasketItem from './BasketItem';

function BasketPage(): JSX.Element {
  const basket = useSelector((store: RootState) => store.products.basket);
  console.log(basket);

  return (
    <div>
      {basket.map((product) => (
        <BasketItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default BasketPage;
