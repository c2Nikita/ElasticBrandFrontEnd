import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navelastic = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState('t-shirt');

  const categories = [
    { id: 't-shirt', name: 'Футболки' },
    { id: 'shorts', name: 'Шорты' },
    { id: 'trousers', name: 'Брюки' },
    { id: 'zip-hoodie', name: 'Толстовки' }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <nav style={{ background: '#000', padding: '15px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
          ElasticShop
        </Link>

        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
          {categories.map(category => (
            <li key={category.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(category.id);
                }}
                style={{
                  color: '#fff',
                  textDecoration: 'none', 
                  fontSize: '1rem',
                  borderBottom: activeCategory === category.id ? '2px solid #fff' : 'none',
                  paddingBottom: '5px'
                }}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navelastic;
