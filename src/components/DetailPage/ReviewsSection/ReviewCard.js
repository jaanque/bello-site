import React, { useState } from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
  const { userName, userAvatar, date, text, rating } = review || {}; // Rating no se usa según CSS
  const placeholderAvatar = `https://via.placeholder.com/48/333333/FFFFFF/?text=${(userName || 'U').charAt(0)}`;

  const [isExpanded, setIsExpanded] = useState(false);
  const reviewText = text || 'Este es un comentario de ejemplo sobre la estancia. Todo fue maravilloso y el anfitrión muy atento. Definitivamente recomiendo este lugar para futuras visitas. La atención al detalle fue impresionante.';
  const canShowMore = reviewText.length > 200; // Límite aproximado para truncar

  return (
    <div className="review-card">
      <div className="review-card-header">
        <img
          src={userAvatar || placeholderAvatar}
          alt={userName || 'Usuario'}
          className="user-avatar"
        />
        <div className="user-info">
          <span className="user-name">{userName || 'Usuario Anónimo'}</span>
          <span className="review-date">{date || 'Fecha no disponible'}</span>
        </div>
      </div>
      {/* El rating individual por reseña está oculto por CSS para seguir el estilo de Airbnb */}
      {/* {rating && ( <div className="review-rating"> ...estrellas... </div> )} */}

      <p className={`review-text ${isExpanded ? 'expanded' : ''}`}>
        {isExpanded ? reviewText : `${reviewText.substring(0, 200)}${canShowMore && !isExpanded ? '...' : ''}`}
      </p>
      {canShowMore && (
        <button onClick={() => setIsExpanded(!isExpanded)} className="show-more-review-btn">
          {isExpanded ? 'Mostrar menos' : 'Mostrar más'}
        </button>
      )}
    </div>
  );
};

export default ReviewCard;
