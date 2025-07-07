import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import './ListingCard.css';

const ListingCard = ({ listing }) => {
  // Usar una imagen de marcador de posición genérica en blanco y negro
  const placeholderImage = `https://via.placeholder.com/300x200/000000/FFFFFF/?text=Alojamiento+${listing.id}`;

  return (
    // Envolver la tarjeta con Link para navegar al detalle
    <Link to={`/listing/${listing.id}`} className="listing-card-link">
      <div className="listing-card">
        <img
          src={listing.imageUrl || placeholderImage}
          alt={listing.name}
          className="listing-image"
        />
        <div className="listing-info">
          <h3 className="listing-name">{listing.name}</h3>
          <p className="listing-location">{listing.location}</p>
          <p className="listing-price">
            <strong>${listing.price}</strong> noche
          </p>
          <div className="listing-rating">
            <span>⭐ {listing.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
