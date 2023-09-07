import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Order } from './types/types';

function BasketPage(): JSX.Element {
  const basket: Order = useSelector(
    (store: RootState) => store.products.basket
  );

  return <div>1</div>;
}

export default BasketPage;
