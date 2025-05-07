import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ product }) => {
  const { removeFromCart, removeOneFromCart, updateQuantity } = useCart();

  // Уменьшение количества на 1
  const handleRemoveOne = () => {
    removeOneFromCart(product.id);
  };

  // Увеличение количества на 1
  const handleIncrease = () => {
    updateQuantity(product.id, product.quantity + 1);
  };

  return (
    <div className="cart-item">
      <img src={product.image || '/placeholder.png'} alt={product.name} className="cart-item-image" />
      
      <div className="cart-item-info">
        <h3>{product.name}</h3>
        <p>{product.price}$</p>
      </div>
      
      <div className="cart-item-controls">
        <button onClick={handleRemoveOne}>-</button>
        <span>{product.quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      
      <button onClick={() => removeFromCart(product.id)} className="remove-item-btn">
        Удалить
      </button>
    </div>
  );
};

export default CartItem;
