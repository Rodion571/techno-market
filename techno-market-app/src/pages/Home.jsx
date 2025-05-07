import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Ноутбук', image: '/images/laptop.jpg', type: 'Ноутбук' },
  { name: 'Телевизор', image: '/images/tv.jpg', type: 'Телевизор' },
  { name: 'Смартфон', image: '/images/smartphone.jpg', type: 'Смартфон' },
];

const Home = () => {
  const navigate = useNavigate();

  const handleMoreClick = (type) => {
    navigate(`/catalog?type=${encodeURIComponent(type)}`);
  };

  return (
    <div className="home">
      <h2 className="page-title">Популярные категории</h2>
      <div className="product-list">
        {categories.map((cat) => (
          <div key={cat.name} className="product-card">
            <img src={cat.image} alt={cat.name} className="product-card-image" />
            <h3 className="product-card-title">{cat.name}</h3>
            <button onClick={() => handleMoreClick(cat.type)} className="product-card-button">
              Подробнее
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
