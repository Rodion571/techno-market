import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Валидация и отправка данных
    console.log(formData);
  };

  return (
    <div className="checkout">
      <h1>Оформление заказа</h1>
      <form>
        <label>
          Имя:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Адрес:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <label>
          Телефон:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleSubmit}>Подтвердить</button>
      </form>
    </div>
  );
};

export default Checkout;
