import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrder();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('applePay');
  const [deliveryTime, setDeliveryTime] = useState('standard');
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentFee, setPaymentFee] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  const navigate = useNavigate();

  // Проверка входа по localStorage
  const isLoggedIn = Boolean(localStorage.getItem('userEmail'));

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'ZNYJKA10') {
      const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
      const discountValue = cartTotal * 0.1;
      setDiscount(discountValue);
      setPromoMessage('Промокод застосовано! Знижка 10%');
    } else {
      setDiscount(0);
      setPromoMessage('Недійсний промокод');
    }
  };

  const calculateTotal = useCallback(() => {
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountedTotal = cartTotal - discount;

    let deliveryCost = 50;
    if (deliveryTime === 'express') deliveryCost = 100;
    else if (deliveryTime === 'sameDay') deliveryCost = 150;

    let fee = 0;
    if (paymentMethod === 'card') {
      fee = discountedTotal * 0.05;
    } else if (paymentMethod === 'applePay' || paymentMethod === 'googlePay') {
      fee = discountedTotal * 0.02;
    } else if (paymentMethod === 'cash') {
      fee = 250;
    }

    setPaymentFee(fee.toFixed(2));
    const finalPrice = discountedTotal + deliveryCost + parseFloat(fee);
    setTotalPrice(finalPrice.toFixed(2));
  }, [cart, discount, paymentMethod, deliveryTime]);

  useEffect(() => {
    calculateTotal();
  }, [cart, discount, paymentMethod, deliveryTime, calculateTotal]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert('Будь ласка, увійдіть, щоб оформити замовлення.');
      navigate('/');
      return;
    }

    if (name && email && address) {
      const newOrder = {
        customerName: name,
        customerEmail: email,
        deliveryAddress: address,
        paymentMethod,
        deliveryTime,
        products: cart,
        total: parseFloat(totalPrice),
        discount: parseFloat(discount),
        promoCode: promoCode || null,
        createdAt: new Date().toISOString(),
      };

      addOrder(newOrder);
      clearCart();
      alert(`Дякуємо за покупку, ${name}! Ваше замовлення оформлено.`);
      navigate('/');
    } else {
      alert('Будь ласка, заповніть всі поля!');
    }
  };

  return (
    <div className="checkout">
      <h2>Перелік товарів у вашому кошику</h2>
      {cart.length === 0 ? (
        <p>Ваш кошик порожній.</p>
      ) : (
        <div className="cart-items-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name} x{item.quantity} - {item.price * item.quantity} грн</p>
            </div>
          ))}
        </div>
      )}

      <div className="promo-code">
        <label htmlFor="promo">Промокод:</label>
        <input
          type="text"
          id="promo"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button type="button" onClick={applyPromo}>Застосувати</button>
        {promoMessage && <p>{promoMessage}</p>}
      </div>

      <h2>Оформлення замовлення</h2>
      <form onSubmit={handleSubmit}>
        <div className="checkout-field">
          <label htmlFor="name">Ім'я:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="email">Електронна пошта:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="address">Адреса доставки:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="payment">Спосіб оплати:</label>
          <select
            id="payment"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="applePay">Apple Pay (2%)</option>
            <option value="googlePay">Google Pay (2%)</option>
            <option value="card">Карта (ін. банк – 5%)</option>
            <option value="cash">Готівка (250 грн)</option>
          </select>
        </div>

        <div className="checkout-field">
          <label htmlFor="deliveryTime">Час доставки:</label>
          <select
            id="deliveryTime"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            required
          >
            <option value="standard">Стандартний (3-5 днів)</option>
            <option value="express">Експрес (1-2 дні)</option>
            <option value="sameDay">Того ж дня</option>
          </select>
        </div>

        <div className="checkout-summary">
          <p><span className="label">Загальна сума товарів:</span> {cart.reduce((total, item) => total + item.price * item.quantity, 0)} грн</p>
          {discount > 0 && (
            <p><span className="label">Знижка:</span> -{discount.toFixed(2)} грн</p>
          )}
          <p><span className="label">Доставка:</span> {deliveryTime === 'standard' ? '50' : deliveryTime === 'express' ? '100' : '150'} грн</p>
          <p>
            <span className="label">Комісія за оплату:</span> {paymentFee} грн{' '}
            {paymentMethod === 'card' && <em>(картка іншого банку — 5%)</em>}
            {paymentMethod === 'applePay' && <em>(Apple Pay — 2%)</em>}
            {paymentMethod === 'googlePay' && <em>(Google Pay — 2%)</em>}
            {paymentMethod === 'cash' && <em>(готівка — 250 грн фіксовано)</em>}
          </p>
          <p className="total">
            <span className="label">Всього до сплати:</span> {totalPrice} грн
          </p>
        </div>

        <div className="checkout-actions">
          <button type="submit">Підтвердити замовлення</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
