import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrder();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('monoCard');
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentFee, setPaymentFee] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [paymentDeliveryError, setPaymentDeliveryError] = useState('');

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

    // Визначення вартості доставки
    let deliveryCost = 0;
    if (deliveryMethod === 'pickup') deliveryCost = 0;
    else if (deliveryMethod === 'novaPoshta') deliveryCost = 70;
    else if (deliveryMethod === 'ukrPost') deliveryCost = 60;
    else if (deliveryMethod === 'expressCompany') deliveryCost = 150;

    // Розрахунок комісії за оплату
    let fee = 0;
    if (paymentMethod === 'monoCard' || paymentMethod === 'privatCard') {
      fee = discountedTotal * 0.03; // 3% комісія для карт Приват та Монобанк
    } else if (paymentMethod === 'applePay' || paymentMethod === 'googlePay') {
      fee = discountedTotal * 0.02; // 2% для ApplePay та GooglePay
    } else if (paymentMethod === 'cash') {
      // Готівка доступна тільки при самовивозі, комісія 0
      fee = 0;
    }

    setPaymentFee(fee.toFixed(2));
    const finalPrice = discountedTotal + deliveryCost + fee;
    setTotalPrice(finalPrice.toFixed(2));
  }, [cart, discount, paymentMethod, deliveryMethod]);

  useEffect(() => {
    calculateTotal();
  }, [cart, discount, paymentMethod, deliveryMethod, calculateTotal]);

  // Проверка на совместимость оплаты и доставки
  useEffect(() => {
    if (paymentMethod === 'cash' && deliveryMethod !== 'pickup') {
      setPaymentDeliveryError('Оплата готівкою можлива лише при самовивозі!');
    } else {
      setPaymentDeliveryError('');
    }
  }, [paymentMethod, deliveryMethod]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert('Будь ласка, увійдіть, щоб оформити замовлення.');
      navigate('/');
      return;
    }

    // Валідація мобільного телефону (простий патерн, можна ускладнити)
    const phoneRegex = /^\+?\d{10,15}$/;
    if (!mobilePhone || !phoneRegex.test(mobilePhone)) {
      alert('Будь ласка, введіть коректний мобільний телефон (цифри, 10-15 символів, можна починати з +)');
      return;
    }

    if (!name || !email || (deliveryMethod !== 'pickup' && !address)) {
      alert('Будь ласка, заповніть всі необхідні поля!');
      return;
    }

    if (paymentDeliveryError) {
      alert(paymentDeliveryError);
      return;
    }

    const newOrder = {
      customerName: name,
      customerEmail: email,
      customerPhone: mobilePhone,
      deliveryAddress: deliveryMethod === 'pickup' ? 'Самовивіз зі складу SwiftCargo' : address,
      paymentMethod,
      deliveryMethod,
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
        <label htmlFor="promo">Промокод:🚩</label>
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
          <label htmlFor="name">Ім'я:🪪</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="email">Електронна пошта:💻</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="checkout-field">
          <label htmlFor="mobilePhone">Мобільний телефон:📲</label>
          <input
            type="tel"
            id="mobilePhone"
            value={mobilePhone}
            onChange={(e) => setMobilePhone(e.target.value)}
            placeholder="+380XXXXXXXXX"
            required
          />
        </div>

        {deliveryMethod !== 'pickup' && (
          <div className="checkout-field">
            <label htmlFor="address">Адреса доставки:🏘️</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required={deliveryMethod !== 'pickup'}
            />
          </div>
        )}

        <div className={`checkout-field ${paymentDeliveryError ? 'error' : ''}`}>
          <label htmlFor="deliveryMethod">Спосіб доставки:🛹</label>
          <select
            id="deliveryMethod"
            value={deliveryMethod}
            onChange={(e) => setDeliveryMethod(e.target.value)}
            required
          >
            <option value="pickup">Самовивіз (безкоштовно)</option>
            <option value="novaPoshta">Нова пошта (70 грн)</option>
            <option value="ukrPost">Укрпошта (60 грн)</option>
            <option value="expressCompany">Експрес (SwiftCargo, 150 грн)</option>
          </select>
        </div>

        <div className={`checkout-field ${paymentDeliveryError ? 'error' : ''}`}>
          <label htmlFor="paymentMethod">Спосіб оплати:🪙</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="monoCard">Оплата частинами від MonoBank (3%)</option>
            <option value="privatCard">Оплата частинами від ПриватБанк (3%)</option>
            <option value="applePay">Apple Pay (2%)</option>
            <option value="googlePay">Google Pay (2%)</option>
            <option value="cash">Готівка (тільки самовивіз)</option>
          </select>
          {paymentDeliveryError && <p className="error-message">{paymentDeliveryError}</p>}
        </div>

        <div className="checkout-summary">
          <p><span className="label">Загальна сума товарів:</span> {cart.reduce((total, item) => total + item.price * item.quantity, 0)} грн</p>
          {discount > 0 && (
            <p><span className="label">Знижка:</span> -{discount.toFixed(2)} грн</p>
          )}
          <p><span className="label">Доставка:</span> {deliveryMethod === 'pickup' ? '0' : deliveryMethod === 'novaPoshta' ? '70' : deliveryMethod === 'ukrPost' ? '60' : '150'} грн</p>
          <p>
            <span className="label">Комісія за оплату:</span> {paymentFee} грн{' '}
            {(paymentMethod === 'monoCard' || paymentMethod === 'privatCard') && <em>(3%)</em>}
            {paymentMethod === 'applePay' && <em>(2%)</em>}
            {paymentMethod === 'googlePay' && <em>(2%)</em>}
            {paymentMethod === 'cash' && <em>(готівка, тільки при самовивозі)</em>}
          </p>
          <p className="total">
            <span className="label">Всього до сплати:</span> {totalPrice} 💵грн
          </p>
        </div>

        <div className="checkout-actions">
          <button type="submit" disabled={Boolean(paymentDeliveryError)}>Підтвердити замовлення</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
