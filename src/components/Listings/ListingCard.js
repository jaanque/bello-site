import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import './ListingCard.css';

// Placeholder para icono de estrella y corazón
const StarIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentcolor' }}>
    <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path>
  </svg>
);

const HeartIcon = ({ isFavorite }) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', stroke: 'white', strokeWidth: 2, overflow: 'visible' }}
    className={`heart-icon ${isFavorite ? 'favorite' : ''}`}
  >
    <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
  </svg>
);


function ListingCard({ listing }) {
  const {
    id, // Asegurarse de que id está aquí
    image,
    title,
    location,
    rating,
    dates,
    price,
    isSuperhost,
    isFavorite,
  } = listing;

  const [favorite, setFavorite] = React.useState(isFavorite);
  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorite(!favorite);
  };

  return (
    // Usar Link en lugar de <a>
    <Link to={`/listing/${id}`} className="listing-card-link">
      <div className="listing-card">
        <div className="listing-card-image-container">
          <img src={image} alt={title} className="listing-card-image" />
          {isSuperhost && <span className="superhost-badge">Superhost</span>}
          <button
            className="favorite-button"
            onClick={toggleFavorite}
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <HeartIcon isFavorite={favorite} />
          </button>
        </div>
        <div className="listing-card-info">
          <div className="listing-card-header">
            <span className="listing-card-location">{location}</span>
            {rating && (
              <span className="listing-card-rating">
                <StarIcon /> {rating.toFixed(1)}
              </span>
            )}
          </div>
          <p className="listing-card-title">{title}</p>
          <p className="listing-card-dates">{dates}</p>
          <p className="listing-card-price">
            <strong>${price}</strong> noche
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ListingCard;
