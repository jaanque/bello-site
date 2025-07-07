import React from 'react';
import ReviewCard from './ReviewCard';
import './ReviewsSection.css'; // Crearemos este archivo CSS

const ReviewsSection = ({ reviews, overallRating, totalReviews }) => {
  // Datos de ejemplo si no se proporcionan
  const defaultReviews = [
    { id: 1, userName: 'Elena V.', date: 'marzo de 2024', rating: 5, text: 'Una estancia increíble. El lugar es tal como se describe, muy limpio y con todas las comodidades. El anfitrión fue muy amable y la comunicación excelente. ¡Volvería sin dudarlo!' },
    { id: 2, userName: 'Carlos G.', date: 'febrero de 2024', rating: 4, text: 'Buen lugar, bien ubicado. Algunas cosas menores podrían mejorar, pero en general una buena experiencia. La cama era cómoda y la cocina bien equipada.' },
    { id: 3, userName: 'Ana P.', date: 'enero de 2024', rating: 5, text: '¡Perfecto! No tengo ninguna queja. Superó mis expectativas. Muy recomendable para una escapada tranquila.' },
    { id: 4, userName: 'Luis M.', date: 'diciembre de 2023', rating: 3, text: 'Aceptable. La limpieza podría haber sido un poco mejor en el baño. Por lo demás, todo correcto.' },
  ];

  const displayReviews = reviews && reviews.length > 0 ? reviews : defaultReviews;
  const currentOverallRating = overallRating || 4.75; // Ejemplo
  const currentTotalReviews = totalReviews || displayReviews.length;

  // Podríamos tener un desglose de calificaciones más detallado aquí
  // const ratingBreakdown = {
  //   cleanliness: 4.8,
  //   communication: 4.9,
  //   checkIn: 4.7,
  //   accuracy: 4.8,
  //   location: 4.6,
  //   value: 4.7,
  // };

  return (
    <div className="reviews-section-container">
      <h2 className="reviews-main-title">
        ⭐ {currentOverallRating} · {currentTotalReviews} reseñas
      </h2>

      {/* Aquí podría ir el desglose de calificaciones si se implementa */}
      {/* <div className="rating-breakdown-grid"> ... </div> */}

      <div className="reviews-grid">
        {displayReviews.slice(0, 4).map(review => ( // Mostrar solo las primeras 4-6 reseñas
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {displayReviews.length > 4 && (
        <button className="show-all-reviews-btn">
          Mostrar las {displayReviews.length} reseñas
        </button>
      )}
    </div>
  );
};

export default ReviewsSection;
