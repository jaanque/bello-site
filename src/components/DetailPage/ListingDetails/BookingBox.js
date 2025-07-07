import React from 'react';
import './BookingBox.css'; // Crearemos este archivo CSS

const BookingBox = ({ pricePerNight, rating, reviewsCount }) => {
  // Simulación de cálculo de precios
  const nights = 2; // Ejemplo
  const cleaningFee = 20;
  const serviceFee = Math.round((pricePerNight * nights) * 0.1); // 10% de servicio
  const total = (pricePerNight * nights) + cleaningFee + serviceFee;

  return (
    <div className="booking-box-sticky-container">
      <div className="booking-box">
        <div className="booking-box-header">
          <span className="price-per-night">
            <strong>${pricePerNight || 0}</strong> noche
          </span>
          <span className="rating-summary">
            ⭐ {rating || 'N/A'} ({reviewsCount || 0} reseñas)
          </span>
        </div>

        <div className="booking-form">
          <div className="date-inputs">
            <div className="date-input">
              <label htmlFor="checkin">LLEGADA</label>
              <input type="text" id="checkin" placeholder="Añade fecha" readOnly />
            </div>
            <div className="date-input">
              <label htmlFor="checkout">SALIDA</label>
              <input type="text" id="checkout" placeholder="Añade fecha" readOnly />
            </div>
          </div>
          <div className="guests-input">
            <label htmlFor="guests">HUÉSPEDES</label>
            <input type="text" id="guests" placeholder="¿Cuántos?" readOnly />
            {/* Podría ser un dropdown o un input numérico */}
          </div>
          <button className="reserve-button">
            Consultar disponibilidad
          </button>
        </div>

        {/* Desglose de precios (se mostraría después de seleccionar fechas, aquí está visible para diseño) */}
        <div className="price-breakdown">
          <p className="no-charge-yet">No se te cobrará nada aún</p>
          <div className="price-item">
            <span>${pricePerNight || 0} x {nights} noches</span>
            <span>${(pricePerNight || 0) * nights}</span>
          </div>
          <div className="price-item">
            <span>Tarifa de limpieza</span>
            <span>${cleaningFee}</span>
          </div>
          <div className="price-item">
            <span>Tarifa de servicio de AirbnbClone</span>
            <span>${serviceFee}</span>
          </div>
          <hr className="total-divider" />
          <div className="price-total">
            <strong>Total</strong>
            <strong>${total}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBox;
