import React, { useState } from 'react';
// import { fetchAddProduct } from '../../App/api';
import { useAppDispatch } from '../../store';
import { addProduct } from './productsSlice';

function FormAddProduct(): JSX.Element {
  const [title, setTitle] = useState('');
  const [discription, setDiscription] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');

  const dispatch = useAppDispatch();

  const handleAddProduct = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    dispatch(addProduct({ title, discription, img, price, weight }));
  };

  return (
    <div className="form__container">
      <h2>Форма добавления</h2>
      <form className="form__body" onSubmit={handleAddProduct}>
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
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default FormAddProduct;
