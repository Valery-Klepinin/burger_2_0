import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { fetchUpdateProduct } from '../../App/api';
import { addBasket } from './productsSlice';

function ProductPage(): JSX.Element {
  const [title, setTitle] = useState('');
  const [discription, setDiscription] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');

  const products = useSelector((store: RootState) => store.products.products);
  const user = useSelector((store: RootState) => store.auth.authUser);

  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  let ourProduct;
  if (productId) {
    ourProduct = products.find((product) => product.id === +productId)!!;
  }

  const handleUpdateProduct = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (productId) {
      const data = await fetchUpdateProduct(
        { title, discription, img, price, weight },
        +productId
      );
      dispatch({ type: 'products/update', payload: data });
    }
  };
  const onHandleAddBusket: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (productId) {
      console.log(productId);

      dispatch(addBasket(+productId));
    }
  };

  return (
    <>
      {user && user.isAdmin && (
        <div className="form__container">
          <h2>Форма изменения</h2>
          <form className="form__body" onSubmit={handleUpdateProduct}>
            <label htmlFor="">
              Название продукта
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
            </label>
            <label htmlFor="">
              Описание продукта
              <input
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
                type="text"
              />
            </label>
            <label htmlFor="">
              Картинка продукта
              <input
                value={img}
                onChange={(e) => setImg(e.target.value)}
                type="text"
              />
            </label>
            <label htmlFor="">
              Цена продукта
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
              />
            </label>
            <label htmlFor="">
              Вес продукта
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                type="text"
              />
            </label>
            <button type="submit">Обновить продукт</button>
          </form>
        </div>
      )}
      <div className="products__container">
        <div className="product__container">
          {ourProduct ? (
            <>
              <h2>{ourProduct.title}</h2>
              <img src={ourProduct.img} alt="poster" />
              <p>{ourProduct.discription}</p>
              <p>{ourProduct.price}</p>
              <p>{ourProduct.weight}</p>
            </>
          ) : (
            <p>Такого продукта нет</p>
          )}
        </div>
        <button type="button" onClick={onHandleAddBusket}>
          В корзину
        </button>
        <button type="button" onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </>
  );
}

export default ProductPage;
