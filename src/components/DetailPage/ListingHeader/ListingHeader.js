import React from 'react';
import './ListingHeader.css';

const ListingHeader = ({ name, rating, reviewsCount, location }) => {
  return (
    <div className="listing-header-container">
      <h1 className="listing-title">{name || 'Nombre del Alojamiento no disponible'}</h1>
      <div className="listing-subheader">
        <span className="rating-info">
          ⭐ {rating || 'N/A'} ({reviewsCount || 0} reseñas)
        </span>
        <span className="separator">·</span>
        <span className="location-info">{location || 'Ubicación no disponible'}</span>
      </div>
      <div className="listing-actions">
        <button className="action-btn">↪ Compartir</button>
        <button className="action-btn">❤️ Guardar</button>
      </div>
    </div>
  );
};

export default ListingHeader;
