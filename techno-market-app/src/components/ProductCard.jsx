import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Добавляем товар с количеством по умолчанию
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="product-card">
      <img
        src={product.image || '/placeholder.png'}
        alt={product.name}
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price}$</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        🛒 Добавить в корзину
      </button>
    </div>
  );
};

export default ProductCard;
