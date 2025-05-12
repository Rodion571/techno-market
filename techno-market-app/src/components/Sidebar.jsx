import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Стан для перевірки авторизації
  const [user, setUser] = useState({ name: '', email: '' }); // Дані користувача
  const [isRegistered, setIsRegistered] = useState(false); // Стан для перевірки реєстрації

  // Функція для валідації email
  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Функція для активації форми входу через алерти
  const handleLoginClick = () => {
    const name = prompt('Введіть ваше ім\'я:');
    if (name) {
      const email = prompt('Введіть ваш email:');
      if (email) {
        if (isValidEmail(email)) {
          setUser({ name, email });
          setIsAuthenticated(true); // Користувач авторизований
          setIsRegistered(false); // Це звичайний вхід, не реєстрація
          alert(`Вітаємо, ${name}! Ви успішно увійшли.`);
        } else {
          alert('Будь ласка, введіть правильний email!');
        }
      } else {
        alert('Email не введений!');
      }
    } else {
      alert('Ім\'я не введене!');
    }
  };

  // Функція для реєстрації
  const handleRegisterClick = () => {
    const name = prompt('Введіть ваше ім\'я для реєстрації:');
    if (name) {
      const email = prompt('Введіть ваш email для реєстрації:');
      if (email) {
        if (isValidEmail(email)) {
          setUser({ name, email });
          setIsAuthenticated(true);
          setIsRegistered(true); // Це реєстрація
          alert(`Реєстрація успішна, ${name}!`);
        } else {
          alert('Будь ласка, введіть правильний email!');
        }
      } else {
        alert('Email не введений!');
      }
    } else {
      alert('Ім\'я не введене!');
    }
  };

  // Функція для виходу
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser({ name: '', email: '' });
    setIsRegistered(false);
  };

  return (
    <div className="sidebar">
      <div className="user-info">
        <div className="user-avatar">
          {/* Добавьте вашу картинку или иконку */}
          {isAuthenticated && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjrfOPV1XpaVpFGV-4N37pAFdmvLJFDDybw&s" alt="User Avatar" />}
        </div>
        <div className="user-details">
          <p>{isAuthenticated ? `Привіт, ${user.name}` : 'Гість'}</p>
          {isAuthenticated && isRegistered && <p>{user.email}</p>}
        </div>

        {isAuthenticated ? (
          <div>
            <p>Особистий кабінет</p> {/* Добавляем надпись "Особистий кабінет" */}
            <button onClick={handleLogout}>Вихід</button>
          </div>
        ) : (
          <div>
            <button onClick={handleLoginClick}>Вхід</button>
            <button onClick={handleRegisterClick}>Реєстрація</button>
          </div>
        )}
      </div>

      <nav className="nav-links">
        <Link to="/">Головна</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/cart">Кошик</Link>
        <Link to="/contact">Контакти</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
