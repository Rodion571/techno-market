import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, removeOneFromCart, updateQuantity } = useCart();

  const handleRemoveOne = (id) => {
    removeOneFromCart(id); // Уменьшаем количество на 1
  };

  const handleRemoveAll = (id) => {
    removeFromCart(id); // Удаляем весь товар
  };

  const handleChangeQuantity = (id, quantity) => {
    if (quantity > 0) {
      updateQuantity(id, quantity); // Обновляем количество товара
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0); // Считаем общую сумму

  return (
    <div className="cart">
      <h2>Корзина</h2>

      {cart.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-left">
                <img src={item.image || '/placeholder.png'} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price} ₴</p>
                </div>
              </div>

              <div className="cart-item-right">
                <p>{item.description || "Описание товара не доступно."}</p>
              </div>

              <div className="quantity">
                <button onClick={() => handleRemoveOne(item.id)}>-</button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleChangeQuantity(item.id, Number(e.target.value))
                  }
                  min="1"
                />
                <button onClick={() => handleChangeQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => handleRemoveAll(item.id)}>Удалить</button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Итого: {totalPrice} ₴</h3>
        </div>
      )}

      <div className="cart-actions">
        <Link to="/">Продолжить покупки</Link>
        <button className="pay-button">Оплатить</button>
      </div>
    </div>
  );
};

export default Cart;
