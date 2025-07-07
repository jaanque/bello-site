import React from 'react';
import './Categories.css';

// Placeholder SVGs para iconos de categorías. En una app real, estos serían más específicos.
const HomeIcon = () => <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>;
const TinyHomeIcon = () => <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}><path d="M12 5.5l6 4.5v9h-3v-6h-6v6H6v-9l6-4.5M12 3L4 9v12h16V9l-8-6z" /></svg>;
const CabinIcon = () => <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}><path d="M12 3L4 9v12h16V9l-8-6zm0 2.69l6 4.5V19H6v-8.81l6-4.5zM9 14h6v3H9v-3z" /></svg>; // Placeholder
const BeachIcon = () => <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l1.5-1.5L10 18l4-4 1.5 1.5L20.5 12l-1.5 1.5L17 12l-4 4-1.5-1.5L6.5 18l-1-1z" /></svg>; // Placeholder genérico
const PoolIcon = () => <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2V7zm0 4h2v6h-2v-6z" /></svg>; // Placeholder genérico


const categoriesData = [
  { name: 'All', icon: <HomeIcon /> },
  { name: 'Tiny homes', icon: <TinyHomeIcon /> },
  { name: 'Cabins', icon: <CabinIcon /> },
  { name: 'Beachfront', icon: <BeachIcon /> },
  { name: 'Amazing pools', icon: <PoolIcon /> },
  { name: 'OMG!', icon: <TinyHomeIcon /> }, // Reusar icono por simplicidad
  { name: 'National parks', icon: <CabinIcon /> },
  { name: 'Islands', icon: <BeachIcon /> },
  { name: 'Design', icon: <HomeIcon /> },
  { name: 'Arctic', icon: <CabinIcon /> },
  { name: 'Farms', icon: <HomeIcon /> },
  { name: 'Countryside', icon: <CabinIcon /> },
  { name: 'Surfing', icon: <BeachIcon /> },
  { name: 'Golfing', icon: <PoolIcon /> }, // Reusar
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = React.useState(categoriesData[0].name);

  return (
    <nav className="categories-nav">
      <div className="categories-scroll-container">
        {categoriesData.map((category) => (
          <button
            key={category.name}
            className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.name)}
            aria-pressed={selectedCategory === category.name} // Para accesibilidad
          >
            <div className="category-icon">{category.icon}</div>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>
      {/* Podríamos añadir botones de scroll left/right si hay muchos items y no queremos depender solo del scroll del navegador */}
    </nav>
  );
}

export default Categories;
