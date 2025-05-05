import React from 'react';

const ProductPage = ({ product, onAddToCart }) => {
  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}₽</p>
      <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
    </div>
  );
};

export default ProductPage;
