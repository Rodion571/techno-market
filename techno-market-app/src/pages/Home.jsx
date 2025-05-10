import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Ноутбуки', image: '/images/laptop.jpg', category: 'Ноутбуки' },
  { name: 'Телевізори', image: '/images/tv.jpg', category: 'Телевізори' },
  { name: 'Смартфони', image: '/images/smartphone.jpg', category: 'Смартфони' },
];

const Home = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate('/catalog'); // Переходим на каталог без параметра категории в URL
  };

  return (
    <div className="home">
      <h2 className="page-title">Популярні категорії</h2>
      <div className="product-list">
        {categories.map((cat) => (
          <div key={cat.name} className="product-card">
            <img src={cat.image} alt={cat.name} className="product-card-image" />
            <h3 className="product-card-title">{cat.name}</h3>
            <button onClick={handleMoreClick} className="product-card-button">
              Детальніше
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
