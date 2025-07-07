import React from 'react';
import './ReviewCard.css'; // Crearemos este archivo CSS

const ReviewCard = ({ review }) => {
  const { userName, userAvatar, date, text, rating } = review || {};
  const placeholderAvatar = "https://via.placeholder.com/50/333333/FFFFFF/?text=U"; // Avatar placeholder

  // Simular estrellas de calificación
  const renderStars = (count) => {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += (i < count) ? '★' : '☆';
    }
    return stars;
  };

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
      {rating && (
        <div className="review-rating">
          {renderStars(rating)}
        </div>
      )}
      <p className="review-text">
        {text || 'Este es un comentario de ejemplo sobre la estancia. Todo fue maravilloso y el anfitrión muy atento. Definitivamente recomiendo este lugar.'}
      </p>
      {/* Podría haber un botón de "Mostrar más" para reseñas largas */}
    </div>
  );
};

export default ReviewCard;
