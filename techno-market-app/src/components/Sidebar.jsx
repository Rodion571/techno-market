import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Пример для авторизации
  const [user] = useState({ name: 'John Doe', email: 'johndoe@example.com' });


  // Функция для логина/выхода
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <div className="sidebar">
      <div className="user-info">
        <div className="user-avatar">
          {/* Иконка пользователя, если авторизован */}
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="user-details">
          <p>{isAuthenticated ? `Привет, ${user.name}` : 'Гость'}</p>
          <p>{isAuthenticated ? user.email : ''}</p>
        </div>
        <button onClick={toggleAuth}>
          {isAuthenticated ? 'Выйти' : 'Войти'}
        </button>
      </div>
      
      <nav className="nav-links">
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/contact">Контакты</Link>
        {/* Добавь другие ссылки по мере необходимости */}
      </nav>
    </div>
  );
};

export default Sidebar;
