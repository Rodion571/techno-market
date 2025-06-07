import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailInput = e.target.elements[1];
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Невалідний email. Будь ласка, введіть коректну адресу.");
      return;
    }

    alert("Повідомлення надіслано!");
    navigate('/');
  };

  return (
    <div className="contact-page">
      <h1>Контакти</h1>

      <div className="contact-info">
        <p>
          <FaMapMarkerAlt style={{ marginRight: '8px', color: '#555' }} />
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
          <FaPhoneAlt style={{ marginRight: '8px', color: '#555' }} />
          <strong>Телефон:</strong>{' '}
          <a href="tel:+380501234567">+38 (050) 123-45-67</a>
        </p>
        <p>
          <FaEnvelope style={{ marginRight: '8px', color: '#555' }} />
          <strong>Email:</strong>{' '}
          <a href="mailto:info@techno-market.ua">info@techno-market.ua</a>
        </p>
        <p>
          <FaClock style={{ marginRight: '8px', color: '#555' }} />
          <strong>Графік роботи:</strong>{' '}
          Пн-Пт 09:00 – 18:00
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
