import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Повідомлення надіслано!");
    navigate('/');
  };

  return (
    <div className="contact-page">
      <h1>Контакти</h1>

      <div className="contact-info">
        <p><strong>Адреса:</strong> м. Київ, вул. Технопаркова, 12</p>
        <p><strong>Телефон:</strong> +38 (050) 123-45-67</p>
        <p><strong>Email:</strong> info@techno-market.ua</p>
        <p><strong>Графік роботи:</strong> Пн-Пт 09:00 – 18:00</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Зворотній зв'язок</h2>
        <input type="text" placeholder="Ваше ім'я" required />
        <input type="email" placeholder="Ваш email" required />
        <textarea placeholder="Ваше повідомлення" required></textarea>
        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
};

export default Contact;
