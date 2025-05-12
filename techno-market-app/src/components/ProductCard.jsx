import React from 'react';
import { useCart } from '../context/CartContext';


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
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
      <p className="product-price">{product.price}грн</p>
      {product.description && (
        <p className="product-description">{product.description}</p>
      )}
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        🛒 Добавити в кошик
      </button>
    </div>
  );
};

export default ProductCard;
