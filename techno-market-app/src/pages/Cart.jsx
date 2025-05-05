import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart">
      <h1>Корзина</h1>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>В вашей корзине нет товаров.</p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onRemove={removeFromCart}
            />
          ))
        )}
      </div>
      <div className="cart-total">
        <h3>Общая сумма: {total}₽</h3>
      </div>
      <button className="checkout-btn">Оформить заказ</button>
    </div>
  );
};

export default Cart;
