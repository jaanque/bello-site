import React from 'react';
import './CategoriesBar.css';

// Placeholder icons (idealmente serían SVGs o imágenes)
const categories = [
  { name: 'Increíbles vistas', icon: '🏞️' },
  { name: 'Populares', icon: '🔥' },
  { name: 'Casas rurales', icon: '🏡' },
  { name: 'Tropical', icon: '🌴' },
  { name: 'Minicasas', icon: '🏠' },
  { name: 'Frente al lago', icon: '🛶' },
  { name: 'Diseño', icon: '🎨' },
  { name: 'Cabañas', icon: '🪵' },
  { name: 'Camping', icon: '⛺' },
  { name: 'Castillos', icon: '🏰' },
];

const CategoriesBar = () => {
  return (
    <div className="categories-bar">
      {categories.map((category) => (
        <div key={category.name} className="category-item">
          <span className="category-icon">{category.icon}</span>
          <span className="category-name">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoriesBar;
