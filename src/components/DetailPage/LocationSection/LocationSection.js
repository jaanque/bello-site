import React from 'react';
import './LocationSection.css'; // Crearemos este archivo CSS

const LocationSection = ({ address, neighborhoodDescription, mapImageUrl }) => {
  // Placeholder para la imagen del mapa (podría ser un componente de mapa interactivo real)
  const defaultMapImage = "https://via.placeholder.com/800x400/000000/FFFFFF/?text=Mapa+de+Ubicación+(Placeholder)";
  const displayMapImage = mapImageUrl || defaultMapImage;

  return (
    <div className="location-section-container">
      <h2 className="location-title">Dónde vas a estar</h2>
      {address && <p className="location-address">{address}</p>}

      <div className="map-image-wrapper">
        <img src={displayMapImage} alt="Mapa de la ubicación" className="map-image" />
      </div>

      {neighborhoodDescription && (
        <div className="neighborhood-info">
          <h3>Sobre el vecindario</h3>
          <p>{neighborhoodDescription}</p>
        </div>
      )}
      {/* Podría haber un botón "Mostrar guía del barrio" */}
    </div>
  );
};

export default LocationSection;
