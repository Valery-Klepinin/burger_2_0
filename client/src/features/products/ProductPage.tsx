import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchUpdateProduct } from '../../App/api';

function ProductPage(): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');

  const products = useSelector((store: RootState) => store.products.products);

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
        { title, description, img, price, weight },
        +productId
      );
      dispatch({ type: 'products/update', payload: data });
    }
  };

  return (
    <>
      <h2>Product page</h2>
      <form onSubmit={handleUpdateProduct}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="text"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
        />
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="text"
        />
        <button type="submit">Обновить продукт</button>
      </form>
      <div className="products__container">
        <div className="product__container">
          {ourProduct ? (
            <>
              <h2>{ourProduct.title}</h2>
              <img src={ourProduct.img} alt="poster" />
              <p>{ourProduct.description}</p>
              <p>{ourProduct.price}</p>
              <p>{ourProduct.weight}</p>
            </>
          ) : (
            <p>Такого продукта нет</p>
          )}
        </div>
        <button type="button" onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </>
  );
}

export default ProductPage;
