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
        <p>
          <strong>Адреса:</strong>{' '}
          <a
            href="https://www.google.com/maps?q=м.+Київ,+вул.+Технопаркова,+12"
            target="_blank"
            rel="noopener noreferrer"
          >
            м. Київ, вул. Технопаркова, 12
          </a>
        </p>
        <p>
          <strong>Телефон:</strong>{' '}
          <a href="tel:+380501234567">+38 (050) 123-45-67</a>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@techno-market.ua">info@techno-market.ua</a>
        </p>
        <p>
          <strong>Графік роботи:</strong>{' '}
          <a
            href="https://calendar.google.com/calendar/u/0/r"
            target="_blank"
            rel="noopener noreferrer"
          >
            Пн-Пт 09:00 – 18:00
          </a>
        </p>
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
