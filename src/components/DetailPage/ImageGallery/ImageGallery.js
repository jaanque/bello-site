import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  // Usar placeholders si no hay imágenes
  const defaultImages = [
    "https://via.placeholder.com/600x400/000000/FFFFFF/?text=Imagen+Principal",
    "https://via.placeholder.com/300x200/111111/EEEEEE/?text=Imagen+2",
    "https://via.placeholder.com/300x200/222222/DDDDDD/?text=Imagen+3",
    "https://via.placeholder.com/300x200/0a0a0a/F0F0F0/?text=Imagen+4",
    "https://via.placeholder.com/300x200/1a1a1a/EAEAEA/?text=Imagen+5",
  ];

  const displayImages = images && images.length > 0 ? images : defaultImages;

  return (
    <div className="image-gallery-container">
      <div className="main-image-wrapper">
        <img src={displayImages[0]} alt="Alojamiento principal" className="main-image" />
      </div>
      <div className="thumbnail-grid">
        {displayImages.slice(1, 5).map((image, index) => (
          <div key={index} className="thumbnail-wrapper">
            <img src={image} alt={`Alojamiento ${index + 2}`} className="thumbnail-image" />
          </div>
        ))}
        {displayImages.length > 5 && (
          <button className="show-all-photos-btn">Ver todas las fotos</button>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
