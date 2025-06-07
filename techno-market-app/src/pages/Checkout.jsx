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

  // Errors 
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobilePhone: '',
    address: '',
    paymentDelivery: '',
    general: '',
  });

  const navigate = useNavigate();

  const isLoggedIn = Boolean(localStorage.getItem('userEmail'));

  const isValidEmail = (email) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const hasCyrillic = /[а-яёіїєґА-ЯЁІЇЄҐ]/.test(email);
    return emailPattern.test(email) && !hasCyrillic;
  };

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

    let deliveryCost = 0;
    if (deliveryMethod === 'pickup') deliveryCost = 0;
    else if (deliveryMethod === 'novaPoshta') deliveryCost = 70;
    else if (deliveryMethod === 'ukrPost') deliveryCost = 60;
    else if (deliveryMethod === 'expressCompany') deliveryCost = 150;

    let fee = 0;
    if (paymentMethod === 'monoCard' || paymentMethod === 'privatCard') {
      fee = discountedTotal * 0.03;
    } else if (paymentMethod === 'applePay' || paymentMethod === 'googlePay') {
      fee = discountedTotal * 0.02;
    } else if (paymentMethod === 'cash') {
      fee = 0;
    }

    setPaymentFee(fee.toFixed(2));
    const finalPrice = discountedTotal + deliveryCost + fee;
    setTotalPrice(finalPrice.toFixed(2));
  }, [cart, discount, paymentMethod, deliveryMethod]);

  useEffect(() => {
    calculateTotal();
  }, [cart, discount, paymentMethod, deliveryMethod, calculateTotal]);

  useEffect(() => {
    if (paymentMethod === 'cash' && deliveryMethod !== 'pickup') {
      setPaymentDeliveryError('Оплата готівкою можлива лише при самовивозі!');
    } else {
      setPaymentDeliveryError('');
    }
  }, [paymentMethod, deliveryMethod]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: '',
      email: '',
      mobilePhone: '',
      address: '',
      paymentDelivery: '',
      general: '',
    };
    let valid = true;

    if (!isLoggedIn) {
      newErrors.general = 'Будь ласка, увійдіть, щоб оформити замовлення.';
      valid = false;
    }

    const phoneRegex = /^\+?\d{10,15}$/;
    if (!mobilePhone || !phoneRegex.test(mobilePhone)) {
      newErrors.mobilePhone = 'Введіть коректний мобільний телефон (10-15 цифр, можна починати з +)';
      valid = false;
    }

    if (!name.trim()) {
      newErrors.name = "Поле ім'я не може бути порожнім";
      valid = false;
    }

    if (!email.trim() || !isValidEmail(email)) {
      newErrors.email = "Введіть коректну електронну пошту без кирилиці";
      valid = false;
    }

    if (deliveryMethod !== 'pickup' && !address.trim()) {
      newErrors.address = "Будь ласка, введіть адресу доставки";
      valid = false;
    }

    if (paymentDeliveryError) {
      newErrors.paymentDelivery = paymentDeliveryError;
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

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

      {errors.general && <p className="error-message general-error">{errors.general}</p>}

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
          {errors.name && <p className="error-message">{errors.name}</p>}
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
          {errors.email && <p className="error-message">{errors.email}</p>}
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
          {errors.mobilePhone && <p className="error-message">{errors.mobilePhone}</p>}
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
            {errors.address && <p className="error-message">{errors.address}</p>}
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
          {errors.paymentDelivery && <p className="error-message">{errors.paymentDelivery}</p>}
        </div>

        <div className="checkout-summary">
          <p><span className="label">Загальна сума товарів:</span> {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)} грн</p>
          <p><span className="label">Знижка:</span> {discount.toFixed(2)} грн</p>
          <p><span className="label">Комісія за оплату:</span> {paymentFee} грн</p>
          <p><span className="label">Всього до оплати:</span> {totalPrice} грн</p>
        </div>

        <button type="submit" className="btn btn-primary">Оформити замовлення</button>
      </form>
    </div>
  );
};

export default Checkout;
