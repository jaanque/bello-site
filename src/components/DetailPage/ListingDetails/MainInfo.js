import React from 'react';
import './MainInfo.css'; // Crearemos este archivo CSS

const MainInfo = ({ host, type, guests, bedrooms, beds, baths, description, amenities }) => {
  const defaultAmenities = [
    { name: 'Wi-Fi', icon: '📶' },
    { name: 'Cocina', icon: '🍳' },
    { name: 'Aire acondicionado', icon: '❄️' },
    { name: 'TV', icon: '📺' },
    { name: 'Lavadora', icon: '🧺' },
  ];
  const displayAmenities = amenities && amenities.length > 0 ? amenities : defaultAmenities;

  return (
    <div className="main-info-section">
      <div className="host-intro">
        <h2>{type || 'Alojamiento entero'} anfitrión: {host?.name || 'Anfitrión'}</h2>
        {/* Podríamos añadir una imagen del anfitrión aquí */}
        {/* <img src={host?.avatar || 'placeholder-avatar.jpg'} alt={host?.name} className="host-avatar" /> */}
      </div>
      <div className="specs">
        <span>{guests || 0} huéspedes</span> · <span>{bedrooms || 0} dormitorios</span> · <span>{beds || 0} camas</span> · <span>{baths || 0} baños</span>
      </div>

      <hr className="divider" />

      {/* Aquí podrían ir secciones como "Lo que este lugar ofrece" o "Acerca de este espacio" */}
      <div className="description-section">
        <h3>Acerca de este espacio</h3>
        <p>{description || 'Descripción detallada del alojamiento no disponible. Este es un texto de ejemplo para rellenar el espacio y ver cómo se comporta el diseño. El alojamiento es espacioso y luminoso, perfecto para familias o grupos de amigos que buscan una estancia cómoda y memorable.'}</p>
        {/* Podría haber un botón "Mostrar más" si la descripción es larga */}
      </div>

      <hr className="divider" />

      <div className="amenities-section">
        <h3>Lo que este lugar ofrece</h3>
        <ul className="amenities-list">
          {displayAmenities.map(amenity => (
            <li key={amenity.name} className="amenity-item">
              <span className="amenity-icon">{amenity.icon}</span>
              {amenity.name}
            </li>
          ))}
        </ul>
        {/* Podría haber un botón "Mostrar todos los servicios" */}
      </div>
    </div>
  );
};

export default MainInfo;
