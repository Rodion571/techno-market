import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('userEmail');
    if (storedName && storedEmail) {
      setUser({ name: storedName, email: storedEmail });
      setIsAuthenticated(true);
      setIsRegistered(true);
    }
  }, []);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const maskEmail = (email) => {
    const [userPart, domain] = email.split('@');
    if (!userPart || !domain) return '';
    if (userPart.length <= 2) return '***@' + domain;
    return userPart.slice(0, 2) + '****@' + domain;
  };

  const handleLoginClick = () => {
    const name = prompt("Введіть ваше ім'я:");
    if (name) {
      const email = prompt('Введіть ваш email:');
      if (email && isValidEmail(email)) {
        setUser({ name, email });
        setIsAuthenticated(true);
        setIsRegistered(false);
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        alert(`Вітаємо, ${name}! Ви успішно увійшли.`);
      } else {
        alert('Будь ласка, введіть правильний email!');
      }
    } else {
      alert("Ім'я не введене!");
    }
  };

  const handleRegisterClick = () => {
    const name = prompt("Введіть ваше ім'я для реєстрації:");
    if (name) {
      const email = prompt('Введіть ваш email для реєстрації:');
      if (email && isValidEmail(email)) {
        setUser({ name, email });
        setIsAuthenticated(true);
        setIsRegistered(true);
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        alert(`Реєстрація успішна, ${name}!`);
      } else {
        alert('Будь ласка, введіть правильний email!');
      }
    } else {
      alert("Ім'я не введене!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser({ name: '', email: '' });
    setIsRegistered(false);
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
  };

  return (
    <div className="sidebar">
      <div className="user-info">
        <div className="user-avatar">
          {isAuthenticated && (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjrfOPV1XpaVpFGV-4N37pAFdmvLJFDDybw&s"
              alt="User Avatar"
            />
          )}
        </div>
        <div className="user-details">
          <p>{isAuthenticated ? `Привіт, ${user.name}` : 'Гість'}</p>
          {isAuthenticated && isRegistered && (
            <p className="masked-email">
              {maskEmail(user.email)}
            </p>
          )}
        </div>
        {isAuthenticated ? (
          <div>
            <p>Особистий кабінет</p>
            <NavLink to="/my-orders" className="nav-link">
              Мої замовлення
            </NavLink>
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
        <NavLink to="/" end className="nav-link">
          Головна
        </NavLink>
        <NavLink to="/catalog" className="nav-link">
          Каталог
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          Кошик
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Контакти
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
