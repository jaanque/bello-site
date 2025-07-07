import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const defaultImages = [
    "https://via.placeholder.com/600x400/000000/FFFFFF/?text=Imagen+Principal",
    "https://via.placeholder.com/300x200/111111/EEEEEE/?text=Imagen+2",
    "https://via.placeholder.com/300x200/222222/DDDDDD/?text=Imagen+3",
    "https://via.placeholder.com/300x200/0a0a0a/F0F0F0/?text=Imagen+4",
    "https://via.placeholder.com/300x200/1a1a1a/EAEAEA/?text=Imagen+5",
  ];

  const displayImages = images && images.length > 0 ? images : defaultImages;
  const mainImage = displayImages[0];
  const thumbnails = displayImages.slice(1, 5); // Airbnb muestra 4 miniaturas junto a la principal

  return (
    <div className="image-gallery-container">
      <div className="main-image-wrapper">
        <img src={mainImage} alt="Alojamiento principal" className="main-image" />
      </div>
      <div className="thumbnail-grid">
        {thumbnails.map((image, index) => (
          <div key={index} className={`thumbnail-wrapper thumbnail-${index}`}>
            <img src={image} alt={`Alojamiento thumbnail ${index + 1}`} className="thumbnail-image" />
            {/* El botón "Ver todas las fotos" se superpone a la última miniatura usualmente */}
            {index === thumbnails.length - 1 && displayImages.length > 5 && (
                // Aplicar clase al wrapper del botón para redondear si es la última imagen visible
              <div className="show-all-photos-btn-wrapper bottom-right-rounded">
                <button className="show-all-photos-btn"> {/* Podría tener un icono */}
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '16px', width: '16px', fill: 'currentcolor'}}><path d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM13 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM8 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM13 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM3 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM13 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM8 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path></svg>
                    Ver todas las fotos
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
