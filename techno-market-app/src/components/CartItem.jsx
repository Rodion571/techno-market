import React from 'react';

const CartItem = ({ product, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} />
      <div className="cart-item-info">
        <h3>{product.name}</h3>
        <p>{product.price}₽</p>
      </div>
      <button onClick={() => onRemove(product.id)}>Удалить</button>
    </div>
  );
};

export default CartItem;
