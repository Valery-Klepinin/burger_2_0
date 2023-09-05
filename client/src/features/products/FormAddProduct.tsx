import React, { useState } from 'react';
import { fetchAddProduct } from '../../App/api';
import { useAppDispatch } from '../../redux/store';
import { addProduct } from './productsSlice';

function FormAddProduct(): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');

  const dispatch = useAppDispatch();

  const handleAddProduct = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    dispatch(addProduct({ title, description, img, price, weight }));
  };

  return (
    <div className="form__container">
      <h2>Form add product</h2>
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
        <button type="submit">Добавить продукт</button>
      </form>
    </div>
  );
}

export default FormAddProduct;
