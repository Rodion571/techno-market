import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Сторінку не знайдено</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
        Повернутись на головну
      </Link>
    </div>
  );
};

export default NotFound;
