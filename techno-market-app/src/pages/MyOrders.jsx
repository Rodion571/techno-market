import React from 'react';
import { useOrder } from '../context/OrderContext';

const MyOrders = () => {
  const { orders } = useOrder();

  if (!orders || orders.length === 0) {
    return <p>У вас еще нет заказов.</p>;
  }

  return (
    <div className="my-orders-container">
      <h2>Мої замовлення</h2>
      {orders.map((order, idx) => (
        <div key={idx} className="order">
          <h3>Замовлення #{idx + 1} від {new Date(order.createdAt).toLocaleString()}</h3>
          <p>Ім'я: {order.customerName}</p>
          <p>Email: {order.customerEmail}</p>
          <p>Мобільний телефон: {order.customerPhone || 'не вказаний'}</p>
          <p>Адреса: {order.deliveryAddress}</p>
          <p>Оплата: {order.paymentMethod}</p>
          <p>Загальна сума: {order.total} грн</p>
          <p>Промокод: {order.promoCode || 'відсутній'}</p>
          <h4>Товари:</h4>
          <ul>
            {Array.isArray(order.products) && order.products.length > 0 ? (
              order.products.map(item => (
                <li key={item.id}>
                  {item.name} x {item.quantity} - {item.price * item.quantity} грн
                </li>
              ))
            ) : (
              <li>Товари відсутні</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
