import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom'; // Используем useNavigate вместо useHistory

const Cart = () => {
  const { cart, removeFromCart, removeOneFromCart, updateQuantity } = useCart();
  const navigate = useNavigate(); // Используем useNavigate для навигации

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

  const handleCheckout = () => {
    navigate('/checkout'); // Перенаправляем на страницу оформления заказа с помощью navigate
  };

  return (
    <div className="cart">
      <h2>Кошик</h2>

      {cart.length === 0 ? (
        <p>Ваш кошик на жаль порожній.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-left">
                <img src={item.image || '/placeholder.png'} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.price} грн</p>
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
              <button onClick={() => handleRemoveAll(item.id)}>Видалити</button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Підсумок: {totalPrice} грн</h3>
        </div>
      )}

      <div className="cart-actions">
        <Link to="/catalog" className='go-buy'>Продовжити покупки</Link>
        <button onClick={handleCheckout} className="pay-button">Сплатити</button> {/* Навигация на Checkout */}
      </div>
    </div>
  );
};

export default Cart;
